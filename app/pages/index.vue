<script setup lang="ts">
interface WeatherResponse {
  records: {
    location: Array<{
      locationName: string;
      weatherElement: Array<{
        elementName: string;
        time: Array<{
          parameter: { parameterName: string; parameterUnit?: string; }
        }>
      }>
    }>
  }
}

const config = useRuntimeConfig();
const API_KEY = config.public.cwaApiKey;
const dataId = 'F-C0032-001';

// 修正後的 useFetch，解決了所有截圖中的紅色報錯
const { data: weatherData, pending } = await useFetch(
  `https://opendata.cwa.gov.tw/api/v1/rest/datastore/${dataId}`,
  {
    query: { Authorization: API_KEY },
    transform: (res: WeatherResponse) => {
      return res.records.location.find(l => l.locationName === '臺北市') || null;
    }
  }
);
</script>

<template>
  <div class="min-h-[80vh] flex flex-col items-center justify-center px-[5%] text-center animate-fadeInUp">
    
    <div class="mb-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/50 border border-slate-700 text-sm text-blue-400">
      <span class="relative flex h-2 w-2">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
        <span class="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
      </span>
      Backend & Data Engineering
    </div>

    <h1 class="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
      打破格式壁壘 <br class="hidden md:block" />
      <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
        催化數據潛能
      </span>
    </h1>

    <p class="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed">
      Enzyme Code 就像軟體系統中的催化劑<br class="hidden md:block" />
      萃取資料最精華的部分化作最美的資訊
    </p>

    <div v-if="weatherData" class="w-full max-w-2xl p-6 rounded-2xl bg-slate-800/40 border border-slate-700 backdrop-blur-md animate-fadeIn">
      <div class="flex justify-between items-center mb-6 text-left">
        <div>
          <h3 class="text-blue-400 font-mono text-sm uppercase tracking-wider">Live Weather</h3>
          <p class="text-2xl font-bold text-white">{{ weatherData.locationName }}</p>
        </div>
        <span class="text-[10px] text-slate-500 bg-slate-900/50 px-2 py-1 rounded">來源：中央氣象署</span>
      </div>
      
      <div class="grid grid-cols-3 gap-4">
        <div class="text-left p-4 rounded-xl bg-slate-900/50 border border-slate-700/50">
          <p class="text-slate-500 text-xs mb-1">天氣現象</p>
          <p class="text-lg text-white font-medium">{{ weatherData.weatherElement[0].time[0].parameter.parameterName }}</p>
        </div>
        <div class="text-left p-4 rounded-xl bg-slate-900/50 border border-slate-700/50">
          <p class="text-slate-500 text-xs mb-1">降雨機率</p>
          <p class="text-lg text-emerald-400 font-medium">{{ weatherData.weatherElement[1].time[0].parameter.parameterName }}%</p>
        </div>
        <div class="text-left p-4 rounded-xl bg-slate-900/50 border border-slate-700/50">
          <p class="text-slate-500 text-xs mb-1">預估氣溫</p>
          <p class="text-lg text-blue-400 font-medium">
            {{ weatherData.weatherElement[2].time[0].parameter.parameterName }}° - {{ weatherData.weatherElement[4].time[0].parameter.parameterName }}°
          </p>
        </div>
      </div>
    </div>

    <div v-else-if="pending" class="mt-10 flex items-center gap-3 text-slate-500 italic">
      <div class="w-4 h-4 border-2 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
      正在催化即時數據...
    </div>

  </div>
</template>
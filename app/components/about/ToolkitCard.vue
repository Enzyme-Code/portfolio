<script setup lang="ts">
type ToolkitColor = 'blue' | 'emerald' | 'indigo' | 'violet'

interface Props {
  icon: string
  title: string
  items: string[]
  color: ToolkitColor
}

const props = defineProps<Props>()

const colorStyles: Record<ToolkitColor, { border: string; shadow: string; glow: string; iconBg: string; iconText: string; dot: string }> = {
  blue: {
    border: 'hover:border-blue-500/40',
    shadow: 'hover:shadow-blue-500/5',
    glow: 'from-blue-500/5',
    iconBg: 'bg-blue-500/10',
    iconText: 'text-blue-400',
    dot: 'bg-blue-400'
  },
  emerald: {
    border: 'hover:border-emerald-500/40',
    shadow: 'hover:shadow-emerald-500/5',
    glow: 'from-emerald-500/5',
    iconBg: 'bg-emerald-500/10',
    iconText: 'text-emerald-400',
    dot: 'bg-emerald-400'
  },
  indigo: {
    border: 'hover:border-indigo-500/40',
    shadow: 'hover:shadow-indigo-500/5',
    glow: 'from-indigo-500/5',
    iconBg: 'bg-indigo-500/10',
    iconText: 'text-indigo-400',
    dot: 'bg-indigo-400'
  },
  violet: {
    border: 'hover:border-violet-500/40',
    shadow: 'hover:shadow-violet-500/5',
    glow: 'from-violet-500/5',
    iconBg: 'bg-violet-500/10',
    iconText: 'text-violet-400',
    dot: 'bg-violet-400'
  }
}

const styles = computed(() => colorStyles[props.color])
</script>

<template>
  <div
    class="group relative rounded-xl md:rounded-2xl border border-slate-800/80 bg-slate-900/30 hover:bg-slate-900/60 p-4 md:p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
    :class="[styles.border, styles.shadow]"
  >
    <div
      class="absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-br to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
      :class="styles.glow"
      aria-hidden="true"
    ></div>
    <div class="flex items-center gap-2.5 md:gap-3 mb-3 md:mb-5">
      <div
        class="p-2 rounded-lg md:rounded-xl group-hover:scale-110 transition-transform duration-300"
        :class="[styles.iconBg, styles.iconText]"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="icon" />
        </svg>
      </div>
      <h4 class="text-sm md:text-lg font-bold text-slate-200">{{ title }}</h4>
    </div>
    <ul class="space-y-2 md:space-y-3.5 text-xs md:text-sm text-slate-400">
      <li v-for="item in items" :key="item" class="flex items-center gap-2">
        <span class="w-1.5 h-1.5 rounded-full" :class="styles.dot" aria-hidden="true"></span> {{ item }}
      </li>
    </ul>
  </div>
</template>

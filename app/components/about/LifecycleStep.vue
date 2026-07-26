<script setup lang="ts">
type LifecycleColor = 'blue' | 'indigo' | 'emerald' | 'slate'

interface Props {
  number: string
  title: string
  description: string
  color: LifecycleColor
}

const props = defineProps<Props>()

const colorStyles: Record<LifecycleColor, { text: string; border: string; bg: string; shadow: string; hoverText: string }> = {
  blue: {
    text: 'text-blue-400',
    border: 'group-hover:border-blue-500/50',
    bg: 'group-hover:bg-blue-950/20',
    shadow: 'group-hover:shadow-blue-500/10',
    hoverText: 'group-hover:text-blue-400'
  },
  indigo: {
    text: 'text-indigo-400',
    border: 'group-hover:border-indigo-500/50',
    bg: 'group-hover:bg-indigo-950/20',
    shadow: 'group-hover:shadow-indigo-500/10',
    hoverText: 'group-hover:text-indigo-400'
  },
  emerald: {
    text: 'text-emerald-400',
    border: 'group-hover:border-emerald-500/50',
    bg: 'group-hover:bg-emerald-950/20',
    shadow: 'group-hover:shadow-emerald-500/10',
    hoverText: 'group-hover:text-emerald-400'
  },
  slate: {
    text: 'text-slate-300',
    border: 'group-hover:border-slate-500/50',
    bg: 'group-hover:bg-slate-800/30',
    shadow: 'group-hover:shadow-white/5',
    hoverText: 'group-hover:text-slate-300'
  }
}

const styles = computed(() => colorStyles[props.color])
</script>

<template>
  <div class="relative z-10 flex flex-col items-center md:items-start text-center md:text-left group">
    <div
      class="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-slate-900 border border-slate-800 text-base md:text-xl font-bold mb-3 md:mb-5 shadow-lg shadow-black/30 group-hover:scale-105 transition-all duration-300"
      :class="[styles.text, styles.border, styles.bg, styles.shadow]"
    >
      {{ number }}
    </div>
    <h4 class="text-sm md:text-lg font-bold text-slate-200 mb-1 md:mb-2 transition-colors duration-300" :class="styles.hoverText">
      {{ title }}
    </h4>
    <p class="text-xs md:text-sm text-slate-400 leading-relaxed">
      {{ description }}
    </p>
  </div>
</template>

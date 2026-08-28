<script setup lang="ts">
interface Props {
  eyebrow: string
  title: string
  description?: string
  eyebrowClass?: string
  level?: 'h2' | 'h3'
}

const props = withDefaults(defineProps<Props>(), {
  description: '',
  eyebrowClass: 'text-blue-400',
  level: 'h3'
})

const wrapperClass = computed(() =>
  props.level === 'h2' ? 'mb-12 text-center reveal-on-scroll' : 'mb-6 md:mb-14 text-center reveal-on-scroll'
)
const eyebrowLayoutClass = computed(() =>
  props.level === 'h2'
    ? 'mb-3 text-sm font-medium'
    : 'mb-2 md:mb-3 text-xs md:text-sm font-semibold tracking-wider uppercase'
)
const titleClass = computed(() =>
  props.level === 'h2'
    ? 'text-3xl md:text-5xl font-bold text-slate-100'
    : 'text-2xl md:text-4xl font-extrabold text-slate-100 tracking-tight'
)
const descriptionClass = computed(() =>
  props.level === 'h2'
    ? 'mt-5 text-slate-400 max-w-2xl mx-auto leading-relaxed'
    : 'mt-2 text-slate-400 text-xs md:text-sm max-w-xl mx-auto'
)
</script>

<template>
  <div :class="wrapperClass">
    <p :class="[eyebrowLayoutClass, eyebrowClass]">
      {{ eyebrow }}
    </p>
    <component :is="level" :class="titleClass">
      {{ title }}
    </component>
    <p v-if="description" :class="descriptionClass">
      {{ description }}
    </p>
  </div>
</template>

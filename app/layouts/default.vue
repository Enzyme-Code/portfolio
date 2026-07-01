<template>
  <div class="flex flex-col min-h-screen bg-slate-950 text-white scroll-smooth">
    <AppHeader />

    <main class="flex-grow flex flex-col">
      <slot />
    </main>

    <AppFooter />
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'

const getInitialTheme = () => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) return savedTheme
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

const theme = ref(getInitialTheme())

const toggleTheme = () => {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
  localStorage.setItem('theme', theme.value)
  applyTheme()
}

const applyTheme = () => {
  const root = document.documentElement
  if (theme.value === 'dark') {
    root.classList.add('dark')
    root.classList.remove('light')
  } else {
    root.classList.remove('dark')
    root.classList.add('light')
  }
}

onMounted(() => {
  applyTheme()
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  const handleThemeChange = (e) => {
    if (!localStorage.getItem('theme')) {
      theme.value = e.matches ? 'dark' : 'light'
      applyTheme()
    }
  }
  mediaQuery.addListener(handleThemeChange)
  return () => mediaQuery.removeListener(handleThemeChange)
})
</script>

<template>
  <button
    class="flex items-center justify-center w-10 h-10 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:bg-gray-200 dark:hover:bg-zinc-800 transition-colors duration-300"
    @click="toggleTheme" :aria-label="theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'">
    <svg v-if="theme === 'dark'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
      fill="#18181b" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6">
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
    <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
      class="w-6 h-6 stroke-gray-700">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  </button>
</template>
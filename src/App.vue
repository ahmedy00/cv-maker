<template>
  <RouterView/>
</template>

<script setup lang="ts">

import { onBeforeMount } from 'vue'
import { useAppStore } from './store'
import i18n from './plugins/i18n'

onBeforeMount(() => {
  const store = useAppStore()
  i18n.global.locale = store.currentLanguage.code || 'en'
})

</script>

<style>
  * {
    font-family: "Inter var experimental", "Inter var", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    font-weight: 500;
  }
</style>
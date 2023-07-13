<template>
  <div class="home-page">
    <HomeHeader :header-height="headerHeight"/>
    <HomeBody :header-height="headerHeight"/>
  </div>
</template>

<script setup lang="ts">
import HomeHeader from '@/components/home/HomeHeader.vue'
import HomeBody from '@/components/home/HomeBody.vue'

const headerHeight = 65
</script>


<style scoped>

.home-page {
  width: 100%;
  height: 100%;
}

</style>
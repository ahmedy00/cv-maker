<template>
  <div class="sidebar-wrapper">
    <div class="sidebar-container">
      {{ $t('Hello') }}
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

.sidebar-wrapper {
  position: absolute;
  height: 100%;
  width: 100%;
}

.sidebar-container {
  background: red;
  position: fixed;
  top: 0;
  left: 0;
  width: 4rem;
  height: 100%;
  transition: height 1s;
}

@media (max-width: 992px) {
  .sidebar-container {
    top: calc(100% - 3rem);
    width: 100%;
    height: 4rem;
    transition: height 1s, width 1s;
  }
}

</style>
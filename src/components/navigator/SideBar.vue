<template>
  <v-layout>
    <v-navigation-drawer
      :rail="true"
      style="height: 500px"
      class="my-auto"
      color="#42b883"
    >
      <v-list density="compact" nav>
        <v-list-item value="icon" class="d-flex justify-center">
          <i class="fa-solid fa-chevron-left"></i>
        </v-list-item>
        <v-list-item></v-list-item>
        <v-list-item></v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-layout>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>
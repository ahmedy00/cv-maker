<template>
  <div :style="{height: `calc(100vh - ${props.headerHeight}px)`}">
    <section class="d-flex flex-column align-items-center justify-content-center h-50">
      <h1 class="section-title text-center mb-5">{{ $t('Welcome', { name: appName }) }}</h1>
      <p class="section-info text-center">{{ $t('SubHeader') }}</p>
      <div>
        <RouterLink to="edit">
          <v-btn dense :color="'#42b883'" style="color: white">{{ $t('Create') }}</v-btn>
        </RouterLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { appName } from '../../app'

const props = defineProps({
  headerHeight: {
    type: Number,
    default: 65
  }
})

</script>


<style scoped>

.section-title {
  font-size: 4rem;
  background: -webkit-linear-gradient(315deg,#42d392 25%,#647eff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.section-info {
  font-size: 1.8rem;
  color: #3c3c3cb3;
  padding: 0 10px;
}

@media (max-width: 992px) {
  .section-title {
    font-size: 3rem;
  }

  .section-info {
    font-size: 1.5rem;
  }
}

@media (max-width: 576px) {
  .section-title {
    font-size: 2rem;
  }

  .section-info {
    font-size: 1rem;
  }
}

</style>
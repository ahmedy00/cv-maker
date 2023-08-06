<template>
  <div class="body-wrapper" :style="{height: `calc(100vh - ${props.headerHeight}px)`, background: store.selectedTheme === 'dark' ? 'linear-gradient(90deg,#a1a1a1 -250%,#333)' : ''}">
    <section class="d-flex flex-column align-items-center justify-content-center h-50">
      <h1 class="section-title text-center mb-5 pa-1" :style="{color: store.selectedTheme === 'dark' ? 'linear-gradient(315deg,#647eff 25%,#42d392)' : 'linear-gradient(315deg,#42d392 100%,#647eff)'}">{{ $t('Welcome', { name: appName }) }}</h1>
      <p class="section-info text-center" :style="{color: store.selectedTheme === 'dark' ? '#ebebeb99' : '#3c3c3cb3'}">{{ $t('SubHeader') }}</p>
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
import { useAppStore } from '../../store'

const props = defineProps({
  headerHeight: {
    type: Number,
    default: 65
  }
})

const store = useAppStore()

</script>


<style scoped>

.body-wrapper {
  transition: background 2s ease-in;
}

.section-title {
  font-size: 4rem;
  background: -webkit-linear-gradient(315deg,#42d392 25%,#647eff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.section-info {
  font-size: 1.8rem;
  transition: color .5s ease;
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
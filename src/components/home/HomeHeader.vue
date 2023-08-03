<template>
  <v-container fluid style="background: #42b883">
      <v-row>
        <v-col :cols="4" @click="routeToHome">
          <img width="45" src="https://s3-alpha.figma.com/hub/file/1913095808/a7bdc469-cd70-4ea1-bb57-b59204ad8182-cover.png" alt="">
        </v-col>
        <v-col class="d-flex align-center justify-end" :cols="16">
          <span class="mr-6">
            <a class="item-link item" href="https://github.com/ahmedy00/cv-maker" target="_blank">{{ $t('Contribution') }}</a>
          </span>
          <RouterLink class="item-link" to="">
            <span class="item mr-6">{{ $t('PreviousResumes') }}</span>
          </RouterLink>
          <span class="item item-link cursor-pointer mr-6">Lorem</span>
        </v-col>
        <v-col class="d-flex align-center justify-content-end pr-16" :cols="4">
          <v-menu>
            <template v-slot:activator="{ props }">
                <v-icon :color="'white'" :size="18" v-bind="props">
                  <i class="fa-solid fa-earth-asia"></i>
                </v-icon>
            </template>
           <v-card>
            <v-list class="pa-0">
              <v-list-item
                class="pa-0"
                v-for="(language, index) in languages"
                :key="`language-${index}`"
              >
                <v-btn
                  @click="changeLanguage(language)"
                  dense
                >
                  {{ language.name }}
                </v-btn>
              </v-list-item>
            </v-list>
          </v-card>
              </v-menu>
        </v-col>
      </v-row>
    </v-container>
  <div>
    <header :style="{height: `${props.headerHeight}px`, background: 'red'}">
      <v-container fluid="">
        <v-row>
          <v-col @click="routeToHome">
            <img width="45" src="https://s3-alpha.figma.com/hub/file/1913095808/a7bdc469-cd70-4ea1-bb57-b59204ad8182-cover.png" alt="">
          </v-col>
        </v-row>
      </v-container>
        <div class="container-fluid h-100">
          <div class="row w-100 h-100">
            <div class="col-5 ms-5 d-flex align-items-center cursor-pointer" @click="routeToHome">
              <img width="45" src="https://s3-alpha.figma.com/hub/file/1913095808/a7bdc469-cd70-4ea1-bb57-b59204ad8182-cover.png" alt="">
            </div>
            <div class="item-container col-6 d-flex flex-row-reverse align-items-center">
              <span class="item item-link cursor-pointer me-4">Lorem</span>
              <RouterLink class="item-link" to="">
                <span class="item me-4">{{ $t('PreviousResumes') }}</span>
              </RouterLink>
              <span class="me-4">
                <a class="item-link item" href="https://github.com/ahmedy00/cv-maker" target="_blank">{{ $t('Contribution') }}</a>
              </span>
            </div>
            <div class="col-1">

            </div>
          </div>
        </div>
    </header>
  </div>
</template>

<script setup lang="ts">
import { languages } from '../../app'
import router from '../../router'
import { onBeforeMount, ref } from 'vue'
// import i18n from '../../locales/i18n'
import { useAppStore } from '../../store'


const props = defineProps({
  headerHeight: {
    type: Number,
    default: 65
  }
})

const store = useAppStore()

onBeforeMount(() => {
  
})

const selectedLanguage = ref<string>(store.currentLanguage.code)

const routeToHome = () => {
  router.push({
    name: 'Home'
  })
}

const changeLanguage = (lang) => {
  store.setCurrentLanguage(lang)
}

</script>


<style scoped>

.item-container {
  white-space: nowrap;
  overflow: hidden;
}

.item i {
  font-size: 1.2rem;
}

.item-link {
  color: white;
  text-decoration: none;
}

.item:hover {
  color: #647eff;
}

.cursor-pointer {
  cursor: pointer;
}


/* breakpoint: 992 */

@media (max-width: 992px) {
  .item {
    display: none;
  }
}


</style>
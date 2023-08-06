<template>
  <v-container fluid style="background: #42b883" :style="{height: `${props.headerHeight}px`}">
      <v-row>
        <v-col :cols="4" @click="routeToHome">
          <img width="45" src="https://s3-alpha.figma.com/hub/file/1913095808/a7bdc469-cd70-4ea1-bb57-b59204ad8182-cover.png" alt="">
        </v-col>
        <v-col class="d-flex align-center justify-end" :cols="8">
          <span class="mr-6">
            <a class="item-link item" href="https://github.com/ahmedy00/cv-maker" target="_blank">{{ $t('Contribution') }}</a>
          </span>
          <RouterLink class="item-link" to="">
            <span class="item mr-4">{{ $t('PreviousResumes') }}</span>
          </RouterLink>
          <v-list-item class="mr-2">
            <v-btn
              dense
              :ripple="false"
              elevation="0"
              :color="store.selectedTheme === 'light' ? '#f3f3f3' : 'transparent'"
              class="rounded-5 border-3 d-flex align-items-center justify-content-center"
              width="60px"
              height="30px"
              @click="changeTheme"
            >
              <i v-if="store.selectedTheme === 'light'" class="fa-solid fa-sun pr-8 trans"></i>
              <i v-else class="fa-solid fa-moon pl-8 trans"></i>
            </v-btn>
          </v-list-item>
          <v-menu>
            <template v-slot:activator="{ props }">
                <v-icon :color="'white'" :size="20" v-bind="props">
                  <i class="fa-solid fa-earth-asia"></i>
                </v-icon>
            </template>
            <v-card>
              <v-list class="py-0">
                <v-list-item
                  @click="changeLanguage(language)"
                  v-for="(language, index) in languages"
                  :key="`language-${index}`"
                  dense
                  :disabled="store.currentLanguage.code === language.code"
                >
                  {{ language.name }}
                </v-list-item>
              </v-list>
            </v-card>
          </v-menu>
        </v-col>
      </v-row>
    </v-container>
</template>

<script setup lang="ts">
import { languages } from '../../app'
import router from '../../router'
import { useAppStore } from '../../store'

const props = defineProps({
  headerHeight: {
    type: Number,
    default: 72
  }
})

const store = useAppStore()

const routeToHome = () => {
  router.push({
    name: 'Home'
  })
}

const changeLanguage = (lang) => {
  store.setCurrentLanguage(lang)
}

const changeTheme = () => {
  store.setTheme()
}

</script>


<style scoped>

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

.trans {
  transition: opacity .25s ease;
  opacity: 1;
}


/* breakpoint: 992 */
/*
@media (max-width: 992px) {
  .item {
    display: none;
  }
}
 */


</style>
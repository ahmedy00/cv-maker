<template>
  <div>
    <header :style="{height: `${props.headerHeight}px`, background: '#42b883'}">
        <div class="container-fluid h-100">
          <div class="row w-100 h-100">
            <div class="col-5 ms-5 d-flex align-items-center cursor-pointer" @click="routeToHome">
              <img width="45" src="https://s3-alpha.figma.com/hub/file/1913095808/a7bdc469-cd70-4ea1-bb57-b59204ad8182-cover.png" alt="">
            </div>
            <div class="item-container col-6 d-flex flex-row-reverse align-items-center">
              <button class="btn item item-button">
                <i class="fa-solid fa-earth-asia"></i>
              </button>
              <span class="item item-link cursor-pointer me-4">Lorem</span>
              <RouterLink class="item-link" to="">
                <span class="item me-4">Previous Resumes</span>
              </RouterLink>
              <span class="me-4">
                <a class="item-link item" href="https://github.com/ahmedy00/cv-maker" target="_blank">Contribution</a>
              </span>
            </div>
          </div>
        </div>
    </header>
  </div>
</template>

<script setup lang="ts">
import { languages } from '../../app'
import router from '../../router'

const props = defineProps({
  headerHeight: {
    type: Number,
    default: 65
  }
})

const routeToHome = () => {
  router.push({
    name: 'Home'
  })
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

.item-button {
  font-size: 1.2rem;
  border: none;
  color: #fff
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
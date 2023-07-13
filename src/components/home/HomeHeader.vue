<template>
  <div>
    <header :style="{height: `${props.headerHeight}px`, background: '#42b883'}">
        <div class="container-fluid h-100">
          <div class="row w-100 h-100">
            <div class="col-5 ms-5 d-flex align-items-center">
              <img width="45" src="https://s3-alpha.figma.com/hub/file/1913095808/a7bdc469-cd70-4ea1-bb57-b59204ad8182-cover.png" alt="">
            </div>
            <div class="item-container col-6 d-flex flex-row-reverse align-items-center">
              <span class="item item-link cursor-pointer">Lorem ipsum</span>
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

const props = defineProps({
  headerHeight: {
    type: Number,
    default: 65
  }
})

</script>


<style scoped>

.item-link {
  color: white;
  text-decoration: none;
}

.item-container {
  white-space: nowrap;
  overflow: hidden;
}

.item:hover {
  color: #647eff;
}

.cursor-pointer {
  cursor: pointer;
}

.icon {
  display: none;
}

/* breakpoint: 992 */

@media (max-width: 992px) {
  .item {
    display: none;
  }

  .icon {
    display: block;
  }
}


</style>
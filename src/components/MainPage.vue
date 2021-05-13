<template>
  <div class="container-lg">
    <firstBlock />
    <secondBlock />
  </div>
</template>

<script>

import firstBlock from './ComponentsOfMainPage/firstBlock.vue'
import secondBlock from './ComponentsOfMainPage/secondBlock.vue'

export default {
  name: 'MainPage',
  components: {
    firstBlock,
    secondBlock
  }
}
</script>

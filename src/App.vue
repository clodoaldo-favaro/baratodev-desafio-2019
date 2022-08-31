<template>
  <the-header></the-header>
  <router-view></router-view>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
import { library } from '@fortawesome/fontawesome-svg-core'


export default {
  components: {
    TheHeader
  }
}

</script>
<template>
  <the-header></the-header>
  <div class="main-container">
    <router-view></router-view>
  </div>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';

export default {
  components: {
    TheHeader
  }
}

</script>


<style>
	.main-container {
		padding: 0 8px;
		margin: 6rem 0;
	}

	@media screen and (min-width: 640px) {
		.main-container {
			padding: 0 64px;
		}
	}
</style>
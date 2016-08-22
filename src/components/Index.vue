<template>
	<div style="display:flex;flex-direction:column">
		<button class="btn btn-default btn-lg" style="margin: 10px" v-link="{ path: '/app'}">主页</button>
		<button class="btn btn-default btn-lg" style="margin: 10px" v-link="{ path: '/chart'}">Test页</button>
	</div>
</template>
<script>
import { alert } from 'vue-strap'
export default {
  components: {
    alert
  },
  methods: {},
  ready () {}
}
</script>
<style>
</style>

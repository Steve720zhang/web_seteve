<template>
	<div style="display:flex;flex-direction:column">
		<button class="btn btn-default btn-lg" v-link="{ path: '/two'}">two</button>
		<button class="btn btn-default btn-lg" v-link="{ path: '/chart'}">two</button>
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

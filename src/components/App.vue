<template>
	<div>
		<img class="logo" src="../assets/logo.png">
		<hello></hello>
	</div>
</template>

<script>
import Hello from './Hello'
export default {
  components: {
    Hello
  }
}
</script>

<style>
	.logo {
		width: 100px;
		height: 100px
	}
</style>

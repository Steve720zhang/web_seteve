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
	html {
		height: 100%;
		background-color: #d9edf7;
	}

	body {
		display: flex;
		justify-content: center;
		width: 1000px;
		margin: auto;
		background-color: seashell;
		height: 100%;
	}

	.logo {
		width: 100px;
		height: 100px
	}
</style>

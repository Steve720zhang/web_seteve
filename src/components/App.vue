<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
	<div class="zzq_main_header">
		<img src="http://7xrgnr.com1.z0.glb.clouddn.com/cj1029.jpg" class="zzq_main_header_img">
		<div class="zzq_main_header_right">
			<input @keyup.enter="submit"  v-model="searchStr" type="email" class="form-control" id="exampleInputEmail1" placeholder="搜索你感兴趣的内容">
		</div>
		<div class="zzq_main_header_right"></div>
	</div>
	<div class="zzq_top_divider" v-bind:style="{ width: screenW + 'px', marginLeft: screenL + 'px' }"></div>
	<alert type="info" :duration="2000" width="300px" :show.sync="alertInfo" dismissable placement="top-right">
		<strong>消息!</strong>
		<p>{{searchStr}} ==>就不让你搜</p>
	</alert>
</template>
<script>
import { alert } from 'vue-strap'
export default {
  data () {
    return {
      searchStr: '',
      alertInfo: false,
      screenW: '',
      screenL: ''
    }
  },
  components: {
    alert
  },
  methods: {
    submit () {
      if (this.alertInfo) return
      this.alertInfo = !this.alertInfo
    }
  },
  ready () {
    console.log('sw', window.sw)
    this.screenW = window.sw
    if (this.screenW > 1200) {
      this.screenL = (1200 - this.screenW) / 2
    } else {
      this.screenL = 0
    }
    console.log('sL', this.screenL)
  }
}
</script>

<style>
	.zzq_main_header {
		height: 150px;
		display: flex;
		flex-direction: row;
		background-color: #cccccc;
	}
	.zzq_main_header_img {
		margin: 10px;
		width: 240px;
		height: 130px;
	}
	.zzq_main_header_right {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.zzq_top_divider {
		background-color: #5e5e5e;
		height: 30px;
	}
</style>

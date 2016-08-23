<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
	<div class="zzq_main_header">
		<img src="http://www.steve720zhang.com/Honma-Meiko-desktopsky-78504.jpg" class="zzq_main_header_img">
		<div class="zzq_main_header_right">
			<input @keyup.enter="submit"  v-model="searchStr" type="email" class="form-control" id="exampleInputEmail1" placeholder="搜索你感兴趣的内容">
		</div>
		<div class="zzq_main_header_right"></div>
	</div>
	<div class="zzq_top_divider" v-bind:style="{ width: screenW + 'px', marginLeft: screenL + 'px' }"></div>
	<div class="zzq_middle_container">
		<div class="zzq_middle_left">
			<div class="scroll_container">
				<carousel indicators="true" controls="true">
					<slider>
						<img class="scroll_container" src="http://www.steve720zhang.com/9aca9acb39dbb6fdfbae9cd40824ab18962b375f.jpg?imageView2/2/h/500">
						<div class="carousel-caption"></div>
					</slider>
					<slider>
						<img class="scroll_container" src="http://www.steve720zhang.com/20150601050601_m5YuC.jpeg?imageView2/2/h/500">
					</slider>
					<slider>
						<img class="scroll_container" src="http://7xrgnr.com1.z0.glb.clouddn.com/cj1029.jpg?imageView2/2/h/500">
					</slider>
				</carousel>
			</div>
		</div>
		<div class="zzq_middle_right"></div>
	</div>
	<alert type="info" :duration="2000" width="300px" :show.sync="alertInfo" dismissable placement="top-right">
		<strong>消息!</strong>
		<p>{{searchStr}} ==>就不让你搜</p>
	</alert>
</template>
<script>
import { alert, carousel, slider } from 'vue-strap'
export default {
  data () {
    return {
      searchStr: '',
      alertInfo: false,
      screenW: '',
      screenL: 0
    }
  },
  components: {
    alert,
    carousel,
    slider
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
      this.screenW = 'auto'
    }
    console.log('sL', this.screenL)
  }
}
</script>

<style>
	.scroll_container {
		height: 400px;
	}
	.zzq_middle_left {
		flex:1.8;
	}
	.zzq_middle_right {
		flex: 1;
	}
	.zzq_middle_container {
		display: flex;
		flex-direction: row;
	}
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

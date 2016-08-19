<template>
	<div>
    <div>this is template body</div>
    <div style="width: 300px;height: auto; border: 1px solid #00b3ee;padding: 2px;">
      <canvas v-el:ch></canvas>
    </div>
	</div>
</template>
<script>
// import Chart from 'chart.js'
var Char = require('Chart')
export default{
  data () {
    return {
      msg: 'hello vue'
    }
  },
  methods: {},
  component: {},
  ready () {
    let canvas = this.$els.ch
    let chart = new Char(canvas, {
      type: 'radar',
      data: {
        labels: ['drinking', 'sleeping', 'designing', 'coding', 'cycling', 'running'],
        datasets: [
          {
            label: '体质健康成绩分析图',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            pointBackgroundColor: 'rgba(255,99,132,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(255,99,132,1)',
            data: [68, 40, 59, 96, 47, 100]
          }
        ]
      }
      // data: {
      //   labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      //   datasets: [{
      //     label: '# of Votes',
      //     data: [12, 19, 3, 5, 2, 3]
      //   }]
      // },
    })
    console.log(chart)
  }
}
</script>

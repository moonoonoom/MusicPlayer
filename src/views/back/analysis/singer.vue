<template>
    <div>
        <div id="echarts_box" style="width:100%; height:100%;"></div>
    </div>
</template>

<script>
import echarts from 'echarts';
export default{
    name:"SingerAnalysis",
     data () {
            return {
                charts: '',
                opinion:['男','女'],
                opinionData:[
                  {value:335, name:'男'},
                  {value:310, name:'女'},
                
                ]
            }
        },
    mounted(){
         this.$nextTick(function() {
                this.drawPie('echarts_box');
            })
    },
    methods:{
            drawPie(id){
               this.charts = echarts.init(document.getElementById(id))
               this.charts.setOption({
                 tooltip: {
                   trigger: 'item',
                  
                 },
                 legend: {
                   orient: 'vertical',
                   x: 'left',
                   data:this.opinion
                 },
                 series: [
                   {
                     name:'性别',
                     type:'pie',
                     radius:'70%',
                     data:this.opinionData
                   }
                 ]
               })
            }
        },
    
}
</script>

<style scoped>

</style>

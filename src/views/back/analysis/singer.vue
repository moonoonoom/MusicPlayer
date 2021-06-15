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
                opinion:['女','男','组合'],
                genderData:[]
            }
        },
    mounted(){
        this.getGender();
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
                     data:this.genderData
                   }
                 ]
               })
            },
            getGender(){
                this.$axios
                    .get(`/singer/detail/sex`)
                    .then(response =>{
                        // console.log(response.data.data);
                        let data = response.data.data;
                        
                        for(let key in data){
                            var a = {value:data[key],name:key}
                            this.genderData.push(a);
                        }
                        console.log(this.genderData);
                        this.drawPie('echarts_box');
                    })
                    .catch(failResponse =>{
                    })
            }
        },
    
}
</script>

<style scoped>

</style>

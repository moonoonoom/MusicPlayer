<template>
    <div class="navBanner">
        <el-button @click="back" :disabled="this.backDis" class="circleBtn" type="info" icon="el-icon-arrow-left" circle></el-button>
        <el-button @click="go" class="circleBtn" type="info" icon="el-icon-arrow-right" circle></el-button>
    </div>
</template>

<script>
export default {
    name:'NavBanner',
    data(){
        return{
            backDis:true
        }
    },
    mounted(){
        this.setBackDis();
    },
    methods:{
        back(){
            this.$router.back();
        },
        go(){
            this.$router.go();
        },
        setBackDis(){
            if(window.history.length <=1){
                this.backDis = true;
            }else{
                this.backDis = false;
            }
        }
    }
}
</script>

<style scoped>
.circleBtn{
    float:left;
    margin-top:10px;
}

.navBanner{
    padding-left:20px;
}
</style>

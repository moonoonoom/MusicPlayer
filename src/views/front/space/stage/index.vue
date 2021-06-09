<template>
    <div class="stage" >
         <router-view></router-view>
    </div>
</template>

<script>

export default{
    name: 'Stage',
    
}
</script>


<style scoped>
.stage{
    /* background: -webkit-linear-gradient(bottom,black,#003377 ) no-repeat; */

    float:left;
    height:100%;
    width:86%;
}

</style>
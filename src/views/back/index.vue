<template>
    <div>
        <NavBar  />
        <div style="height:90%">
            <SideBar class="sidebar" style="height:100%; float:left; width:13%"  />
            <div class="content" style="height:100%; width:87%">
                <router-view></router-view>
            </div>
        </div> 
    </div>
 
</template>


<script>
import SideBar from '../back/sidebar.vue'
import NavBar from '../back/navbar.vue'


export default {
    name: 'Back',
    components:{
        SideBar,
        NavBar
    },
    created(){
        if(!this.$cookies.isKey('username')){
            this.$router.push({
                path:'/admin/login'
            });
        }
    }
}

</script>


<style scoped>
.content{
    float:left;
}
</style>
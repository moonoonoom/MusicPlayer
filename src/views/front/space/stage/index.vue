<template>
    <div class="stage" >
        <div class="navBanner">
            <NavBanner />
        </div>
         <router-view v-on="$listeners" ></router-view>
         
    </div>
</template>

<script>
import NavBanner from "../../components/navBanner"
export default{
    name: 'Stage',
    inheritAttrs: false,
    components:{
        NavBanner
    },
    data(){
        return{
            songUrl:''
        }
    },
    
    methods:{
        playSong(url){
            this.songUrl = url;
            let audio = document.getElementById("player");
            audio.play();
        }
    }
}
</script>


<style scoped>
.stage{
    /* background: -webkit-linear-gradient(bottom,black,#003377 ) no-repeat; */

    float:left;
    height:100%;
    width:86%;

}

.navBanner{
    position:absolute;
    height:40px;
    width:100%;
    z-index: 999;
}

</style>
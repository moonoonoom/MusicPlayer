<template>
  <div style="height:1400px">
    <div style="height:92%">
      <SideBar />
      
      <Stage @sendSongUrl="getSongURl"  />
    </div>
    <div style="height:8%">
      <Player />
    </div>
    
  </div>
</template>

<script>
import SideBar from '../sidebar'
import Player from './player'
import Stage from './stage'
export default{
  name: 'Space',
  components: {
    SideBar,
    Player,
    Stage
  },
  data(){
    return{
      songUrl:''
    }
  },
  methods:{
        getSongURl(url){
            this.songUrl = url;
            let audio = document.getElementById("player");
            audio.play();
        }
    }
}
</script>

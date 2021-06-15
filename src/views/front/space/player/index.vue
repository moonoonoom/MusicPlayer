<template>
    <div class="player">
        <div class="pic">
            <img class="img" @click="goToSong" height="50px" width="50px"  :src="this.picSrc">
        </div>
        <div class="name">
            {{this.name}}
        </div>
        <div class="mainBtn" >
            <el-button type="info" @click="playOrPause"  circle>
                <i v-if='!isPlaying' class="playBtn el-icon-video-play" ></i>
                <i v-else class="playBtn el-icon-video-pause"  ></i>
            </el-button>
        </div>
        <audio id="player" :src="songUrl"></audio>
    </div>
</template>


<script>

export default {
    name: 'Player',
    data(){
        return{
            songUrl:'',
            isPlaying:false,
            picSrc:'http://p2.music.126.net/lGKTPIR0dvEt09OMlzflxA==/93458488376709.jpg',
            name:'',
            songId:''
        }
    },
    mounted(){
        this.bus.$on('sendSongUrl',msg=>{
            console.log("传值成功");
            console.log(msg);
            this.songUrl = msg.url;
            this.picSrc = msg.pic;
            this.name = msg.name;
            this.songId = msg.id;
        })
    },
    methods:{
        play(){
            let audio = document.getElementById("player");
            audio.play();
            this.isPlaying=true;
        },
        pause(){
            let audio = document.getElementById("player");
            audio.pause();
            this.isPlaying=false;
        },
        playOrPause(){
            if(this.isPlaying){
                this.pause();
            }else{
                this.play();
            }
        },
        goToSong(){
            console.log("yes");
              this.$router.push({
                path:'/space/song',
                query:{
                    id:this.songId
                }
            });
        }
    }
}
</script>

<style scoped>
.player{
    background-color: #181818;
    height:100%;
}

.pic{
    float:left;
}

.pic .img{
    object-fit: cover;
    cursor : pointer;
}

.name{
    float:left;
    color:white;
    font-weight: bold;
    width:200px;
}

.playBtn{
    font-size:20px;
}
</style>
<template>
    <div class="player">
        <!-- <div class="pic">
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
        <audio id="player" :src="songUrl"></audio> -->
        <el-row>
            <el-col :span="12">
                 <aplayer
                    style="background-color: #181818;margin:0;"
                    :music="this.music"
                    :list="list"
                    :listFolded="true"

                    >
                </aplayer>
            </el-col>
            <el-col class="iconCol" :span="12">
                <!-- <div class="iconBtn">
                        <i class="el-icon-tickets"/>
                </div> -->
                <div class="iconBtn">
                <el-popover
                    placement="right"
                    width="400"
                    trigger="click">
                    <el-table 
                        :show-header="false"
                        :data="list">
                        <el-table-column  property="title" label="歌名"></el-table-column>
                        <el-table-column  property="artist" label="艺人"></el-table-column>
                    </el-table>
                    
                        <i  slot="reference" class="el-icon-tickets"/>
                    <!-- </div> -->
                    <!-- <el-button slot="reference">click 激活</el-button> -->
                </el-popover>
                <i @click="goToSong" class="el-icon-more"/>
                </div>
            </el-col>
        </el-row>
           
            
    </div>
</template>


<script>
import aplayer from 'vue-aplayer'
export default {
    name: 'Player',
    components:{
        aplayer
    },
    data(){
        return{
            songUrl:'',
            isPlaying:false,
            picSrc:'',
            name:'',
            songId:'',
            music:{
                title: '',
                artist: '',
                src: '',
                pic: '',
                lrc: ''
            },
            list:[],
            isShuffule:true
        }
    },
    mounted(){
        this.bus.$on('sendSongUrl',msg=>{
            console.log("传值成功");
            console.log(msg);
            const tempMusic = {
                src:msg.url,
                pic:msg.pic,
                title:msg.name,
                artist:msg.singerName,
                lrc:msg.lyric
            };
            // Vue.js 不能检测到对象属性的添加或删除
            // this.$set(this.music,"src",msg.url);
            this.music = tempMusic;
            this.list.push(tempMusic);
            this.songId = msg.id;
            console.log("music");
            console.log(this.music);
        });
        
        this.bus.$on('sendSongList',msg=>{
            console.log('接收歌单成功');
            console.log(msg);
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

<style>
.player{
    background-color: #181818;
    height:100%;
}
.player .aplayer{
    /* width:600px; */
    height:100%;
}
.player .aplayer-title{
    color:white;
}
.el-row{
    height: 100%;
}

.iconCol{
    height:100%;
}

.iconBtn{
    color:white;
    font-size: 24px;
    text-align:center;
    position: relative;
    height: 100%;
    cursor: pointer;
}

.iconBtn .el-icon-tickets{
    position: absolute;
    bottom:0;
    left:0;
}
.iconBtn .el-icon-more{
    position: absolute;
    bottom:0;
    left:26px;
}
</style>
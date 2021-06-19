<template>
    <div>
        <NavMenu style="position: fixed; width:100%" />
        <div class="recommend">
          <div class="text">
            <div class="blank"></div>
            <div class="title">
              歌单推荐
            </div>
            <div class="word">
              <div class="span1">以下是</div>
              <div class="span2">今天为您</div>
              <div class="span3">精选的歌单</div>
            </div>
            <div class="btn">
               <el-button type="primary" @click="goToPlayer()" round>进入播放器</el-button>
            </div>
          </div>
          <div class="blank"></div>
          <div class="songList" :key="songList.id" v-for="songList in songLists">
            
            <SongListSqu :listName="songList.title" :picSrc="songListPic(songList.pic)" />
          </div>
        </div>
        <div class="recent"></div>
    </div>
</template>

<script>
import NavMenu from '../navmenu'
import SongListSqu from '../components/songList/square.vue'
export default {
  name: 'HomePage',
  components: {
    NavMenu,
    SongListSqu
  },
  data(){
    return{
      songLists:[],
      songListsCount:8
    }
  },
  mounted(){
    this.getSongList(this.songListsCount);
  },
  methods:{
    getSongList(num){
            this.$axios
                .get(`/songList/getRandomSongList/${num}`)
                .then(response =>{
                    console.log(response);
                    this.songLists = response.data.data;
                })
                .catch(failResponse =>{

                })
        },
    goToPlayer(){
      this.$router.push({
        path:'/space'
      })
    },
    songListPic(pic){
        if(pic==null){
            return 'http://p2.music.126.net/lGKTPIR0dvEt09OMlzflxA==/93458488376709.jpg';
        }else{
            // console.log(pic);
            return pic;
        }
        
    }
  }
}
</script>

<style scoped>
.recommend{
    height: 800px;
    width: 100%;
    background: -webkit-linear-gradient(bottom,black,#85C1E9) no-repeat;
}

.recommend .text{
  width:40%;
  height:100%;
  float:left;
  color:white;
  font-weight: bold;
}

.recommend .text .title{
  font-size:70px;
  padding-bottom: 10px;
}
.recommend .text .word{
  font-size:30px;
}
.recommend .text .btn{
  padding-top: 20px;
}
.recommend .pic{
  width:60%;
  height:100%;
  float:left;
}


.recent{
    height: 800px;
    width: 100%;
    background: -webkit-linear-gradient(left,#85C1E9,#6C3483) no-repeat;
}

.blank{
  height: 130px;
}

.songList{
  float:left;
  padding-right: 20px;
  padding-top:10px;
}

</style>

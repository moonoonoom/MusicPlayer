<template>
    <div class="main">
        <div class='navBanner'></div>
        <div class="title">
            {{this.greeting()}}
        </div>

        <div class="songList" :key="songList.id" v-for="songList in firstSongLists">
            <SongListRec :listName="songList.title" 
                         :picSrc="songListPic(songList.pic)"
                         :id="songList.id" />
        </div>

        <div class="title">
            推荐歌手
        </div>
        <div class="artist" :key="artist.id" v-for="artist in artistList">
            <ArtistPanel  :name="artist.name" :picSrc="artist.pic" :singerId="artist.singerId" />
        </div>
    </div>
</template>

<script>
import SongListRec from "../../components/songList/rectangle"
import ArtistPanel from "../../components/artist/artistPanel"

export default{
    name:'Main',
    components:{
        SongListRec,
        ArtistPanel
    },
    data(){
        return{
            firstSongLists:[],
            artistList:[],
            firstSongListsCount:8,
            artistsCount:7
        }
    },
    mounted(){
        this.getFirstSongList(this.firstSongListsCount);
        this.getArtists(this.artistsCount);
    },
    methods:{
        getFirstSongList(num){
            this.$axios
                .get(`/songList/getRandomSongList/${num}`)
                .then(response =>{
                    console.log(response);
                    this.firstSongLists = response.data.data;
                })
                .catch(failResponse =>{

                })
        },
        getArtists(num){
            this.$axios
                .get(`/singer/getRandomSinger/${num}`)
                .then(response =>{
                    // console.log(response);
                    this.artistList = response.data.data;
                    // this.firstSongLists = response.data.data;
                })
                .catch(failResponse =>{

                })
        },
        songListPic(pic){
            if(pic==null){
                return 'http://p2.music.126.net/lGKTPIR0dvEt09OMlzflxA==/93458488376709.jpg';
            }else{
                // console.log(pic);
                return pic;
            }
           
        },
        getTime(){
            let date = new Date();
            let h = date.getHours();
            return h;
        },
        greeting(){
            let h = this.getTime();
            if(h>=6 && h<12){
                return "上午好";
            }else if(h>=12 && h<18){
                return "下午好";
            }else{
                return "晚上好";
            }
        }
        
    }
}
</script>


<style scoped>
.main{
    /* background: -webkit-linear-gradient(bottom,black,#003377 ) no-repeat; */
    background:#202020;

    height:100%;
    
}

.songList{
    float:left;
    padding-left:20px;
    padding-top:10px;
}

.title{
    color:white;
    font-weight: bold;
    text-align: left;
    padding: 20px;
    font-size: 200%;
    float:left;
    width:100%;
}

.artist{
    float:left;
    padding-top: 20px;
    padding-left: 15px;
    padding-right: 15px;
    height:auto;
}

.navBanner{
    height:40px;
}
</style>
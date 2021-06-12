<template>
    <div class='artist'>
        <div class="info">
            <div class='pic'>
                <img class='artistPic' :src="this.picSrc">
            </div> 
            <div class="artistName">
                <span>{{this.name}}</span>
            </div>
        </div>
        <div class="songList">
            <SongList  :songList="this.songList"
                         v-on="$listeners" />
        </div>
    </div>
</template>

<script>
import SongList from '../../components/songList'
    export default{
        name:'Artist',
        inheritAttrs: false,
        components:{
            SongList
        },
        data(){
            return{
                singerId:'',
                picSrc:'',
                name:'',
                songList:[],
                pageNo:1,
                pageSize:10
            }
        },
        mounted(){
            this.getArtistInfo();
            this.getSongList();
        },
        methods:{
            getArtistInfo(){
                this.singerId = this.$route.query.id;
                this.$axios
                    .get(`/singer/${this.singerId}`)
                    .then(response =>{
                        // debugger;
                        // console.log(response);
                        let data = response.data.data;
                        // console.log(data);
                        this.picSrc=data.pic;
                        this.name=data.name;
                        })
                    .catch(failResponse =>{
                    })
            },
            getSongList(){
                this.$axios
                    .get(`/song/singer-id/detail/${this.singerId}/${this.pageNo}/${this.pageSize}`)
                    .then(response =>{
                        console.log(response);
                        this.songList=response.data.data;
                    })
                    .catch(failResponse =>{
                    })
            } 
            
        }
    }
</script>

<style>
.artist{
    background:#202020;
    height:100%;
    overflow-y:auto;
}
.artistPic{
    width:100%;
    height:300px;
    object-fit: cover;
}
.artistName{
    color:gray;
    font-weight: bolder;
    font-size:80px;
    position: absolute;
    top:200px;
    padding-left: 20px;
}
</style>

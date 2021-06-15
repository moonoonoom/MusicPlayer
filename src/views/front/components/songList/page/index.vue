<template>
    <div class="page">
        
        <div class="info">
            <div class='pic'>
                <img class='pic' :src="this.picSrc">
            </div> 
            <div class="name">
                <span>{{this.name}}</span>
            </div>
        </div>
        <div class="songList">
            <SongList :songList="this.songList"/>
        </div>
    </div>
</template>

<script>
import SongList from '../../songList'
    export default{
        name:'SongListPage',
        components:{
            SongList
        },
        data(){
            return{
                id:'',
                songList:[],
                pageNo:1,   
                pageSize:10,
                name:'',
                picSrc:''
            }
        },
        mounted(){
            this.id = this.$route.query.id;
            this.getSongList();
        },
        methods:{
            getSongList(){
                this.$axios
                    .get(`/listSong/detail/${this.id}/${this.pageNo}/${this.pageSize}`)
                    .then(response =>{
                        console.log(response);
                        let tempList = response.data.data.songs;
                        let tempInfo = response.data.data.songListInfo;
                        if(tempList[0]==null){
                            console.log("11111");
                        }
                        this.songList=tempList;
                        this.name = tempInfo.title;
                        this.picSrc = tempInfo.pic;
                    })
                    .catch(failResponse =>{
                    })
            }
        }
    }
    
</script>


<style scoped>
.page{
    background:#202020;

    height:100%;
}

.navBanner{
    height:40px;
}

.pic{
    width:100%;
    height:300px;
    object-fit: cover;
}
.name{
    color:gray;
    font-weight: bolder;
    font-size:80px;
    position: absolute;
    top:200px;
    padding-left: 20px;
}
</style>
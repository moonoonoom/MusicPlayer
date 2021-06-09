<template>
    <div class="main">
        <div class="firstSongLists" :key="songList.name" v-for="songList in firstSongLists">
            <SongListRec :listName="songList.name" :picStc="songList.pic" />
        </div>
        
    </div>
</template>

<script>
import SongListRec from "../../components/songList/rectangle.vue"
export default{
    name:'Main',
    components:{
        SongListRec
    },
    data(){
        return{
            firstSongLists:[
                {
                    name:'歌单名字1',
                    pic:'http://p2.music.126.net/lGKTPIR0dvEt09OMlzflxA==/93458488376709.jpg'
                },
                {
                    name:'歌单名字2',
                    pic:'http://p2.music.126.net/lGKTPIR0dvEt09OMlzflxA==/93458488376709.jpg'
                }
            ]
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

.firstSongLists{
    float:left;
    padding:20px;
}
</style>
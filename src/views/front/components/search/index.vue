<template>
    <div class="page">
        <div class='search'>
            <el-input
                class="searchInput"
                placeholder="请输入内容"
                v-model="input"
                clearable>
            </el-input>
            <el-button type="info" @click="search">搜索</el-button>
        </div>
        <div class="songList">
            <SongList :songList="this.songList"/>
        </div>
    </div>
</template>

<script>
import SongList from '../songList'
export default{
    name:'SearchPage',
    components:{
        SongList
    },
    data(){
        return{
            input:'',
            songList:[],
            pageNo:1,   
            pageSize:10
        }
    },
    methods:{
        search(){
            this.$axios
                .get(`/song/song-name/detail/${this.input}/${this.pageNo}/${this.pageSize}`)
                .then(response =>{
                    console.log(response);
                    this.songList=response.data.data;
                })
                .catch(failResponse =>{
                })
        },
        sendSongUrl(row){
            console.log(row);
            // this.$emit('sendSongUrl',row.url);
            this.bus.$emit('sendSongUrl',row);
        }
    }
}
</script>



<style scoped>
.page{
    background:#202020;

    height:100%;
}

.search{
    padding-top:10px;
    text-align:left;
    
}

.searchInput{
    width:200px;
    padding-left: 140px;
}

.songList{
    padding-top:10px;
}

</style>
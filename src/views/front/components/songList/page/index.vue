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
        <div class="songList" @openDialog="openDialog">
            <SongList :songList="this.songList"/>
        </div>

        <el-dialog title="请选择歌单" :visible.sync="dialogTableVisible">
            <el-table :show-header="false" >
                <el-table-column property="date" label="日期" width="150"></el-table-column>
                <el-table-column property="name" label="歌单名字" width="200"></el-table-column>
                <el-table-column property="address" label="地址"></el-table-column>
            </el-table>
        </el-dialog>
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
                picSrc:'',
                dialogTableVisible:false
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
            },
            openDialog(){
                console.log('received');
                this.dialogTableVisible = true;
            }
        }
    }
    
</script>


<style scoped>
.page{
    background:#202020;

    height:100%;
    overflow-y:auto;
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
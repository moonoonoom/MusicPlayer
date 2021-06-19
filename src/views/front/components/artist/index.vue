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
        <div class="songList" >
            <SongList   @openDialog="openDialog"
                        :songList="this.songList"
                         v-on="$listeners" />
        </div>

         <el-dialog class="userSongList" title="请选择歌单" :visible.sync="addToListVisible">
             <el-dialog
                width="30%"
                :visible.sync="addConformVisible"
                append-to-body>
                <div>是否将《{{this.song.name}}》加入到歌单“{{this.songListObj.title}}”中</div>
                <div>
                    <el-button @click="addConformVisible = false">取 消</el-button>
                    <el-button type="primary" @click="addSongToList">确 定</el-button>
                </div>
            </el-dialog>
            <el-table 
            :data="userSongList" :show-header="false" 
            @row-click="confrom"
            style="width: 100%;background-color:#202020 !important;">
                <el-table-column property="title" label="歌单名字" ></el-table-column>
            </el-table>
        </el-dialog>

       
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
                pageSize:10,
                addToListVisible:false,
                userSongList:[],
                songName:'',
                songListName:'',
                addConformVisible:false,
                song:Object,
                songListObj:Object
            }
        },
        mounted(){
            console.log('artist')
            this.getArtistInfo();
            this.getSongList();
            this.getUserSongList();
            console.log(sessionStorage.getItem('username'));
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
                        this.songList=response.data.data.songs;
                    })
                    .catch(failResponse =>{
                    })
            },
            openDialog(song){
                // console.log('received');
                this.addToListVisible = true;
                console.log(song);
                this.songName = song.name;
                this.song = song;
            },
            getUserSongList(){ //获得用户的歌单
                const userId = sessionStorage.getItem('userId');
                this.$axios
                    .get(`/songList/detail-userId/${userId}`)
                    .then(response =>{
                        console.log("getUserSongList")
                        console.log(response);
                        this.userSongList=response.data.data;
                    })
                    .catch(failResponse =>{
                    })
            },
            confrom(row){
                this.addConformVisible=true;
                console.log(row);
                this.songListObj = row;
                this.songListName=row.title;
            },
            addSongToList(){
                this.$axios
                    .post('/listsong/add',{
                        songId:this.song.songId,
                        songListId:this.songListObj.id
                    })
                    .then(response =>{
                        console.log(response);
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

/* .userSongList{
    background:#202020;
} */

.userSongList .el-table {
    color:white;
    
}

.userSongList .el-table th, .el-table tr,.el-table td{
    border: 0;
    background-color: 
    transparent !important;
}

.userSongList .el-table::before{
    height:0px
}


.userSongList .el-table--enable-row-hover .el-table__body tr:hover>td{
    background-color: #212e3e !important;
}
</style>

<template>
    <div class="songList">
        <el-table
        :data="songList"
        :show-header="false"
        @row-click="sendSongUrl"
        style="width: 100%;background-color:#202020 !important;">
            <el-table-column prop="name">
            </el-table-column>
            <el-table-column prop="albumName">
            </el-table-column>
            <el-table-column prop="duration">
            </el-table-column>
            <el-table-column >
                <template slot-scope="scope"  >
                    <i class="addIcon el-icon-plus" @click.stop="addToList(scope.row)"> </i>
                </template>
            </el-table-column>
        </el-table>
        
         <el-dialog class="songList" title="请选择歌单" :visible.sync="addToListVisible">
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
export default {
    name:'SongList',
    props:{
        songList:{
            type:Array
        }
    },
    data(){
        return {
            addToListVisible:false,
            userSongList:[],
            addConformVisible:false,
            song:Object,
            songListObj:Object,
            songName:'',
            songListName:'',
        }
    },
    mounted(){
        this.getUserSongList();
    },
    methods:{
        sendSongUrl(row){
            console.log(row);
            // this.$emit('sendSongUrl',row.url);
            this.bus.$emit('sendSongUrl',row);
        },
        addToList(row){
            this.addToListVisible=true;
            console.log('send');
            this.songName = row.name;
            this.song = row;
            // this.$emit('openDialog',row);
        },
        getUserSongList(){ //获得用户的歌单
                const userId = sessionStorage.getItem('userId');
                this.$axios
                    .get(`/songList/detail-userId/${userId}`)
                    .then(response =>{
                        // console.log("getUserSongList")
                        // console.log(response);
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
                .post('/listSong/add',{
                    songId:this.song.id,
                    songListId:this.songListObj.id
                })
                .then(response =>{
                    console.log(response);
                    if(response.data.msg=="添加成功"){
                        this.addConformVisible=false;
                        this.addToListVisible=false;
                        Message.success("添加成功");
                    }else if(response.data.msg=="该歌曲已在歌单中"){
                        this.addConformVisible=false;
                      
                        Message.error("该歌曲已在歌单中");
                    }
                })
                .catch(failResponse =>{
                })
        },
    }
}
</script>

<style>
/* .songList{
    background:#202020;
} */

.songList .el-table {
    color:white;
    
}

.songList .el-table th, .el-table tr,.el-table td{
    border: 0;
    background-color: 
    transparent !important;
}

.songList .el-table::before{
    height:0px
}


.songList .el-table--enable-row-hover .el-table__body tr:hover>td{
    background-color: #212e3e !important;
}

.addIcon{
    cursor: pointer;
}
</style>

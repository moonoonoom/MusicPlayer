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
export default {
    name:'SongList',
    props:{
        songList:{
            type:Array
        }
    },
    data(){
        return {
            dialogTableVisible:false
        }
    },
    methods:{
        sendSongUrl(row){
            console.log(row);
            // this.$emit('sendSongUrl',row.url);
            this.bus.$emit('sendSongUrl',row);
        },
        addToList(row){
            // this.dialogTableVisible=true;
            console.log('send');
            this.$emit('openDialog',row);
        }
        
    }
}
</script>

<style>
.songList{
    background:#202020;
}

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

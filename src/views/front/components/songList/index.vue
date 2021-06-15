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
            </el-table>
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
    methods:{
        sendSongUrl(row){
            console.log(row);
            // this.$emit('sendSongUrl',row.url);
            this.bus.$emit('sendSongUrl',row);
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
</style>

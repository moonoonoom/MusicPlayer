<template>
      <div style="height:100%">
    <div class="search">
      <el-input 
      v-model="searchInfo"  
      placeholder="请输入内容"
      style="width:150px"></el-input>
      <el-button type="primary" @click="search">搜索</el-button>
    </div>
    <div class="table">
        <el-table
        :data="songData"
        style="width: 100%;"
        height="100%">
        <el-table-column
          prop="name"
          label="歌曲名"
          width="120">
        </el-table-column>
        <el-table-column
          prop="singerName"
          label="歌手名"
          width="120">
        </el-table-column>
        <el-table-column
          prop="playCount"
          label="播放次数"
          width="120">
        </el-table-column>
        <el-table-column
          prop="introduction"
          label="简介"
          width="300">
        </el-table-column>
        <el-table-column
          prop="createTime"
          label="创建时间"
          width="150">
        </el-table-column>
        <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.row)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.row)">删除</el-button>
        </template>
      </el-table-column>
      </el-table>
      <el-pagination
        layout="prev, pager, next"
        :total="1000">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { MessageBox, Message } from "element-ui"; 
export default{
    name:"AdminSongList",
    data() {
      return {
        singerData:[],
        songData:[],
        pageNo:1,   
        pageSize:10,
        searchInfo:''
      }
    },
    created(){
        // console.log("create");
        this.getList();
    },
    methods:{
      
      getList(){
          this.$axios
            .get(`/song/allSong/${this.pageNo}/${this.pageSize}`)
            .then(response =>{
              console.log(response);
              this.songData=response.data.data;
            })
            .catch(failResponse =>{
            })
      },
      search(){
        this.$axios
            .get(`/singer/detail-name/${this.searchInfo}/${this.pageNo}/${this.pageSize}`)
            .then(response =>{
              console.log(response);
              this.singerData=response.data.data;
            })
            .catch(failResponse =>{
            })
      },
      handleDelete(row){
        console.log(row);
        this.$axios
            .get(`/singer/delete/${row.id}`)
            .then(response =>{
              // console.log(response);
              if(response.data.msg=="删除成功"){
                this.getList();
                Message.success("删除成功");
              }else{
                Message.error("删除失败");
              }
            })
            .catch(failResponse =>{
              Message.error("删除失败");
            })
      },
      handleEdit(row){
        this.$router.push({
                path:'/admin/artist/add',
                query:{
                    id:row.singerId
                }
            });
      }
    }
}
</script>


<style scoped>
.search{
  text-align: left;
  height:10%;
}

.table{
  height:90%;
}
</style>
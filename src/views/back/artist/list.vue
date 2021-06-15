<template>
  <div style="height:100%">
    <div class="search">
      <el-input 
      v-model="searchInfo"  
      placeholder="请输入内容"
      style="width:150px"></el-input>
      <el-button type="primary" @click="search">搜索</el-button>
          <el-button type="primary" @click="delALL">批量删除</el-button>
    </div>
    <div class="table">
        <el-table
        :data="singerData"
        style="width: 100%;"
        height="100%"
         @selection-change="handleSelectionChange">
                  <el-table-column
      type="selection"
      width="55">
    </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="120">
        </el-table-column>
        <el-table-column
          prop="sex"
          label="性别"
          width="120">
        <template slot-scope="{row}"> {{row.sex==1?"男":"女"}} </template>
        </el-table-column>
        <el-table-column
          prop="location"
          label="地区"
          width="120">
        </el-table-column>
        <el-table-column
          prop="birthdate"
          label="生日"
          width="150">
        </el-table-column>
        <el-table-column
          prop="introduction"
          label="简介"
          :show-overflow-tooltip="true"
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
        @current-change="handleCurrentChange" 
        layout="prev, pager, next"
        :total="1000">
      </el-pagination>
    </div>
  </div>
</template>



<script>
import { MessageBox, Message } from "element-ui"; 
export default {
    name: "ArtistList",
     data() {
      return {
        singerData:[],
        pageNo:1,   
        pageSize:10,
        searchInfo:'',
        multipleSelection:[]
      }
    },
    created(){
        // console.log("create");
        this.getList();
    },
    methods:{
      
      getList(){
        this.$axios
            .get(`/singer/allSinger/${this.pageNo}/${this.pageSize}`)
            .then(response =>{
              // console.log(response);
              this.singerData=response.data.data;
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
                    id:row.id
                }
            });
      },
      delALL(){
           this.$axios
            .post(`/singer/deletes`,this.multipleSelection)
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
      handleSelectionChange(val){
        for(var key in val) {
            this.multipleSelection.push(val[key].id);
        }
        console.log(this.multipleSelection);
      },
      handleCurrentChange(val){
        this.pageNo = val;
        this.getList();
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

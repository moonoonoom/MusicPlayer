<template>
<div style="height:100%">
    <el-table
    :data="singerData"
    style="width: 100%;"
    height="100%">
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
      prop="createTime"
      label="创建时间"
      width="150">
    </el-table-column>
  </el-table>
  <el-pagination
    layout="prev, pager, next"
    :total="1000">
  </el-pagination>
</div>
</template>



<script>

export default {
    name: "ArtistList",
     data() {
      return {
        singerData:[],
        pageNo:1,   
        pageSize:10
      }
    },
    created(){
        console.log("create");
        this.getList();
    },
    methods:{
      
      getList(){
        this.$axios
            .get(`/singer/allSinger/${this.pageNo}/${this.pageSize}`)
            .then(response =>{
              console.log(response);
              this.singerData=response.data.data;
            })
            .catch(failResponse =>{
            })
      }
    }
}
</script>

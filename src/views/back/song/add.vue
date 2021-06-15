<template>
    <div class="addForm">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label='歌曲名'>
          <el-input v-model="form.name"  style="width:150px"></el-input>
                  </el-form-item>
          <el-form-item label='歌手姓名'>
          <el-input v-model="form.singerName"  style="width:150px"></el-input>
                  </el-form-item>
          <el-form-item label='照片'>
          <el-input v-model="form.pic"  style="width:150px"></el-input>
                  </el-form-item>
          <el-form-item label='歌曲时长'>
          <el-input v-model="form.duration"  style="width:150px"></el-input>
                  </el-form-item>
          <el-form-item label='专辑名称'>
          <el-input v-model="form.albumName"  style="width:150px"></el-input>
                  </el-form-item>
          <el-form-item label='url链接'>
          <el-input v-model="form.url"  style="width:150px"></el-input>
        </el-form-item>
        <el-form-item label="歌词">
            <el-input type="textarea" :rows="5" style="width:400px;" v-model="form.lyric"></el-input>
        </el-form-item>
        <el-form-item label="简介">
            <el-input type="textarea" :rows="5" style="width:400px;" v-model="form.introduction"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button v-if="isEdit" type="primary" @click="update">提交</el-button>
            <el-button v-else type="primary" @click="onSubmit">创建</el-button>
            <el-button @click="cancel('form')">取消</el-button>
        </el-form-item>
        </el-form>
    </div>
</template>

<script>
import ForeignArea from "../../../components/ForeignArea";
import { MessageBox, Message } from "element-ui"; 
  export default {
    name: 'AddSong',
    components:{
        ForeignArea
    },
    data() {
      return {
        form: {
          name: '',
          singerName:'',
          pic:'',
          duration:'',
          albumName:'',
          url:'',
          lyric:'',
          introduction:''
        },
        data:[],
        id:'',
        isEdit:false
      }
    },
    mounted(){
      this.id = this.$route.query.id;
      if(this.id){
        // console.log("111");
        this.isEdit = true;
        this.setEdit();
      }
    },
    methods: {
      onSubmit() {
        // console.log(this.form);
        this.$axios
            .post('/song/add',this.form)
            .then(response =>{
              // console.log(response);
              if(response.data.msg=="添加成功"){
                this.$router.push({
                  path:'/admin/song/list'
                });
                Message.success("添加成功");
              }else{
                Message.error("添加失败");
              }
            })
            .catch(failResponse =>{
              Message.error("添加失败");
            })
      },
      getCountry(name){
          this.form.country = name;
      },
      cancel(refName){
        this.$refs[refName].resetFields();
      },
      setEdit(){
        this.$axios
            .get(`/song/detail/${this.id}`)
            .then(response =>{
              // console.log(response);
              let data = response.data.data;
              console.log(response);
              this.$set(this.form,"name",data.name);
              this.$set(this.form,"singerName",data.singerName);
              this.$set(this.form,"pic",data.pic);
              this.$set(this.form,"duration",data.duration);
              this.$set(this.form,"albumName",data.albumName);
              this.$set(this.form,"url",data.url);
              this.$set(this.form,"lyric",data.lyric);
              this.$set(this.form,"introduction",data.introduction);

            })
            .catch(failResponse =>{
            })
      },
      update(){
        this.form.id =parseInt(this.id);
        this.$axios
            .post('/song/update', this.form)
            .then(response =>{
              if(response.data.msg=="更新成功"){
                this.$router.push({
                  path:'/admin/song/list'
                });
                Message.success("更新成功");
              }else{
                Message.error("更新失败");
              }
            })
            .catch(failResponse =>{
            })
      }
    }
  }
</script>

<style scoped>
.addForm{
    text-align:left;
    margin:30px;
}
</style>
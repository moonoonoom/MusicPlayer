<template>
    <div class="addForm">
        <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="姓名">
            <el-input v-model="form.name"  style="width:150px"></el-input>
        </el-form-item>
        <el-form-item label="性别" style="width:350px">
           <el-radio v-model="form.gender" label="1">男</el-radio>
           <el-radio v-model="form.gender" label="0">女</el-radio>
           <el-radio v-model="form.gender" label="2">组合</el-radio>
        </el-form-item>
        <el-form-item label="生日">
            <el-col :span="11">
            <el-date-picker type="date" placeholder="选择日期" v-model="form.birthDate" style="width: 150px;"></el-date-picker>
            </el-col>
        </el-form-item>
        <el-form-item label="国家">
            <ForeignArea @selectCountry="getCountry" />
        </el-form-item>
        <el-form-item label="简介">
            <el-input type="textarea" :rows="5" style="width:400px;" v-model="form.into"></el-input>
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
    name: 'AddArtist',
    components:{
        ForeignArea
    },
    data() {
      return {
        form: {
          name: '',
          gender: 0,
          birthDate: '',
          country:'',
          desc:'',
          into:''
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
            .post('/singer/add',{
                name:this.form.name,
                sex:parseInt(this.form.gender),
                location:this.form.country,
                introduction:this.form.into
            })
            .then(response =>{
              // console.log(response);
              if(response.data.msg=="添加成功"){
                this.$router.push({
                  path:'/admin/artist/list'
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
            .get(`/singer/${this.id}`)
            .then(response =>{
              // console.log(response);
              let data = response.data.data;
              console.log(response);
              this.$set(this.form,"name",data.name);
              this.$set(this.form,"gender",data.sex);
            })
            .catch(failResponse =>{
            })
      },
      update(){
        this.$axios
            .post('/singer/update',{
                name:this.form.name,
                id:this.id
            })
            .then(response =>{

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
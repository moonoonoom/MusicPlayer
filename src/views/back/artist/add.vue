<template>
    <div class="addForm">
        <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="姓名">
            <el-input v-model="form.name"  style="width:150px"></el-input>
        </el-form-item>
        <el-form-item label="性别">
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
            <el-input type="textarea" :rows="5" style="width:400px;" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">创建</el-button>
            <el-button>取消</el-button>
        </el-form-item>
        </el-form>
    </div>
</template>

<script>
import ForeignArea from "../../../components/ForeignArea"

  export default {
    name: 'AddArtist',
    components:{
        ForeignArea
    },
    data() {
      return {
        form: {
          name: '',
          gender: '',
          birthDate: '',
          country:'',
          desc:''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log(this.form);
        this.$axios
            .post('/singer/add',{
                name:this.form.name
            })
            .then(response =>{

            })
            .catch(failResponse =>{
            })
      },
      getCountry(name){
          this.form.country = name;
      }
    }
  }
</script>

<style scoped>
.addForm{
    width:50%;
    text-align:left;
}
</style>
<template>
    <div>
        <el-form ref="form" :model="form" label-width="80px" style="text-align:left">
            <el-form-item style="width:250px" label="用户名">
                <el-input v-model="form.name" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item style="width:250px" label="密码">
                <el-input v-model="form.password" placeholder="请输入密码" show-password></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="login">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import { MessageBox, Message } from "element-ui"; 

export default{
   name: 'AdminLogin',
   data(){
       return{
           form:{
                name:'',
                password:''
           }
       }
   },
   methods:{
       login(){
           this.$axios
                .post(`/user/login?password=${this.form.password}&username=${this.form.name}`)
                .then(response =>{
                    
                    let data = response.data;
                    console.log(data);
                    if(data.msg=='login success'){
                        this.$cookies.set('isLogin',this.form.name);
                        this.$router.push({
                            path:'/admin'
                        });
                    }else{
                        Message.error(data.msg);
                    }
                })
                 .catch(failResponse =>{
                    console.log(failResponse);
                })
            
       }
   }
}
</script>

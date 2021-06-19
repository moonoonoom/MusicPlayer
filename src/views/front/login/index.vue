<template>
    <div class="background">
        <div class="loginForm">
            <el-form ref="form" :model="form" label-width="80px" >
                <el-form-item  label="用户名">
                    <el-input v-model="form.name" placeholder="请输入用户名"></el-input>
                </el-form-item>
                <el-form-item  label="密码">
                    <el-input v-model="form.password" placeholder="请输入密码" show-password></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="login">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
import { MessageBox, Message } from "element-ui"; 

export default{
   name: 'UserLogin',
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
                    
                    
                    if(response.data.msg=='请求成功'){
                        let data = response.data.data;
                        console.log(data);
                        // this.$cookies.set('isLogin',this.form.name);
                        // this.$cookies.set('username',data.nikename);
                        // this.$cookies.set('userId',data.id);
                        sessionStorage.setItem('username',data.user.nikename);
                        sessionStorage.setItem('userId',data.user.id);
                        sessionStorage.setItem('token',data.token);
                        this.$router.push({
                            path:'/'
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

<style scoped>
.loginForm{
    height: 100%;
    width: 250px;
    margin-left: 39vw;
    padding-top: 200px;
}

.background{
    background: -webkit-linear-gradient(bottom,black,#CCBBFF) no-repeat;
}


</style>

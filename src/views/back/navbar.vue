<template>
    <div>
        <el-menu

        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#7BA7D5"
        text-color="#fff"
        active-text-color="#ffd04b">
        
       <el-submenu style="float:right" index="1">
        <template  slot="title">{{this.username}}</template>
        <el-menu-item style="float:none" index="1-1" @click="loginOut">退出登录</el-menu-item>
        
 
        </el-submenu>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: "NavBar",
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1',
                username:'11'
            };
        },
        mounted(){
            this.username = this.$cookies.get('isLogin');
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            loginOut(){
                console.log("loginOut");
                this.$axios
                    .get(`/user/logout`)
                    .then(response =>{
                        console.log(response);
                        this.$cookies.remove('isLogin');
                        this.$router.push({
                            path:'/admin/login'
                        });
                    })
            }
        }
    }
</script>

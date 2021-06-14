<template>
    <el-menu

    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="rgba(0,0,0,0.7)"
    text-color="#fff"
    active-text-color="#ffd04b">
    
    <el-menu-item style="float:right" v-if="!isLogin" index="1">登录</el-menu-item>
    <el-submenu style="float:right" v-else index="2">
        <template slot="title">{{this.username}}</template>
        <el-menu-item index="2-1">账户</el-menu-item>
        <el-menu-item index="2-2">退出登录</el-menu-item>
    </el-submenu>
    <!-- <el-menu-item index="3" disabled>消息中心</el-menu-item>
    <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item> -->
    </el-menu>

</template>

<script>
  export default {
    name: 'NavMenu',
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        isLogin:false,
        username:''
      };
    },
    created(){
      this.getIsLogin();
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      getIsLogin(){
        if(this.$cookies.isKey('isLogin')){
            this.isLogin = true;
            this.username = this.$cookies.get('isLogin');
        }else{
          this.isLogin = false;
        }
      }
    }
  }
</script>

<style scoped>
.el-menu.el-menu--horizontal{
  border: none;
}
</style>
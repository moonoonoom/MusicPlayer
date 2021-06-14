<template>

 <div class="sidebar">

    <!-- <h5>自定义颜色</h5> -->
    <el-aside class="aside" style="height:100%;width:100%">
        <!-- 侧边栏导航  -->
        <!-- unique-opened只展开一个 -->
        <!-- router开启路由模式 -->
        <el-menu 
          :default-active="activeIndex"
          :unique-opened="true" 
          :router="true" 
          class="menu"
          background-color="#000000"
          text-color="#fff"
          active-text-color="#ffd04b"
          style="height:100%; width:100%;border:0;"
          >
          <div style="margin-top:20px;margin-bottom:10px">
            <span class="title">SpermWhale</span>
        </div>
          <el-menu-item
              class="menuItem"
              v-for="item1 in menuData"
              :key="item1.path"
              :index="item1.path"
            >
              <i :class="item1.icon"></i>
              <!--图标 -->
              <span>{{item1.name}}</span>
            </el-menu-item>
        </el-menu>
      </el-aside>

 </div>



</template>


<script>
  export default {
    name: 'SideBar',
    data() {
    return {
      menuData: [
        {
          name: "主页",
          order: "1",
          path:'/space/main',
          icon:'el-icon-house'
        },
        {
          name: "搜索",
          order: "2",
          path:'/space/search',
          icon:'el-icon-search'
        },

        ],
        activeIndex:''
        };
    },
    mounted(){
        this.activeIndex='/space/main';
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>
.sidebar{
  height:100%;
  float:left;
  width:14%;
}

.title{
  color:#fff; 
  font-weight:bolder;
  font-size:larger;
}
</style>
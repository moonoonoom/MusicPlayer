<template>

 <div style=" height:100%;width:100% ">
  <el-col :span="4" style="height:100%;width:100%">
    <!-- <h5>自定义颜色</h5> -->
    <el-aside class="aside" style="height:100%;width:100%">
        <!-- 侧边栏导航  -->
        <!-- unique-opened只展开一个 -->
        <!-- router开启路由模式 -->
        <el-menu 
          :unique-opened="true" 
          :router="true" 
          class="menu"
          background-color=" #7BA7D5"
          text-color="#fff"
          active-text-color="#ffd04b"
          style="height:100%"
          >
          <el-submenu :index="' '+item1.order" v-for="item1 in menuData" :key="item1.path">
            <!--表示可以展开的一组 -->
            <template slot="title" >
              <!--图标 -->
              <!-- <i class="el-icon-location"></i> -->
              <!--文字 -->
              <span>{{item1.name}}</span>
            </template>
            <el-menu-item
              class="menuItem"
              v-for="item2 in item1.children"
              :key="item2.path"
              :index="item2.path"
            >
              <!-- <i class="el-icon-location"></i> -->
              <!--图标 -->
              <span>{{item2.name}}</span>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
  </el-col>
  
 </div>



</template>


<script>
  export default {
    name: 'SideBar',
    data() {
    return {
      menuData: [
        {
          name: "歌手管理",
          order: "1",
          children: [
            {
              path: "/artist/add",
              name: "添加歌手",
            },
            {
              path: "/artist/list",
              name: "歌手列表",
            }
          ],
        },
        {
          path: "postinfomange",
          name: "歌曲管理",
          order: "2",
          children: [
            {
              path: "postinfomange",
              name: "岗位信息",
            },
          ],
        },
        {
          path: "orderinfomange",
          name: "用户管理",
          order: "3",
          children: [
            {
              path: "orderinfomange",
              name: "订单信息",
            },
          ],
        },
        {
          path: "datamangeinfo",
          name: "数据字典",
          order: "4",
          children: [
            {
              path: "datamangeinfo",
              name: "岗位类型",
            },
          ],
        },
      ],
    };
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

</style>
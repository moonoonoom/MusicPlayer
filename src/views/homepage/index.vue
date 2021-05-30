<template>
    <div>
        <NavMenu style="position: fixed; width:100%" />
        <div class="recommend"></div>
        <div class="recent"></div>
    </div>
</template>

<script>
import NavMenu from '../../components/NavMenu'
export default {
  name: 'HomePage',
  components: {
    NavMenu
  }
}
</script>

<style scoped>
.recommend{
    height: 800px;
    width: 100%;
    background: -webkit-linear-gradient(bottom,black,#85C1E9) no-repeat;
}

.recent{
    height: 800px;
    width: 100%;
    background: -webkit-linear-gradient(left,#85C1E9,#6C3483) no-repeat;
}
</style>

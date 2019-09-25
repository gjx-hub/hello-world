<template>
  <div>
    <mt-header fixed title="电影"></mt-header>hello world
    <router-view></router-view>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="moive">
        <!-- <img slot="icon" src="../assets/100x100.png" /> -->
        <span slot="icon" class="iconfont icon-dianying"></span>
        电影
      </mt-tab-item>
      <mt-tab-item id="cinema">
        <!-- <img slot="icon" src="../assets/100x100.png" /> -->
        <span slot="icon" class="iconfont icon-yingyuana"></span>
        影院
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selected: "moive"
    }
  },
  created(){
    if(this.$route.path=='/index'){
      this.selected='movie'
    }else if(this.$route.path=='/cinema'){
      this.selected='cinema'
    }
  },
  watch:{
    selected (newVal,oldVal){
      if(newVal=='movie' && this.$route.path !='/index'){
        this.$router.push({
          path:'/index'
        })
      }else if(newVal == 'cinema' && this.$route.path !='/cinema'){
        this.$router.push({
          path:'/cinema'
        })
      }
    }
  }
};
</script>
<style>
</style>
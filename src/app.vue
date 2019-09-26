<template>
  <div>
    <mt-header fixed title="电影"></mt-header>

    <div class="content">
      <transition name="app-router" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>

    <mt-tabbar v-model="selected">
      <mt-tab-item id="movie">
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
      selected: "movie",
      title:"喵喵电影"
    };
  },
  created() {
    if (this.$route.path == "/index") {
      this.selected = "movie";
    } else if (this.$route.path == "/cinema") {
      this.selected = "cinema";
    }
  },
  watch: {
    selected(newVal, oldVal) {
      if (newVal == "movie" && this.$route.path != "/index") {
        this.$router.push({
          path: "/index"
        });
      } else if (newVal == "cinema" && this.$route.path != "/cinema") {
        this.$router.push({
          path: "/cinema"
        });
      }
    },
    $router(newVal,oldVal){
      if(isNotBlank(newVal.meta.title)){
        this.title = newVal.meta.title
      }
    }
  }
};
</script>
<style lang='less' scoped>
.content {
  background-color: wheat;
  height: calc(100vh - 95px);
  margin-top: 40px;
  width: 100%;
  overflow-x: hidden;
}
.app-router-enter,
.app-router-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
.app-router-leave-to {
  transform: translateX(-100%);
}
.app-router-enter-active,
.app-router-leave-active {
  transition: all 0.4s ease;
}
</style>
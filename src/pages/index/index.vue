<template>
    <div>
        <!-- 这是首页组件 -->
        <tab></tab>
        <router-view></router-view>
    </div>
</template>
<script>

import tab from "@/components/index/Tab.vue";

export default {
    components:{
        tab
    }
}
</script>
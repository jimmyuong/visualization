<template>
<header>
    <i v-html="svgs.nav.svg" class="navicon" @click="setSwitchNav" style="position: absolute; z-index: 600;"></i>
    <i v-html="svgs.personal.svg" class="personalicon"></i>
    <div v-html="svgs.top.svg"></div>
    <h1 style="position: absolute; right:0;left:0; right:0;" v-html="svgs.logo.svg"> </h1>
</header>
</template>


<script>
import Tabs from '@/components/Tabs.vue'
import {svgs} from '@/svg/svg'

export default{
    data (){
        return {
            svgs:svgs
        }
    },
    methods: {
        setSwitchNav(){
            console.log("click")
            this.$store.commit('setSwitch',{key:'nav',value:true})
        }
    }
}
</script>
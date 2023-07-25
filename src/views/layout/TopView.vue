<template>
<header>
    <i v-html="svgs.nav.svg" class="navicon" @click="setSwitchNav" style="position: absolute; z-index: 600;"></i>
    <i @click="setState" style="position: absolute;z-index:100; left:4rem;">Theme</i>
    <i v-html="svgs.personal.svg" class="personalicon"></i>
    
    <div v-if="state" v-html="svgs.top.svg"></div>
    <div v-if="stateto" v-html="svgs.top.blue.svg"></div>
    <h1 style="position: absolute; right:0;left:0; right:0;" v-html="svgs.logo.svg" :class="{'blue':state}" > </h1>
</header>
</template>


<script>
import Tabs from '@/components/Tabs.vue'
import {svgs} from '@/svg/svg'

export default{
    data (){
        return {
            svgs:svgs,
            state:false,
            stateto:true,
        }
    },
    methods: {
        setSwitchNav(){
            console.log("click")
            this.$store.commit('setSwitch',{key:'nav',value:true})
        },
        setState(){
            console.log("onclick")
            if(this.state == false){
              this.state = true
              this.stateto = false
            }else if(this.state == true){
              this.state = false
              this.stateto = true
            }
        }
    }
}
</script>

<style>
.blue{
    svg{
    path{
    fill:blue !important
    }
}
}
</style>
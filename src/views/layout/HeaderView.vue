<template>
<header>
    <i v-html="svgs.nav.svg" class="navicon" @click="setSwitchNav" style="position: absolute; z-index: 600;"></i>
    <i v-html="svgs.personal.svg" class="personalicon"></i>
    <div v-if="this.theme == 'Cyan'" v-html="svgs.top.svg"></div>
    <div v-else-if="this.theme == 'Blue'" v-html="banner.banner1.blue.svg"></div>
    <h1 style="position: absolute; right:0;left:0; right:0;"  ><i  v-html="svgs.logo.svg" ></i></h1>
</header>
</template>


<script>
import Tabs from '@/components/Tabs.vue'
import {svgs} from '@/svg/svg'
import {banner} from '@/svg/banner'

export default{
    data (){
        return {
            svgs:svgs,
            state:false,
            stateto:true,
            banner:banner,
        }
    },
    props: {
        theme:String
    },
    mounted(){
        console.log(this.theme)
        if(this.theme == 'Cyan'){
            this.$store.commit("setTheme",'cyan')
        }else if(this.theme == "Blue"){
            this.$store.commit("setTheme",'blue')
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
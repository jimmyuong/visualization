<template>
    <div v-if="this.$store.state.switch.nav">
    <div class="cover" @click="setSwitchNav"></div>

      <nav>
        <li @click="setTheme({key:theme,value:blue})">
            Theme Blue
        </li>
        <li @click="setTheme({key:theme,value:blue})">
            Theme Cyan
        </li>
        <li>
        <a href="/">可调节</a>
        </li>
        <li>
        <a href="/about">可调节</a>
        </li>
        <li>
        <a href="/ku">库</a>
        </li>
        <li>
        <a href="/earth">地球</a>
        </li>
        <li>
        <a href="/big">大的</a>
        </li>
        <li>
        <a href="/blue">蓝色</a>
        </li>
      </nav>
    </div>
</template>

<script>
export default{
    data () {
        return {


        }
    },
    methods: {
        setSwitchNav(){
            this.$store.commit("setSwitch",{key:'nav',value:false})
        },
        setTheme(obj){
            this.$store.commit('setTheme',{})
        }
    }
}
</script>

<style lang="scss">
a:link{
    color:white;
}
a:active{
    color:white;
}
a:hover{
    color:white;
}
a:visited{
    color:white;
}
 nav{
    background-color: rgb(0, 66, 60);
    z-index:1000;
    position: absolute;
    top:3rem;
    left:0;
    a{
        color:aqua
    }
 }

</style>
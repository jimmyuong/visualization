<template>
  <div class="home">
   <TopView></TopView> 
    <main>
      <Breadcrumbs></Breadcrumbs>
      <MainView></MainView>
      <div class="backtop" v-html="svgs.side.svg"></div>
      <div class="backtop mirror" v-html="svgs.side.svg"></div>
      <div class="backbottom" v-html="svgs.bottom.svg"></div>
      <div class="backbottom mirror" v-html="svgs.bottom.svg"></div>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import MainView from '@/views/layout/MainView'
import TopView from '@/views/layout/TopView'
import Breadcrumbs from '@/components/Breadcrumbs.vue'
import Tabs from '@/components/Tabs.vue'
import {svgs} from '@/svg/svg'

export default {
  name: 'HomeView',
  data () {
    return {
      svgs:svgs
    }
  },
  components: {
    MainView,
    Breadcrumbs,
    TopView,
    Tabs
  }
}
</script>
<style>
.backtop,.backbottom{
  position:absolute;
  z-index: -100;
}
.backtop{
  top:8px;
}
.backbottom{
  bottom:8px;
}
.navicon{
  position: absolute;
  left:2rem;
}
.personalicon{
  position: absolute;
  right:2rem;
}
</style>
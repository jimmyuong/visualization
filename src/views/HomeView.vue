<template>
  <div class="home">
    <header>
      <i v-html="svgs.nav.svg" class="navicon"></i>
      <i v-html="svgs.personal.svg" class="personalicon"></i>
      <div v-html="svgs.top.svg"></div>
      <h1 style="position: absolute; left:0; right:0;" v-html="svgs.logo.svg"> </h1>
    </header>
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
import Breadcrumbs from '@/components/Breadcrumbs.vue'
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
    Breadcrumbs
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
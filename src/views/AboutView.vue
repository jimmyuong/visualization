<template>
  <div class="home">

    <HeaderView></HeaderView>
    <main>
      <Breadcrumbs></Breadcrumbs>
      <AboutView></AboutView>
      <div class="backtop" v-html="svgs.side.svg"></div>
      <div class="backtop mirror" v-html="svgs.side.svg"></div>
      <div class="backbottom" v-html="svgs.bottom.svg"></div>
      <div class="backbottom mirror" v-html="svgs.bottom.svg"></div>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src

import AboutView from '@/views/layout/AboutView'
import HeaderView from '@/views/layout/HeaderView'
import Breadcrumbs from '@/components/Breadcrumbs.vue'
import {svgs} from '@/svg/svg'

export default {
  name: 'CyanView',
  data () {
    return {
      svgs:svgs
    }
  },
  components: {
    AboutView,
    Breadcrumbs,
    HeaderView,

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
<template>
  <div class="home">
   <HeaderView :theme="cyan"></HeaderView> 
    <main>
      <Breadcrumbs></Breadcrumbs>
      <Cyan></Cyan>
      <div class="backtop" v-html="svgs.side.svg"></div>
      <div class="backtop mirror" v-html="svgs.side.svg"></div>
      <div class="backbottom" v-html="svgs.bottom.svg"></div>
      <div class="backbottom mirror" v-html="svgs.bottom.svg"></div>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import Cyan from '@/views/Block/Cyan.vue'
import HeaderView from '@/views/layout/HeaderView'
import Breadcrumbs from '@/components/Breadcrumbs.vue'
import Tabs from '@/components/Tabs.vue'
import {svgs} from '@/svg/svg'

export default {
  name: 'CyanView',
  data () {
    return {
      svgs:svgs,
      cyan:'Cyan'
    }
  },
  components: {
    Cyan,
    Breadcrumbs,
    HeaderView,
    Tabs
  }
}
</script>
<style lang="scss">
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

.home{
  //transform: rotate3d(1, 1, 2, 45deg)

  
}
</style>
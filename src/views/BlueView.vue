<template>
    <TopView></TopView>
    <main>
      <Breadcrumbs></Breadcrumbs>
        <Blue></Blue>
        <div class="backtop" v-html="background.style1.topleft.svg"></div>
      <div class="backtop mirror" v-html="background.style1.topleft.svg"></div>
      <div class="backbottom" v-html="background.style1.bottomleft.svg"></div>
      <div class="backbottom mirror" v-html="background.style1.bottomleft.svg"></div>
    </main>
  </template>
  
  <script>
  import TopView from '@/views/layout/TopView'
  import Blue from '@/views/Block/Blue.vue'
  import { background }from '@/svg/background'
  import Breadcrumbs from '@/components/Breadcrumbs.vue'
  
  export default {
      data () {
          return {
            background:background 
          }
      },
      mounted(){
        console.log("BlueView.vue")
      },
      components: {
          TopView,
          Blue,
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
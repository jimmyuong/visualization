<template>
    <TopView></TopView>
    <main>
    <Big></Big>
    </main>
  </template>
  
  <script>
  import TopView from '@/views/layout/TopView'
  import Big from '@/views/Block/Big'
  
  export default {
      data () {
          return {
  
          }
      },
      components: {
          TopView,
          Big
      } 
  }
  </script>
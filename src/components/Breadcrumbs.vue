<template>
  <div class="breadcrumbs">
    <i v-html="svgs.home.svg"></i>
    <span class="active">Home Item</span>
    <i v-html="svgs.arrow.svg"></i>
    <span class="active">Active Item</span>
    <i v-html="svgs.arrow.svg"></i>
    <span class="currentSelected">Current Item</span>
  </div>
</template>

<script>
import {svgs} from "@/svg/svg"

export default{
    data () {
        return {
          svgs:svgs
        }
    }
}
</script>

<style>
.breadcrumbs{
    color:var(--main-color);
    position: absolute;
    left:1rem;
    top:0;
}
.active{
    color:var(--active-color)
}
.currentSelected{
    color:var(--main-color)
}
</style>
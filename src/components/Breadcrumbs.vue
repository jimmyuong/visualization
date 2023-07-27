<template>
  <div class="breadcrumbs">
    <i class="is" v-html="svgs.home.svg"></i>
    <span class="active">中文是这样的</span>
    <i v-html="svgs.arrow.svg"></i>
    <span class="active">日本語ってこんな感じ</span>
    <i v-html="svgs.arrow.svg"></i>
    <span class="currentSelected">Current ENGLISH LIKE</span>
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
    display: flex;
    justify-content: center;
    align-items: center;
}
.active{
    color:var(--active-color)
}
.currentSelected{
    color:var(--main-color)
}
</style>
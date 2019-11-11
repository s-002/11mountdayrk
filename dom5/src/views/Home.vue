<template>
  <div class="home">
    <div class="nav">
      <router-link to='/home/list' tag="p">为您推荐</router-link>
      <router-link to='/home/list1' tag="p">高新职位</router-link>
      <router-link to='/home/list2' tag="p">福利专区</router-link>
    </div>
    <div class="listdata">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
<style lang="scss">
  .nav{
    width: 100%;
    height: 30px;
    line-height: 30px;
    display: flex;
    justify-content: space-around;
    margin: 7px 0;
    background: #fff;
    position: sticky;
    top:0;
    left:0;
  }
  .listdata{
    height: 100%;
  }
  .router-link-active{
    color: orange;
    border-bottom: 1px solid orange;
  }
</style>
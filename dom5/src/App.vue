<template>
  <div id="app">
    <div class="topbar">
       <TopnavBar/>
    </div>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>
<script>
import TopnavBar from './components/Topnav/index'
export default {
  components:{
    TopnavBar
  }
}
</script>
<style lang="scss">
*{
  padding:0;
  margin: 0;
  list-style: none;
}
html,body{
  width: 100%;
  height: 100%;
}
.topnav{
  position: sticky;
    top:0;
    left:0;
}
#app {
  width: 100%;
  height: 100%;
  display: flex;
  background: #eee;
  flex-direction: column;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.content{
  width: 100%;
  height: 700px;
}
</style>

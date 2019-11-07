<!--  -->
<template>
    <div class="topnav">
        <span> 返回 </span>
        <input type="text" placeholder="请输入类别或关键字" name="" id="">
        <span>我的</span>
    </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}

</script>
<style lang='scss' scoped>
    .topnav{
        width: 100%;
        height: 30px;
        line-height: 30px;
        display: flex;
        background: #fff;
        justify-content: space-around;
    }
    input{
        width: 57%;
        text-align: center;
        border:0;
        background: #eee;
        border-radius: 10px;
    }
</style>
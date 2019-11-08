<!--  -->
<template>
    <div class="box">
      <div class="div">
        <div class="topNav">
          <span>返回</span>
          <h4>商品列表</h4>
          <span>更多</span>
        </div>
        <div class="navList">
          <span @click="newlist">默认</span>
          <span>新品</span>
          <span>人气</span>
          <span @click="srot()">价格</span>
          <span>筛选</span>
        </div>
      </div>
        
        <div class="divlist">
          <dl v-for="(item,index) in list" :key="index">
            <dd>图片</dd>
            <dt>
              <p>{{item.title}} </p>
              <p><span style="color:red">{{`￥${item.num}`}}</span><span style="color:#ccc">￥399.00</span></p>
            </dt>
          </dl>
        </div>
    </div>
</template>

<script>
import mock from '../mock/mock'
import axios from 'axios'
export default {
  data () {
    return {
      list:[]
    }
  },
  methods:{
    async getdata(){
      let data=await axios('/api/data')
      console.log(data)
      this.list=data.data
    },
    newlist(){
      this.getdata()
    },
    srot(){
      this.list.sort((a,b)=>{
        return b.num-a.num
      })
      console.log(this.list)
    }
  },
  mounted(){
    this.getdata()
  }
}

</script>
<style lang='scss'>
.box{
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}
  .topNav{
    height: 40px;
    line-height: 40px;
    display: flex;
    justify-content: space-around;
  }
  .navList{
    height: 30px;
    line-height: 30px;
    display: flex;
    justify-content: space-around; 
  }
  .divlist{
    display: flex;
    flex-shrink: 0;
    flex-wrap:wrap;
    text-align: center;
    overflow: auto;
    dl{
      width: 46%;
      margin: 10px 0;
      dd{
        height: 90px;
        text-align: center;
      }
      dt{
        line-height: 25px;
      }
    }
  }
  .div{
    position: sticky;
    top:0;
    left:0;
    background: #fff;
  }
</style>
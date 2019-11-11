<!--  -->
<template>
    <div class="list">
        <ul v-for="(item,index) in list" :key="index">
            <li>
                <h5>{{item.title}}</h5>
                <p>{{item.description}}</p>
                <p>
                    <span style="color:red;">{{item.num}}</span>|<span>{{item.span}}</span>
                </p>
                <button>申请</button>
            </li>
        </ul>
    </div>
</template>

<script>
import mockdata from '../../mock/mock.js'
import axios from 'axios'
export default {
  data () {
    return {
        list:[],
        type:'list'
    }
  },
  watch:{
      $route:function(){
        //   console.log( 'route..', this.$route.params['type'])
          this.type=this.$route.params['type']
          this.getdata()
      }
  },
  methods: {
    async getdata(){
        let data =await axios.get(`/api/getdata?type=${this.type}`)
          console.log(data)
        this.list=data.data
      }
  },
  mounted() {
      this.getdata()
  },
}

</script>
<style lang='scss'>
.list{
    width: 100%;
    height: 700px;
    overflow:auto;
}
   ul{
        width: 100%;
        height: 100px;
        margin: 8px 0;
        background: #fff;
    }
    li{
        padding: 10px;

    }
    p:nth-child(1){
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp:2;
        -webkit-line-orient:vertical;
    }
</style>
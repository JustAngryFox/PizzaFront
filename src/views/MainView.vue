<template>
<div id="MainView" class="container flex-wrap align-items-start">

<PizzaBlock v-bind:products.sync="products" v-for="dates in pizza"
  v-bind:key="dates.id"
  v-bind:dates="dates"></PizzaBlock>
  
</div>
</template>

<script>

import axios from 'axios'
import PizzaBlock from './PizzaBlock.vue'


export default {
  name: 'MainView',
  
  data:()=>({
  pizza:[],
  products:[],
  }),
  
components: {
PizzaBlock:PizzaBlock
}
, 
mounted:function(){
this.GetPizza()
},

methods:{
GetPizza(){
localStorage.setItem('count_product',0)
axios.get('http://testpizzabackend/public/api/get_products', {
headers: {
'Content-Type': 'multipart/form-data'
}
}).then(response => {
console.log("response", response.data);
this.pizza=response.data[0];
console.log(this.pizza);
})
}
}
}
</script>

<style scope>
#MainView{padding:20px 0px 20px 0px;}
</style>
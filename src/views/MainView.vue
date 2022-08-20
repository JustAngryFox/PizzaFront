<template>
<div id="MainView" class="container flex-wrap align-items-start">

<PizzaBlock  v-for="dates in pizza"
  v-bind:key="dates.id"
  v-bind:dates="dates"></PizzaBlock>
  
</div>
</template>

<script>

import axios from 'axios'
import PizzaBlock from './MainView/PizzaBlock.vue'


export default {
  name: 'MainView',
  
  data:()=>({
  pizza:[],
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
axios.get('http://testpizzabackend/public/api/get_products', {
headers: {
'Content-Type': 'multipart/form-data'
}
}).then(response => {
this.pizza=response.data[0];
})
}
}
}
</script>

<style scope>
#MainView{padding:20px 0px 20px 0px;}
</style>
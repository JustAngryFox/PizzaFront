<template>
<div id="GetOrdersView" class="Container">

<GetOrder  v-for="dates in Orders"
  v-bind:key="dates.id"
  v-bind:dates="dates"></GetOrder>
  
  
  
  
</div>
</template>


<script>
import axios from 'axios'
import GetOrder from './GetOrdersView/GetOrder.vue'

export default {

data:()=>({
Orders:[]
}),

components:{
GetOrder:GetOrder
},

mounted:function(){
axios.get('http://foxread.ru/pizza/public/api/get_orders', {
headers: {
'Content-Type': 'multipart/form-data'
}
}).then(response => {
console.log(response.data[0])
this.Orders=response.data[0]
})
}
}

</script>

<style scope>
#GetOrdersView{justify-content:center;display:flex;flex-flow:column nowrap;align-items:center;}
</style>
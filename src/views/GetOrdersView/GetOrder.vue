<template>
<div id="GetOrder">
<span>Заказ № {{dates.id}}</span>
<span><b>Имя:</b> {{dates.name}}</span>
<span><b>Номер телефона:</b> {{dates.tel}}</span>
<span><b>Электронная почта:</b> {{dates.email}}</span>
<span>Заказ: </span>
<GetProduct  v-for="dates in products"
  v-bind:key="dates.id"
  v-bind:dates="dates"></GetProduct>
</div>
</template>

<script>
import axios from 'axios'
import GetProduct from './GetOrder/GetProduct.vue'

export default{
props:['dates'],

components:{
GetProduct:GetProduct
},

data:()=>({
products:[]
}),

mounted:function(){
axios.get('http://foxread.ru/pizza/public/api/get_product_orders?order_id='+this.dates.id, {
headers: {
'Content-Type': 'multipart/form-data'
}
}).then(response => {
this.products=response.data[0]
})
}

}
</script>

<style scope>
#GetOrder{margin:20px 0px 0px 0px;padding:0px 0px 20px 0px;width:700px;border-bottom:1px solid #ccc;display:flex;flex-flow:column nowrap;align-items:flex-start;}
#GetOrder span:nth-of-type(1){font:800 23px Roboto;}
#GetOrder span:nth-of-type(2){font:400 18px Roboto;margin:20px 0px 0px 0px;}
#GetOrder span:nth-of-type(3){font:400 18px Roboto;margin:10px 0px 0px 0px;}
#GetOrder span:nth-of-type(4){font:400 18px Roboto;margin:10px 0px 0px 0px;}
#GetOrder span:nth-of-type(5){font:600 20px Roboto;margin:10px 0px 10px 0px;}
</style>
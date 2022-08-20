<template>
<div class="PizzaBlockProfile">
<img :src="'http://testpizzabackend/storage/app/images/'+dates.image">
<span>{{dates.name}}</span>
<span class="text-info">Цена: {{dates.price}} рублей</span>
<button v-on:click="delete_product" class="btn btn-primary">Удалить</button>
</div>
</template>

<script>
import store from '@/store';

export default{
props: ['dates','index','total','products_id'],

data(){
return {
store:store,
}
},

methods:{
delete_product(){
store.count--
this.$emit('update:total', this.total-this.dates.price)
this.store.products_id=this.store.products_id.replace(this.dates.id+'|','')
this.store.products.pizza.splice(this.index,1)
}
}
}
</script>

<style scope>
.PizzaBlockProfile{border:1px solid #ccc;flex-flow:row nowrap;display:inline-flex;align-items:center;}
.PizzaBlockProfile img{width:100px;height:100px;object-fit:cover;}
.PizzaBlockProfile span{color:white;}
.PizzaBlockProfile span:nth-of-type(1){margin:0px 0px 0px 10px;width:300px;text-align:left;}
.PizzaBlockProfile span:nth-of-type(2){margin:0px 20px 0px 10px;}
.PizzaBlockProfile button{margin:0px 20px 0px auto;}
</style>
<template>
<div class="PizzaBlock flex-column">
<img :src="'http://foxread.ru/pizza/storage/app/images/'+dates.image">
<span>{{dates.name}}</span>
<span>{{dates.description}}</span>
<span class="text-info">Цена: {{dates.price}} рублей</span>
<span v-on:click="addToBasket">{{message}}</span>
</div>
</template>



<script>

import store from '@/store';

export default {
name: 'PizzaBlock',
props: ['dates'],

data(){
return {
store:store,
message:'Добавить в корзину'
}
},

methods:{
addToBasket(){
this.store.products.pizza.push({name:this.dates.name,price:this.dates.price,image:this.dates.image,id:this.dates.id})

localStorage.setItem('product',JSON.stringify(this.products))

console.log(this.store.products.pizza)
this.store.count++

this.message='Товар успешно добавлен!'

setTimeout(() => this.message = 'Добавить еще', 1000);
}
}

}
</script>

<style scope>
.PizzaBlock{display:inline-flex;margin:20px;width:300px;}
.PizzaBlock img{width:300px;height:300px;object-fit:cover;}
.PizzaBlock span:nth-of-type(1){font:700 20px Segoe UI;margin:20px 0px 0px 0px;}
.PizzaBlock span:nth-of-type(2){font:400 16px Segoe UI;margin:15px 0px 0px 0px;height:170px;}
.PizzaBlock span:nth-of-type(3){font:600 18px Segoe UI;margin:15px 0px 0px 0px;}
.PizzaBlock span:nth-of-type(4){cursor:pointer;justify-content:center;align-items:center;display:inline-flex;margin:20px auto 0px auto;font:600 16px Segoe UI;width:220px;height:40px;background:#17a2b8;color:white;border-radius:5px;}
</style>
<template>
<div id="MainView">
<div class="container flex-column">
<h2 class="text-light">Оформить заказ</h2>
<div class="b0">
<PizzaBlockProfile
 v-bind:total.sync="total" :index="index" v-for="(dates, index) in order"
  v-bind:key="index"
  v-bind:dates="dates"></PizzaBlockProfile>
</div>


<form name="OrderForm">
<div v-if="success" class="alert alert-success">Заказ успешно отправлен</div>
<div v-if="error">Не удалось отправить заказ!</div>

<div class="alert alert-danger" v-if="errors.length">
<li v-for="(error,index) in errors" v-bind:key="index">{{ error }}</li>
</div>


<input placeholder="Введите имя"  v-model="name" type="text" name="name" class="form-control">
<input type="email" v-model="email" name="email" placeholder="Введите email" class="form-control">
<input type="tel" v-model="tel" name="tel" placeholder="Введите номер телефона" class="form-control">
<input :value="store.products_id" type="hidden" name="products_id">
<span>Итоговая сумма: {{total}} рублей</span>
<button v-on:click="ValidateForm" type="button" class="btn btn-primary">Добавить</button>
</form> 



</div>

</div>
</template>

<script>
import PizzaBlockProfile from './ProfileView/PizzaBlockProfile.vue'
import store from './../store';
import axios from 'axios'

export default {
name: 'ProfileView',
data:()=>({
total:0,
products_id:'',
store:store,
order:[],
success:false,
error:false,
name:null,
email:null,
tel:null,
errors:[]
}),  

mounted:function(){
this.GetOrder()
},

components: {
PizzaBlockProfile:PizzaBlockProfile
},

methods:{
GetOrder(){

this.order=this.store.products.pizza;

let i=0

for (i=0;i<this.store.products.pizza.length;i++){
this.total+=Number(this.store.products.pizza[i].price)
this.products_id+=this.store.products.pizza[i].id+'|'
}
this.store.products_id=this.products_id
},

ValidateForm(){


this.errors=[]

// eslint-disable-next-line
let reg_tel = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/

let reg_email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

if (!this.name) {
        this.errors.push('Укажите имя.');
}

if (!reg_tel.test(this.tel)) {
        this.errors.push('Некорректный номер телефона.');
}

if (!reg_email.test(this.email)) {
        this.errors.push('Некорректный адрес электронной почты.');
}


if (this.products_id=='') {
        this.errors.push('Вы не заказали пиццу!');
}

if(this.errors.length==0){ 
this.SendOrder()
}
}
,


SendOrder(){
var formData = new FormData(document.forms.OrderForm)
axios.post('http://testpizzabackend/public/api/upload_order', formData, {
headers: {
'Content-Type': 'multipart/form-data'
}
}).then(response => {
if (response.data.success=='ok'){
this.success=true
} else {
this.error=true
}
})
}

}
}
</script>

<style scope>
#MainView .container{background: #343a40;border-radius:6px;padding:20px 0px;}
#MainView .container .b0{flex-flow:column nowrap;display:inline-flex;margin:20px 0px 0px 0px;}
#MainView .container form{flex-flow:column nowrap;display:inline-flex;}
#MainView .container form input{margin:20px 0px 0px 0px;}
#MainView .container form span{margin:20px 0px 0px 0px;color:#28a745;}
#MainView .container form button{margin:20px 0px 20px 0px;}
</style>
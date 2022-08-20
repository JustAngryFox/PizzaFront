<template>
<div id="AddPizzaView" class="container flex-column">
<h2 class="text-light">Добавить пиццу</h2>

<div class="alert alert-danger" v-if="errors.length">
<li v-for="(error,index) in errors" v-bind:key="index">{{ error }}</li>
</div>
<div class="alert alert-danger" v-if="error">Не удалось отправить заказ!</div>

<div v-if="success" class="alert alert-success">Заказ успешно отправлен</div>

 <form name="PizzaForm">
  <div class="form-group">
    <label class="text-light" for="name">Название:</label>
    <input v-model="name" type="text" name="name" class="form-control" id="name">
  </div>
  <div class="form-group">
    <label class="text-light" for="price">Цена:</label>
    <input v-model="price" type="number" name="price" class="form-control" id="price">
  </div>
  <div class="form-group">
    <label class="text-light" for="description">Описание:</label>
    <input v-model="description" type="text" name="description" class="form-control" id="description">
  </div>
  <div class="form-group">
    <label class="text-light" for="image">Изображение:</label>
    <input type="file" name="image" class="form-control" id="image">
  </div>
  <button v-on:click="ValidateForm" type="button" class="btn btn-primary">Добавить</button>
</form> 


</div>
</template>

<script>
import axios from 'axios'


export default {

name: 'AddPizzaView',

data:()=>({
name:null,
price:null,
description:null,
errors:[],
success:false,
error:false
}),

methods:{

ValidateForm(){

this.errors=[]

if (!this.name) {
        this.errors.push('Введите название!')
}

if (!this.price) {
        this.errors.push('Укажите цену')
}

if (!this.description) {
        this.errors.push('Добавьте описание!')
}


if (document.getElementById('image').files.length==0) {
        this.errors.push('Добавьте изображение!')
}

if(this.errors.length==0){ 
this.SendPizza()
}
},


SendPizza(){
var formData = new FormData(document.forms.PizzaForm)
axios.post('http://testpizzabackend/public/api/upload_product', formData, {
headers: {
'Content-Type': 'multipart/form-data'
}
}).then(response => {
console.log("response", response.data)

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
#AddPizzaView{margin:50px 0px 0px 0px;background:#343a40;border-radius:5px;padding:30px 0px;}
</style>
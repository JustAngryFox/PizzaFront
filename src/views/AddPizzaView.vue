<template>
<div id="AddPizzaView" class="container flex-column">
<h2 class="text-light">Добавить пиццу</h2>
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
  <button v-on:click="SendPizza" type="button" class="btn btn-primary">Добавить</button>
</form> 
</div>
</template>

<script>
import axios from 'axios'


export default {

name: 'AddPizzaView',

data:()=>({
name:'',
price:'',
text:'',
description:'',
})	
, 
methods:{
SendPizza(){
var formData = new FormData(document.forms.PizzaForm)
console.log(formData)
axios.post('http://testpizzabackend/api/upload_product', formData, {
headers: {
'Content-Type': 'multipart/form-data'
}
}).then(response => {
console.log("response", response.data)
})
}
}
  
  
}
</script>

<style scope>
#AddPizzaView{margin:50px 0px 0px 0px;background:#343a40;border-radius:5px;padding:30px 0px;}
</style>
<template>

<div id="app" class="text-center">

<div id="header" class="text-center">
<div class="container">
<h1>Tasty Pizza</h1>
</div>
</div>

<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
<div class="container justify-content-start">
<router-link class="navbar-brand" to="/">Главная</router-link>
<router-link class="navbar-brand" to="/add_pizza">Добавить пиццу</router-link>

<div class="AppBlock0 align-middle">
<router-link to="/profile"><span class="text-success">{{store.count}}</span><span class="text-white">Корзина</span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-cart" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg>
</router-link>
</div>

</div>
</nav>
    
<router-view/>

<div id="footer" class="text-center">
<div class="container">
Тестовое задание для компании "Программный центр"
</div>
</div>

</div>

</template>


<script>
import store from './store';

export default {
data:()=>({
store:store
})
}
</script>

<style scope>
#header{height:70px;background:#13466B;}
.container{height:100%;align-items:center;display:inline-flex;}
.container h1{color:white;font:800 28px Helvetica Neue;}

.navbar .container{justify-content:flex-start;}

.AppBlock0{margin:0px 0px 0px auto;}
.AppBlock0 span{margin:0px 10px 0px 0px;}

#footer{height:100px;background:#343333;color:white;margin:50px 0px 0px 0px;}
</style>
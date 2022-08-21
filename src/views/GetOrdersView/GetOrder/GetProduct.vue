<template>
<div id="GetProduct">
<img :src="'http://foxread.ru/pizza/storage/app/images/'+dates.image">
<span>{{dates.name}}</span>
<span>Цена: {{dates.price}} рублей</span>
</div>
</template>

<script>
export default{
props:['dates']
}
</script>

<style scope>
#GetProduct{margin:5px 0px 5px 0px;}
#GetProduct img{width:100px;height:50px;object-fit:cover;}
#GetProduct span:nth-of-type(1){font:400 18px Roboto !important;width:400px;display:inline-flex;margin:0px 0px 0px 20px}
#GetProduct span:nth-of-type(2){font:600 18px Roboto !important;}
</style>
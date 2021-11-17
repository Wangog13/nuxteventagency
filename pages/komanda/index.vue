<template>

    <div>


        <Navs/>
<div class="vedu">
    <div class="line_small"> </div>
<div class="line_small"> </div>
<div class="line_small"> </div>
<div class="line_small"> </div>

           <b-breadcrumb :items="items"></b-breadcrumb>


<div class="container">
    <h1>Наши ведущие</h1>
  <div class="row mt-5">
    <div class="col-md-4"  v-for="article in articles" :key="article.slug">
   <div class="card card_port " >
       
  <img :src="article.img" class="vedus  for_r" alt="...">
 

  <div class="card-body bg-light">
   
    
    <h4 class="card-text text-white">{{article.title}}</h4>
    <NuxtLink
          :to="{ name: 'komanda-veduschie-slug', params: { slug: article.slug } }"
          class="btn btn-danger blus"> Перейти</NuxtLink>
  </div>
</div></div></div>





</div></div> 



<div class="vedu">
 

<div class="container">
    <h1>Наши Фотографы</h1>
  <div class="row mt-5">
    <div class="col-md-3"  v-for="photog in photogs" :key="photog.slug">
   <div class="card card_port card_t" >
       
  <img :src="photog.img" class="vedus for_t" alt="...">
 

  <div class="card-body text_r bg-light">
   
    
    <h4 class="card-text text-white">{{photog.title}}</h4>
    <NuxtLink
          :to="{ name: 'komanda-fotografi-slug', params: { slug: photog.slug } }"
          class="btn btn-danger"> Перейти</NuxtLink>
  </div>
</div></div></div>





</div></div> 




<div class="vedu">
 

<div class="container">
    <h1>Наши Видеографы</h1>
  <div class="row mt-5">
    <div class="col-md-4"  v-for="video in videos" :key="video.slug">
   <div class="card card_port " >
       
  <img :src="video.img" class="vedus for_r" alt="...">
 

  <div class="card-body bg-light text-t">
   
    
    <h4 class="card-text text-white">{{video.title}}</h4>
    <NuxtLink
          :to="{ name: 'komanda-videografi-slug', params: { slug: video.slug } }"
          class="btn btn-danger"> Перейти</NuxtLink>
  </div>
</div></div></div>





</div></div> 




<div class="vedu">
 

<div class="container">
    <h1>Декор и свадебная полиграфия</h1>
  <div class="row mt-5">
    <div class="col-md-4"  v-for="dekor in dekors" :key="dekor.slug">
   <div class="card card_port " >
       
  <img :src="dekor.img" class="vedus for_r" alt="...">
 

  <div class="card-body bg-light text-t">
   
    
    <h4 class="card-text text-white">{{dekor.title}}</h4>
    <NuxtLink
          :to="{ name: 'komanda-dekor-slug', params: { slug: dekor.slug } }"
          class="btn btn-danger"> Перейти</NuxtLink>
  </div>
</div></div></div>





</div></div> 


<FoodStore/>
</div>
</template>

<script>
    export default {
        data() {
      return {
        items: [
          {
            text: 'Главная',
            href: '/'
          },
           {
            text: 'Команда',
            href: '/komanda/',
            active: true
          },
        
         
        ]
      }
         },
  async asyncData ({$content, params}){
const articles = await $content('articles')
.sortBy('path')
.fetch()
const photogs = await $content('photogs')
.sortBy('path')
.fetch()
const videos = await $content('videos')
.sortBy('path')
.fetch()
const dekors = await $content('dekors')
.sortBy('path')
.fetch()
return {
  articles,
  photogs,
  videos,
  dekors
  
}
  },

    }
</script>

<style lang="scss" scoped>

.card-text{
    color: #000 !important;
}
.card-body{
    width: 350px;
}
.vedus{
    height: 400px;
    object-fit: contain;
  
    padding: 10px;
}

@media screen and (max-width:768px){
    .card-body{
    width: 100%;
}
  .for_r{
      width: 100% !important;
  }
    .card{
        width: 100% !important;
                margin: 0 auto !important;

    }
    .vedu{
        height: 100% !important;

    }
}
.vedu{
    margin-bottom: 100px;
    height: 100%;
                margin-top: 100px !important;

    
    h1{
            font-size: 70px ;
            color: #fff;
            text-align: center;
            font-family: 'NeueMachina-Bold';

    }
}
.card{            margin-top: 20px !important;
height: 550px;
    width: 350px ;
}
</style>
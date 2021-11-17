<template>

    <div>


        <Navs/>
          <div class="line_small"> </div>
<div class="line_small"> </div>
<div class="line_small"> </div>
<div class="line_small"> </div>

<div class="vedu">
          <b-breadcrumb :items="items"></b-breadcrumb>


<div class="container">
    
    <h1>Наши ведущие</h1>
  <div class="row mt-5">
    <div class="col-md-4"  v-for="article in articles" :key="article.slug">
   <div class="card card_port" >
       
  <img :src="article.img" class="vedus" alt="...">
 

  <div class="card-body bg-light">
   
    
    <h4 class="card-text text-white">{{article.title}}</h4>
    <NuxtLink
          :to="{ name: 'komanda-veduschie-slug', params: { slug: article.slug } }"
          class="btn btn-danger blus"> Перейти</NuxtLink>
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
            text: 'Команда',
            href: '/komanda'
          },
           {
            text: 'Ведущие',
            href: '/komanda/veduschie',
            active: true
          },
        
         
        ]
      }
         },
  async asyncData ({$content, params}){
const articles = await $content('articles')
.sortBy('path')
.fetch()

return {
  articles,
  
}
  },

    }
</script>

<style lang="scss" scoped>

.card-text{
    color: #000 !important;
}
.card-body{
    width: 300px;
}
.vedus{
    height: 400px;
    object-fit: cover;
    width: 300px;
    padding: 10px;
}

@media screen and (max-width:768px){
  
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
    width: 300px !important;
}
</style>
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
    
    <h1>Наши Фотографы</h1>
    <div class="portf">
      <h2>
        Фотографии и видео – это книга вашей жизни. Каждый момент нашей личной истории хочется зафиксировать в своей памяти, отложить в ней все детали и нюансы до мельчайших подробностей. Выбор команд для фотосъемки и видеосъемки свадьбы – один из самых ответственных этапов в подготовке. Глазами этих людей вы будете смотреть на один из самых важных дней в вашей жизни – день вашей свадьбы! Важно выбрать профессионала в своем деле, человека или команду, с которыми вы будете на одной волне, сможете в день своей свадьбы расслабиться и чувствовать себя очень легко и комфортно.

      </h2>
      <h2>
        Создавая концепцию торжества, мы всегда продумываем не только место основной фотосессии, но и место, где будут проходить сборы. Наши фотосессии подобны магии, когда привычные парки и улочки на фото и видео наших мастеров превращаются в сказочно-красивые картинки, которые хочется рассматривать.
      </h2>
      <h2>
        Иногда нас спрашивают, зачем фотографировать кольца, платья, туфли и другие детали образа пары, мы ведь не магазин этих вещей? Конечно, нет. Но с помощью фотосъемки и видеосъемки свадьбы мы фиксируем эти детали, потому что вы потратили не один месяц на их поиск, скрупулёзно выбирая, и мы лишь хотим оставить в вашей памяти эти мелочи, из которых складывается наша жизнь. Даже самые маленькие детали вашего дня через некоторое время захочется вернуть в памяти «крупным планом»!
      </h2>
      <h2>
        А вообще, конечно же, лучше один раз увидеть, чем сто раз услышать)) Мы сняли небольшой бэкстейдж с нашей свадьбы, где вы можете посмотреть как работает наша фото команда, как проходит в нашем агентстве фотосъемка в день свадьбы, как мы работаем с парой.  Этот день будет легким и непринужденным!
      </h2>
    </div>
  <div class="row mt-5">
    <div class="col-md-3"  v-for="article in articles" :key="article.slug">
   <div class="card card_port" >
       
  <img :src="article.img" class="vedus for_r" alt="...">
 

  <div class="card-body bg-light">
   
    
    <h4 class="card-text text-white">{{article.title}}</h4>
    <NuxtLink
          :to="{ name: 'komanda-fotografi-slug', params: { slug: article.slug } }"
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
            text: 'Фотографы',
            href: '/komanda/fotografi',
            active: true
          },
        
         
        ]
      }
         },
  async asyncData ({$content, params}){
const articles = await $content('photogs')
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
    width: 280px;
}
.vedus{
    height: 400px;
    object-fit: contain;
    padding: 10px;
}
.for_r{
      width: 280px !important;

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
    width: 280px !important;
}
</style>
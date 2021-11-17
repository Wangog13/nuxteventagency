<template>
<div>
  <Navs/>
    <div class="line_small"> </div>
<div class="line_small"> </div>
<div class="line_small"> </div>
<div class="line_small"> </div>

    <div class="slug_blog pb-5">
         <b-breadcrumb :items="items"></b-breadcrumb>

        <div class="container pt-5">
              <!-- <img :src="article.img" class=" img-fluid rounded-start slug" alt="..."> -->

        <h1 class="text-white">{{dekor.title}}</h1>
<h5 class="text-white">{{dekor.description}}</h5>
    </div>
  
 <NuxtContent
    class="text-white container" :document="dekor"
  />
  
    
    </div>
    
    
    
    
<FoodStore/>
    </div>
    
</template>

<script>
import { Fancybox, Carousel, Panzoom } from "@fancyapps/ui";

    export default {
      
  data() {
      return {
        items: [
          {
            text: 'Команда',
            href: '/komanda'
          },
           {
            text: 'Декор и свадебная полиграфия',
            href: '/komanda/dekor'
          },
          {
            text: 'Декор',
           active: true
          },
         
        ]
      }
    },
    async asyncData({ $content, params }) {
        const dekor = await $content("dekors", params.slug).fetch();
        return {
            dekor
        };
    },

      


    
    
   head() {
     
    return {
      title: this.dekor.title , 
      meta: [
        { hid: 'description', name: 'description', content: this.dekor.description },
      
      ]
    }
  }
  
}
</script>

<style lang="scss" scoped>

</style>
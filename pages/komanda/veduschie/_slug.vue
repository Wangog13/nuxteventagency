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

        <h1 class="text-white">{{article.title}}</h1>
<h5 class="text-white">{{article.description}}</h5>
<nuxt-content :docement="articles" />
    </div>
    
 <NuxtContent
    class="text-white container" :document="article"
  />
    
    </div>
    
    
    
    
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
            href: '/komanda/veduschie'
          },
          {
            text: 'ведущий',
           active: true
          },
         
        ]
      }
    },
    async asyncData({ $content, params }) {
        const article = await $content("articles", params.slug).fetch();
        return {
            article
        };
    },

      


    
    
   head() {
     
    return {
      title: this.article.title , 
      meta: [
        { hid: 'description', name: 'description', content: this.article.description },
      
      ]
    }
  }
  
}
</script>

<style lang="scss" scoped>

</style>
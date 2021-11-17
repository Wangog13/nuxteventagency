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

        <h1 class="text-white">{{photog.title}}</h1>
<h5 class="text-white">{{photog.description}}</h5>
<nuxt-content :docement="photogs" />
    </div>
    
 <NuxtContent
    class="text-white container" :document="photog"
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
            text: 'Фотографы',
            href: '/komanda/fotografi'
          },
          {
            text: 'Фотограф',
           active: true
          },
         
        ]
      }
    },
    async asyncData({ $content, params }) {
        const photog = await $content("photogs", params.slug).fetch();
        return {
            photog
        };
    },

      


    
    
   head() {
     
    return {
      title: this.photog.title , 
      meta: [
        { hid: 'description', name: 'description', content: this.photog.description },
      
      ]
    }
  }
  
}
</script>

<style lang="scss" scoped>

</style>
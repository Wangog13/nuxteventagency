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

        <h1 class="text-white">{{video.title}}</h1>
<h5 class="text-white">{{video.description}}</h5>
<nuxt-content :docement="video" />
    </div>
    
 <NuxtContent
    class="text-white container" :document="video"
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
            text: 'Видеографы',
            href: '/komanda/videografi'
          },
          {
            text: 'Видеограф',
           active: true
          },
         
        ]
      }
    },
    async asyncData({ $content, params }) {
        const video = await $content("videos", params.slug).fetch();
        return {
            video
        };
    },

      


    
    
   head() {
     
    return {
      title: this.video.title , 
      meta: [
        { hid: 'description', name: 'description', content: this.video.description },
      
      ]
    }
  }
  
}
</script>

<style lang="scss" scoped>

</style>
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
    

<div class="albom">
  <div class="container">
<h1>Фотоальбом</h1>
<div class="row">
<div class="col-md-3 col-6">
<a
  href="https://i.ibb.co/BjczczV/MC5qcGc.jpg"
  data-fancybox="gallery"
  data-caption="Optional caption"
>
 <img src="https://i.ibb.co/BjczczV/MC5qcGc.jpg" class="albom_proho">
</a></div>
<div class="col-md-3 col-6">
<a
  href="https://i.ibb.co/XsXggLm/MS5qc-GVn-1.jpg"
  data-fancybox="gallery"
  data-caption="Optional caption"
>
 <img src="https://i.ibb.co/XsXggLm/MS5qc-GVn-1.jpg" class="albom_proho">
</a></div>

<div class="col-md-3 col-6">
<a
  href="https://i.ibb.co/74wD6jB/NS5qcGVn.jpg"
  data-fancybox="gallery"
  data-caption="Optional caption"
>
 <img src="https://i.ibb.co/74wD6jB/NS5qcGVn.jpg" class="albom_proho">
</a></div>
<div class="col-md-3 col-6">
<a
  href="https://i.ibb.co/Nj5SHdW/NC5qcGVn.jpg"
  data-fancybox="gallery"
  data-caption="Optional caption"
>
 <img src="https://i.ibb.co/Nj5SHdW/NC5qcGVn.jpg" class="albom_proho">
</a></div>
</div>


<div class="row mt-2">
<div class="col-md-3 col-6">
<a
  href="https://i.ibb.co/w79cbzg/ZC5qc-Gc-3.jpg"
  data-fancybox="gallery"
  data-caption="Optional caption"
>
 <img src="https://i.ibb.co/w79cbzg/ZC5qc-Gc-3.jpg" class="albom_proho">
</a></div>
<div class="col-md-3 col-6">
<a
  href="https://i.ibb.co/1qcxfJX/MS5qcGc.jpg"
  data-fancybox="gallery"
  data-caption="Optional caption"
>
 <img src="https://i.ibb.co/1qcxfJX/MS5qcGc.jpg" class="albom_proho">
</a></div>

<div class="col-md-3 col-6">
<a
  href="https://i.ibb.co/sR5B2XN/Mi5qcGVn.jpg"
  data-fancybox="gallery"
  data-caption="Optional caption"
>
 <img src="https://i.ibb.co/sR5B2XN/Mi5qcGVn.jpg" class="albom_proho">
</a></div>
<div class="col-md-3 col-6">
<a
  href="https://i.ibb.co/jWpx6q2/ZC5qc-Gc-4.jpg"
  data-fancybox="gallery"
  data-caption="Optional caption"
>
 <img src="https://i.ibb.co/jWpx6q2/ZC5qc-Gc-4.jpg" class="albom_proho">
</a></div>
</div> 





<div class="row mt-2">
<div class="col-md-3 col-6">
<a
  href="https://i.ibb.co/mTHFpZW/My5qc-Gc-1.jpg"
  data-fancybox="gallery"
  data-caption="Optional caption"
>
 <img src="https://i.ibb.co/mTHFpZW/My5qc-Gc-1.jpg" class="albom_proho">
</a></div>
<div class="col-md-3 col-6">
<a
  href="https://i.ibb.co/Bcz1jTc/Zi5qcGVn.jpg"
  data-fancybox="gallery"
  data-caption="Optional caption"
>
 <img src="https://i.ibb.co/Bcz1jTc/Zi5qcGVn.jpg" class="albom_proho">
</a></div>

<div class="col-md-3 col-6">
<a
  href="https://i.ibb.co/zVHSf8m/Mi5qcGc.jpg"
  data-fancybox="gallery"
  data-caption="Optional caption"
>
 <img src="https://i.ibb.co/zVHSf8m/Mi5qcGc.jpg" class="albom_proho">
</a></div>
<div class="col-md-3 col-6">
<a
  href="https://i.ibb.co/HVJkGmz/MS5qc-GVn-2.jpg"
  data-fancybox="gallery"
  data-caption="Optional caption"
>
 <img src="https://i.ibb.co/HVJkGmz/MS5qc-GVn-2.jpg" class="albom_proho">
</a></div>
</div> 






<div class="row mt-2">
<div class="col-md-3 col-6">
<a
  href="https://i.ibb.co/yFzQtJ3/NS5qcGc.jpg"
  data-fancybox="gallery"
  data-caption="Optional caption"
>
 <img src="https://i.ibb.co/yFzQtJ3/NS5qcGc.jpg" class="albom_proho">
</a></div>
<div class="col-md-3 col-6">
<a
  href="https://i.ibb.co/QMNgqFJ/OC5qcGVn.jpg"
  data-fancybox="gallery"
  data-caption="Optional caption"
>
 <img src="https://i.ibb.co/QMNgqFJ/OC5qcGVn.jpg" class="albom_proho">
</a></div>

<div class="col-md-3 col-6">
<a
  href="https://i.ibb.co/ypMWsWz/ZS5qcGVn.jpg"
  data-fancybox="gallery"
  data-caption="Optional caption"
>
 <img src="https://i.ibb.co/ypMWsWz/ZS5qcGVn.jpg" class="albom_proho">
</a></div>
<div class="col-md-3 col-6">
<a
  href="https://i.ibb.co/gv95yYy/MS5qc-Gc-1.jpg"
  data-fancybox="gallery"
  data-caption="Optional caption"
>
 <img src="https://i.ibb.co/gv95yYy/MS5qc-Gc-1.jpg" class="albom_proho">
</a></div>
</div> 




</div>

</div>




    
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
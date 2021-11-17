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
    
    
    
<div class="albom">
  <div class="container">
<h1>Фотоальбом</h1>
<div class="row">
<div class="col-md-3 col-6">
<a
  href="https://i.ibb.co/CzhpZVX/ZS5qcGc.jpg"
  data-fancybox="gallery"
  data-caption="Optional caption"
>
 <img src="https://i.ibb.co/CzhpZVX/ZS5qcGc.jpg" class="albom_proho">
</a></div>
<div class="col-md-3 col-6">
<a
  href="https://i.ibb.co/51yXnFw/YS5qcGc.jpg"
  data-fancybox="gallery"
  data-caption="Optional caption"
>
 <img src="https://i.ibb.co/51yXnFw/YS5qcGc.jpg" class="albom_proho">
</a></div>

<div class="col-md-3 col-6">
<a
  href="https://i.ibb.co/y8vW7wm/Ni5qc-Gc-2.jpg"
  data-fancybox="gallery"
  data-caption="Optional caption"
>
 <img src="https://i.ibb.co/y8vW7wm/Ni5qc-Gc-2.jpg" class="albom_proho">
</a></div>
<div class="col-md-3 col-6">
<a
  href="https://i.ibb.co/ckf95Lr/MC5qc-Gc-1.jpg"
  data-fancybox="gallery"
  data-caption="Optional caption"
>
 <img src="https://i.ibb.co/ckf95Lr/MC5qc-Gc-1.jpg" class="albom_proho">
</a></div>
</div>


<div class="row mt-2">
<div class="col-md-3 col-6">
<a
  href="https://i.ibb.co/V2Rnz7C/MS5qc-Gc-2.jpg"
  data-fancybox="gallery"
  data-caption="Optional caption"
>
 <img src="https://i.ibb.co/V2Rnz7C/MS5qc-Gc-2.jpg" class="albom_proho">
</a></div>
<div class="col-md-3 col-6">
<a
  href="https://i.ibb.co/6DsT2yb/ZC5qc-Gc-6.jpg"
  data-fancybox="gallery"
  data-caption="Optional caption"
>
 <img src="https://i.ibb.co/6DsT2yb/ZC5qc-Gc-6.jpg" class="albom_proho">
</a></div>

<div class="col-md-3 col-6">
<a
  href="https://i.ibb.co/nrhjCQn/MS5qc-Gc-3.jpg"
  data-fancybox="gallery"
  data-caption="Optional caption"
>
 <img src="https://i.ibb.co/nrhjCQn/MS5qc-Gc-3.jpg" class="albom_proho">
</a></div>
<div class="col-md-3 col-6">
<a
  href="https://i.ibb.co/8MbJqkH/MC5qc-Gc-2.jpg"
  data-fancybox="gallery"
  data-caption="Optional caption"
>
 <img src="https://i.ibb.co/8MbJqkH/MC5qc-Gc-2.jpg" class="albom_proho">
</a></div>
</div> 





<div class="row mt-2">
<div class="col-md-3 col-6">
<a
  href="https://i.ibb.co/SVz3sxr/NS5qc-Gc-1.jpg"
  data-fancybox="gallery"
  data-caption="Optional caption"
>
 <img src="https://i.ibb.co/SVz3sxr/NS5qc-Gc-1.jpg" class="albom_proho">
</a></div>
<div class="col-md-3 col-6">
<a
  href="https://i.ibb.co/HPwytkm/ZC5qc-Gc-7.jpg"
  data-fancybox="gallery"
  data-caption="Optional caption"
>
 <img src="https://i.ibb.co/HPwytkm/ZC5qc-Gc-7.jpg" class="albom_proho">
</a></div>

<div class="col-md-3 col-6">
<a
  href="https://i.ibb.co/GVDmG70/NC5qcGc.jpg"
  data-fancybox="gallery"
  data-caption="Optional caption"
>
 <img src="https://i.ibb.co/GVDmG70/NC5qcGc.jpg" class="albom_proho">
</a></div>
<div class="col-md-3 col-6">
<a
  href="https://i.ibb.co/rfB05MK/MS5qc-Gc-4.jpg"
  data-fancybox="gallery"
  data-caption="Optional caption"
>
 <img src="https://i.ibb.co/rfB05MK/MS5qc-Gc-4.jpg" class="albom_proho">
</a></div>
</div> 






<div class="row mt-2">
<div class="col-md-3 col-6">
<a
  href="https://i.ibb.co/d6WPGFS/Yy5qc-Gc-1.jpg"
  data-fancybox="gallery"
  data-caption="Optional caption"
>
 <img src="https://i.ibb.co/d6WPGFS/Yy5qc-Gc-1.jpg" class="albom_proho">
</a></div>
<div class="col-md-3 col-6">
<a
  href="https://i.ibb.co/XWYfJPN/Zi5qcGc.jpg"
  data-fancybox="gallery"
  data-caption="Optional caption"
>
 <img src="https://i.ibb.co/XWYfJPN/Zi5qcGc.jpg" class="albom_proho">
</a></div>

<div class="col-md-3 col-6">
<a
  href="https://i.ibb.co/vkXCDHQ/OC5qcGc.jpg"
  data-fancybox="gallery"
  data-caption="Optional caption"
>
 <img src="https://i.ibb.co/vkXCDHQ/OC5qcGc.jpg" class="albom_proho">
</a></div>
<div class="col-md-3 col-6">
<a
  href="https://i.ibb.co/FqTJ2Hs/ZS5qc-Gc-1.jpg"
  data-fancybox="gallery"
  data-caption="Optional caption"
>
 <img src="https://i.ibb.co/FqTJ2Hs/ZS5qc-Gc-1.jpg" class="albom_proho">
</a></div>
</div> 





<div class="row mt-2">
<div class="col-md-3 col-6">
<a
  href="https://i.ibb.co/87mrYtn/ZS5qc-Gc-2.jpg"
  data-fancybox="gallery"
  data-caption="Optional caption"
>
 <img src="https://i.ibb.co/87mrYtn/ZS5qc-Gc-2.jpg" class="albom_proho">
</a></div>
<div class="col-md-3 col-6">
<a
  href="https://i.ibb.co/zQbfhhN/ZS5qc-Gc-3.jpg"
  data-fancybox="gallery"
  data-caption="Optional caption"
>
 <img src="https://i.ibb.co/zQbfhhN/ZS5qc-Gc-3.jpg" class="albom_proho">
</a></div>

<div class="col-md-3 col-6">
<a
  href="https://i.ibb.co/0MRb584/ZC5qc-Gc-8.jpg"
  data-fancybox="gallery"
  data-caption="Optional caption"
>
 <img src="https://i.ibb.co/0MRb584/ZC5qc-Gc-8.jpg" class="albom_proho">
</a></div>
<div class="col-md-3 col-6">
<a
  href="https://i.ibb.co/h8ZrqVp/YS5qc-Gc-3.jpg"
  data-fancybox="gallery"
  data-caption="Optional caption"
>
 <img src="https://i.ibb.co/h8ZrqVp/YS5qc-Gc-3.jpg" class="albom_proho">
</a></div>
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
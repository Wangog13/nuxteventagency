<template>
    <div>
<a class="spec" href="#" centered v-b-modal.modal-10>

    <div class="our">
                 <img src="~/assets/img/akcii/2.png" class="sale_img">

       <h1 class="spec_h11">Акционные-спецпредложения </h1>    
         <!-- <h1 class="spec_h1">Спецпредложения</h1> -->

    </div>
</a>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
@media screen and (max-width:768px) {
 
 .spec_h11{
    display: none !important;
}

  .sale_img{
    height: 80px !important;
    width: 80px !important;
    right: 0;
  }
}
.sale_img{
      height: 150px;
width: 150px;
border-radius: 100%;
top: 15%;
position: absolute;
object-fit: contain;
}
.sale_img:active { 
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.5) inset, 0 -1px 0 rgba(255, 255, 255, .1)inset;

box-shadow:0 1px 0 rgba(0, 0, 0, 0.5) inset, 0 -1px 0 rgba(255, 255, 255, .1) inset; 
    -moz-transform: translatey(3px); /* Для Firefox */ 
    -ms-transform: translatey(3px); /* Для IE */ 
    -webkit-transform: translatey(3px); /* Для Safari, Chrome, iOS */ 
    -o-transform:translatey(3px); /* Для Opera */ 
    transform: translatey(3px); 



}



.spec{
    height: 200px;
    top: 10%;
    width: 200px;z-index: 1;
    right: 5%;


    position: absolute;
    border-top-left-radius: 20%;
        border-bottom-left-radius: 20%;

    .our{
        width: 100%;
        height: 100%;
        .spec_h11{
        font-size: 15px;
text-align: center;
        display: flex;
      
        color: #fff;
        position: absolute;
        top:90%;
        
            font-family: 'NeueMachina-Bold';

       


        }
        .spec_h1{
            
                    transform: rotate(-90deg);
                   
        display: flex;
        font-size: 18px;
        color: #fff;
        position: absolute;
        top: 43%;
        right: 65%;
            font-family: 'NeueMachina-Bold';

        }
    }
  

    
    .our{
        padding-top: 120px;
        display: flex;
        justify-content: center;
      
        h1{
            font-size: 25px ;
        font-weight: bold;
        }
    }
}
</style>
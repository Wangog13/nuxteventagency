<template>
    <div>
      <b-navbar toggleable="md" type="dark" >
    <b-navbar-brand href="/">
            <img src="../assets/img/logo.png" 
            class="img_logo" alt="Kitten">

    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse "></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav right>
      <b-navbar-nav class="justify-content-around container menus">
      <b-nav-item href="/"> Главная</b-nav-item>
      <b-nav-item>  <NuxtLink to="/komanda">Наша команда</NuxtLink></b-nav-item>
      
      <b-nav-item href="#uslugi"> Услуги</b-nav-item>
      <b-nav-item>  <NuxtLink to="/stoimost">Стоимость</NuxtLink></b-nav-item>
             <b-nav-item>  <NuxtLink to="/akcii/akciya-one">Акции и спецпредложения</NuxtLink></b-nav-item>
      <b-nav-item href="#kontakti"> контакты</b-nav-item>
<div class="tel  d-md-none d-lg-none">
  <a href="tel:+375336954888"><h5>+375 (33) 695-48-88 (МТС)</h5></a>
    <a href="tel:+375336854888"><h5>+375 (33) 685-48-88 (МТС)</h5></a>

  <a href="tel:+375336504888"><h5>+375 (33) 650-48-88 (МТС)</h5></a>
  <h5>Email: asaevent@yandex.by</h5>
<div class="soc_footer">
  
    <div class="icon_soc" >


<a href="https://wa.me/375336504888"><img src="https://img.icons8.com/ios/50/000000/whatsapp--v4.png" class="icons"/></a>
<a href="viber://chat?number=375336504888"><img src="https://img.icons8.com/ios/50/000000/apple-phone.png" class="icons"/></a>
<a href="http://t.me/Rzheusskiy"><img src="https://img.icons8.com/ios/50/000000/telegram-app.png" class="icons"/></a>



  </div>
</div>
</div>
      </b-navbar-nav>

   
    </b-collapse>
  </b-navbar>
  </div>
</template>

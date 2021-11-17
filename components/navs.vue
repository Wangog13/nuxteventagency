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
      <b-nav-item href="#"> Главная</b-nav-item>
      <b-nav-item>  <NuxtLink to="/komanda">Наша команда</NuxtLink></b-nav-item>
      
      <b-nav-item href="#uslugi"> Услуги</b-nav-item>
      <b-nav-item>  <NuxtLink to="/stoimost">Стоимость</NuxtLink></b-nav-item>
             <b-nav-item>  <NuxtLink to="/akcii/akciya-one">Акции и спецпредложения</NuxtLink></b-nav-item>
      <b-nav-item href="#kontakti"> контакты</b-nav-item>

      </b-navbar-nav>

   
    </b-collapse>
  </b-navbar>
  </div>
</template>

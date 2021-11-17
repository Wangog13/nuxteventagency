<template>
    <div>

<div class="footer">
  <div class="container">
    <img src="~/assets/img/logo.png" class="footer_brand">
    <div class="row">
      <div class="col-md-6">
        <div class="footer_adress">

<h1>КОНТАКТНАЯ ИНФОРМАЦИЯ</h1>
<h4>
  Мы находимся в самом центре Витебска ул. Толстого 8 

</h4>
<div class="tel">
  <h5>+375 (33) 695-48-88 (МТС)</h5>
    <h5> +375 (29) 170-66-27 (A1)</h5>

</div>
<div class="soc_footer">
  
   <h4>Присоединяйтесь к нам в социальных сетях:
</h4>
    <div class="icon_soc" >
     
<img src="https://img.icons8.com/ios/50/000000/instagram-new--v1.png" class="icons"/>

<img src="https://img.icons8.com/ios/50/000000/facebook-new--v1.png" class="icons"/>
<img src="https://img.icons8.com/ios/50/000000/vk-circled--v1.png" class="icons"/>




  </div>
</div>
        </div>
      </div>
      <div class="col-md-6">
                <div class="footer_map">
     <h3 class="text-warning text-center">Оставьте заявку и мы перезвоним в течении 15 минут</h3>

<form action="mail.php" form name="myForm" method="POST" >
              <div class="form-group  ">

                <input type="text" class="form-control " aria-describedby="validatedInputGroupPrepend" onsubmit="return validateForm()"
                  required id="" name="user_name" placeholder="Ваше имя">


              </div>

              <div class="form-group ">

                <input type="text" class="form-control " aria-describedby="validatedInputGroupPrepend"
                  required id="" name="user_phone" placeholder="Ваш номер телефона">

              </div>
              <button type="submit" class="bottom_color1 mx-auto btn btn-warning">Отправить
                заявку</button>

              <div class="prava text-center  text-muted">
                <p>Нажимая на кнопку "Отправить" Вы соглашаетесь с политикой конфиденциальности</p>
              </div>
            </form>
                  
                  
                </div>

      </div>
    </div>
  </div>
</div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>
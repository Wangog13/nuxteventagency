<template>
    <div>

<div class="zayavka">
    <div class="forma_ten">
    <h1> Оставьте заявку и мы вам перезвоним</h1>
      <form action="fio.php" form name="myForm" method="POST" onsubmit="return validateForm()" class="form_fio">
           <div class="formas">
    <div class="row">
        
      <div class="col-md-6">
          <div class="form-group  ">
 <label for="exampleFormControlInput1" class="form-label text-warning">Ваше имя</label>

                <input type="text" class="form-control " aria-describedby="validatedInputGroupPrepend"
                  required id="" name="user_name" placeholder="Ваше имя"></div>
      </div>
      <div class="col-md-6">
          <div class="form-group is-invalid">
 <label for="exampleFormControlInput1" class="form-label text-warning">Ваш номер телефона</label>

                <input type="text" class="form-control " aria-describedby="validatedInputGroupPrepend"
                  required id="" name="user_phone" placeholder="Ваш номер телефона"></div>
      </div>
      
    </div>
</div>
  <div class="formas">
       <div class="row">
      <div class="col-md-6">
          <div class="form-group ">
 <label for="exampleFormControlInput1" class="form-label text-warning">Планируемая дата</label>
                <input type="date" class="form-control " aria-describedby="validatedInputGroupPrepend"
                  required id="" name="user_date" placeholder="Выберите дату" ></div>
      </div>
      <div class="col-md-6">
          <div class="form-group is-invalid">
 <label for="exampleFormControlInput1" class="form-label text-warning">Количество гостей</label>

                <input type="text" class="form-control " aria-describedby="validatedInputGroupPrepend"
                  required id="" name="subject" placeholder="Количество человек"></div>
      </div>
  
    </div>
  </div>
  <button type="submit" onsubmit="ym(65946430,'reachGoal','submit')" class="bottom_color1  mx-auto btn btn-warning">Забронировать</button>


 </form>
</div></div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>
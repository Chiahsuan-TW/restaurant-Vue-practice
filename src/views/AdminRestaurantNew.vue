<template>
 <div class="container py-5">
    <!-- 餐廳表單 AdminRestaurantForm -->
    <h1>餐廳表單 </h1>
    <AdminRestaurantForm @click-submit="handleSubmit"/>
  </div>
</template>


<script>
import AdminRestaurantForm from "./../components/AdminRestaurantForm"

export default {
  components: {
    AdminRestaurantForm,
  },
  methods: {
    handleSubmit(formData) {
      console.log('parant recevie signal')
      for(let [name, value] of formData.entries()) {
        console.log(name, ":" ,value)
      }
      // for(let item of formData.entries()) {
      //   //[name, value]
      //   console.log(item)
      // }
    }
  }
}
</script>

<template>
 <div class="container py-5">
    <!-- 餐廳表單 AdminRestaurantForm -->
    <h1>餐廳表單 </h1>
    <AdminRestaurantForm @click-submit="handleSubmit" :is-processing="isProcessing" />
  </div>
</template>


<script>
import AdminRestaurantForm from "./../components/AdminRestaurantForm"
import adminAPI from './../apis/admin'
import { Toast } from './../utils/helpers'

export default {
  components: {
    AdminRestaurantForm,
  },
  data() {
    return {
      isProcessing: false,
    }
  },
  methods: {
    async handleSubmit(formData) {
      try {
        const { data } = await adminAPI.restaurants.create(formData)
        console.log(data.status)
        this.isProcessing = true

        if(data.status !== 'success') {
          throw new Error(data.message)
        }
        this.$route.push({name: 'admin-restaurants'})
      } catch(error) {
        this.isProcessing = false
        Toast.fire({
          icon: 'error',
          title: '無法新增餐廳，請稍後再試'
        })
      }
    }
  }
}
</script>

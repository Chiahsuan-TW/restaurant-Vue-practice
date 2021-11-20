<template>
 <div class="container py-5">
    <!-- 餐廳表單 AdminRestaurantForm -->
    <h1>餐廳表單-編輯模式 </h1>
    <AdminRestaurantForm @click-submit="handleSubmit" :initial-restaurant="restaurant" :is-processing="isProcessing"/>
  </div>
</template>

<script>
import AdminRestaurantForm from "./../components/AdminRestaurantForm"
import adminAPI from './../apis/admin'
import { Toast } from './../utils/helpers'


export default {
  name: "AdminRestaurantEdit",
  data() {
    return {
      restaurant: {
        id: -1,
        name: '',
        categoryId: '',
        tel: '',
        address: '',
        description: '',
        image: '',
        openingHours: ''
      },
      categories: [],
      isProcessing: false
    }
  },
  components: {
    AdminRestaurantForm,
  },
  methods: {
    async handleSubmit(formData) {
      try {
        this.isProcessing = true
        const { id } = this.$route.params
        const { data } = await adminAPI.restaurants.update(id, formData)
        if(data.status !== 'success') {
          throw new Error(data.message)
        }

        this.$router.push({name: 'admin-restaurants'})

      } catch(error) {
        this.isProcessing = false
        Toast.fire({
          icon: 'error',
          title: '無法修改資料，請稍後再試'
        })
      }
    },
    async fetchRestaurant(restaurantId) {
      try {
        const { data } = await adminAPI.restaurants.getDetail(restaurantId)
        const { id, name, CategoryId: categoryId, tel, address, description, image, opening_hours: openingHours} = data.restaurant
        this.restaurant = {
        id,
        name,
        categoryId,
        tel,
        address,
        description,
        image,
        openingHours
      }
      } catch(error) {
        console.log(error)
      }
    },
  },
  created() {
      const { id } = this.$route.params
      this.fetchRestaurant(id)
  },
  beforeRouteUpdate(to, from, next) {
    const { id } = to.params
    this.fetchRestaurant(id)
    next()
  }
}
</script>

<template>
 <div class="container py-5">
    <!-- 餐廳表單 AdminRestaurantForm -->
    <h1>餐廳表單-編輯模式 </h1>
    <AdminRestaurantForm @click-submit="handleSubmit" :initial-restaurant="restaurant"/>
  </div>
</template>

<script>
import AdminRestaurantForm from "./../components/AdminRestaurantForm"

const dummyData = {
  'restaurant': {
    'id': 1,
    'name': 'Laurence Reynolds',
    'tel': '1-657-067-3756 x9782',
    'address': '187 Kirlin Squares',
    'opening_hours': '08:00',
    'description': 'sit est mollitia',
    'image': 'https://loremflickr.com/320/240/restaurant,food/?random=91.29816290184887',
    'viewCounts': 1,
    'createdAt': '2019-07-30T16:24:55.432Z',
    'updatedAt': '2019-07-30T17:26:43.260Z',
    'CategoryId': 3,
    'Category': {
      'id': 3,
      'name': '義大利料理',
      'createdAt': '2019-07-30T16:24:55.429Z',
      'updatedAt': '2019-07-30T16:24:55.429Z'
    }
  }
}

export default {
  name: "AdminRestaurantEdit",
  data() {
    return {
      restaurant: {
        name: '',
        categoryId: '',
        tel: '',
        address: '',
        description: '',
        image: '',
        openingHours: ''
      },
      categories: [],
    }
  },
  components: {
    AdminRestaurantForm,
  },
  methods: {
    handleSubmit() {
      for(let [name, value] of FormData.entries()) {
        console.log(name, ":" ,value)
      }
    },
    fetchRestaurant(restaurantId) {
      const restaurant = dummyData.restaurant
      const { name, CategoryId: categoryId, tel, address, description, image, opening_hours: openingHours} = restaurant
      this.restaurant = {
        ...restaurant,
        name,
        categoryId,
        tel,
        address,
        description,
        image,
        openingHours
      }
    },
  },
  created() {
      const { id } = this.$route.params
      this.fetchRestaurant(id)
    }
}
</script>

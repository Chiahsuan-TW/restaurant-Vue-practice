<template>
  <div class="container py-5">
    <!-- 後台導覽頁籤 AdminNav -->
    <AdminNav />
    <router-link
      :to="{name: 'admin-restaurants-new'}"
      class="btn btn-primary mb-4"
    >
      New Restaurant
    </router-link>

    <!-- 後台餐廳列表 AdminRestaurantsTable -->
    <AdminRestaurantTable />
  </div>
</template>

<script>
import AdminNav from './../components/AdminNav'
import AdminRestaurantTable from './../components/AdminRestaurantTable'

export default {
  components: {
    AdminNav,
    AdminRestaurantTable,
  }
}
</script>

<template>
  <div class="container py-5">
    <NavTabs />
    <!-- 餐廳類別標籤 RestaurantsNavPills -->
    <RestaurantsNavPills :categories="categories" />

    <div class="row">
      <!-- 餐廳卡片 RestaurantCard-->
      <RestaurantCard 
      v-for="restaurant in restaurants" 
      :key="restaurant.id" 
      :initial-restaurant="restaurant"/>
    </div>

    <!-- 分頁標籤 RestaurantPagination -->
    <RestaurantsPagination 
    v-if="totalPage.length > 1"
    :category-id="categoryId"
    :current-page="currentPage"
    :total-page="totalPage"
    :previous-page="previousPage"
    :next-page="nextPage"
    />
  </div>
</template>

<script>
import NavTabs from './../components/NavTabs'
import RestaurantCard from './../components/RestaurantCard'
import RestaurantsNavPills from './../components/RestaurantsNavPills'
import RestaurantsPagination from './../components/RestaurantsPagination'
import restaurantsAPI from './../apis/restaurants'
import { Toast } from './../utils/helpers'


export default {
  components: {
    NavTabs,
    RestaurantCard,
    RestaurantsNavPills,
    RestaurantsPagination,
  },
  data() {
    return {
      restaurants : [],
      categories: [],
      categoryId: -1,
      currentPage: 1,
      totalPage: [],
      previousPage: -1,
      nextPage: -1
    }
  },
  methods : {
    async fetchRestaurants({queryPage, queryCategoryId}) {
      try {
          const response = await restaurantsAPI.getRestaurants({
            page: queryPage,
            categoryId: queryCategoryId
          })
            console.log(response)
            const { restaurants, categories, categoryId, page, totalPage, prev, next} = response.data
            this.restaurants = restaurants
            this.categories = categories
            this.categoryId = categoryId
            this.currentPage = page
            this.totalPage = totalPage
            this.previousPage = prev
            this.nextPage = next
      } 
      catch(error) {
        console.log(error)
        Toast.fire({
            icon: 'error',
            title: '無法取得餐廳資料'
        })
      }
    }
  },
  created() {
    const { page = "", categoryId = "" } = this.$route.query
    this.fetchRestaurants({queryPage: page, queryCategoryId: categoryId})
  },
  beforeRouteUpdate(to, from, next) {
      const { page = "", categoryId = "" } = to.query 
      this.fetchRestaurants({
      queryPage: page,
      queryCategoryId: categoryId
    })
      next()
  }
}
</script>

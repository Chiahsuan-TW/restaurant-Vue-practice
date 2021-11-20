<template>
  <div class="container py-5">
    <NavTabs/>
    <h1 class="mt-5">
      人氣餐廳
    </h1>
    <TopRestaurantCard 
    v-for="topRestaurant in topRestaurants" 
    :key="topRestaurant.id" 
    :top-restaurant="topRestaurant"
    @add-favorite="addToFavorite"
    @delete-favorite="deleteFromFavorite"
    />


  </div>
</template>



<script>
import NavTabs from './../components/NavTabs'
import TopRestaurantCard from './../components/TopRestaurantCard'
import restaurantsAPI from './../apis/restaurants'
import usersAPI from './../apis/users'


export default {
  components: {
    NavTabs,
    TopRestaurantCard
  },
  data() {
    return {
      topRestaurants: []
    }
  },
  methods: {
    async fetchTopRestaurants() {
      try {
        const { data } = await restaurantsAPI.getTopRestaurants()
        this.topRestaurants = data.restaurants
        console.log('DATA', this.topRestaurants)

      } catch(error) {
        console.log(error)
      }
    },
    async addToFavorite(restaurantId) {
        try {
            console.log(restaurantId)
            const { data } = await usersAPI.addFavorite(restaurantId)
            if (data.status !== 'success') {
                throw new Error(data.message)
            }
            
            this.topRestaurants = this.topRestaurants.map(restaurant => {
                if (restaurant.id === restaurantId) {
                    return {
                        ...restaurant,
                        isFavorited: true,
                    }
                } else {
                    return restaurant
                }
            })

        } catch(error) {
            console.log(error)
        }
    }, 
    async deleteFromFavorite(restaurantId) {
        try {
            console.log(restaurantId)
            const { data } = await usersAPI.deleteFavorite(restaurantId)
            if (data.status !== 'success') {
                throw new Error(data.message)
            }
            
            this.topRestaurants = this.topRestaurants.map(restaurant => {
                if (restaurant.id === restaurantId) {
                    return {
                        ...restaurant,
                        isFavorited: false,
                    }
                } else {
                    return restaurant
                }
            })

        } catch(error) {
            console.log(error)
        }
    }
  },
  created() {
    this.fetchTopRestaurants();
  }
}
</script>
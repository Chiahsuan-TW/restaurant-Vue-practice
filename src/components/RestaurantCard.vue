<template>
  <div class="col-md-6 col-lg-4">
    <div class="card mb-4">
      <img
        class="card-img-top"
        :src="restaurant.image"
        alt="Card image cap"
        width="286px"
        height="180px"
      >
      <div class="card-body">
        <p class="card-text title-wrap">
          <router-link :to="{ name: 'restaurant', params: {id: restaurant.id}}">
            {{ restaurant.name }}
          </router-link>
        </p>
        <span class="badge bg-secondary">{{ restaurant.Category.name}}</span>
        <p class="card-text text-truncate">
          {{ restaurant.description }}
        </p>
      </div>
      <div class="card-footer">
        <button
          @click.stop.prevent="deleteFavorite(restaurant.id)"
          type="button"
          class="btn btn-danger btn-border favorite mr-2"
          v-if="restaurant.isFavorited"
        >
          移除最愛
        </button>
        <button
          @click.stop.prevent="addFavorite(restaurant.id)"
          type="button"
          class="btn btn-primary btn-border favorite mr-2"
          v-else
        >
          加到最愛
        </button>
        <button
          v-if="restaurant.isLiked"
          type="button"
          class="btn btn-danger like mr-2"
          @click.stop.prevent="deleteLike(restaurant.id)"
        >
          Unlike
        </button>
        <button
          v-else
          type="button"
          class="btn btn-primary like mr-2"
          @click.stop.prevent="addLike(restaurant.id)"
        >
          Like
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import usersAPI from './../apis/users'
import { Toast } from './../utils/helpers'

export default {
  name: "RestaurantCard",
  props: {
    initialRestaurant: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      restaurant: this.initialRestaurant
    }
  },
  methods: {
    async addFavorite(restaurantId) {
      try {
        const { data } = await usersAPI.addFavorite(restaurantId)
      
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.restaurant = {
          ...this.restaurant,
          isFavorited: true
        }

      } catch(error) {
        console.log(error)
        Toast.fire({
          icon: 'error',
          title: '無法加到最愛，請稍後再試'
        })
      }
    },
    async deleteFavorite(restaurantId) {
      try {
        const { data } = await usersAPI.deleteFavorite(restaurantId)
      
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.restaurant = {
          ...this.restaurant,
          isFavorited: false
        }

      } catch(error) {
        console.log(error)
        Toast.fire({
          icon: 'error',
          title: '無法移除最愛，請稍後再試'
        })
      }
    },
    async addLike(restaurantId) {
      try {
        const {data} = await usersAPI.addLike(restaurantId)
        
        if(data.status !== 'success') {
          throw new Error(data.message)
        }

        this.restaurant = {
        ...this.restaurant,
        isLiked: true 
      }

      } catch(error) {
        console.log(error)
        Toast.fire({
          icon: 'error',
          title: '無法加入喜歡，請稍後再試'
        })
      }
    },
    async deleteLike(restaurantId) {
      try {
        const {data} = await usersAPI.deleteLike(restaurantId)
        
        if(data.status !== 'success') {
          throw new Error(data.message)
        }

        this.restaurant = {
        ...this.restaurant,
        isLiked: false
      }

      } catch(error) {
        console.log(error)
        Toast.fire({
          icon: 'error',
          title: '無法移除喜歡，請稍後再試'
        })
      }
    },
  }
}
</script>
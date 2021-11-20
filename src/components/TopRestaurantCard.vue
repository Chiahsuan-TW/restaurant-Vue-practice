<template>
  <div
      class="card mb-3"
      style="max-width: 540px;margin: auto;"
    >
      <div class="row no-gutters">
        <div class="col-md-4">
          <router-link :to="{name: 'restaurant', params: {id: topRestaurant.id}}">
            <img
              class="card-img"
              :src="topRestaurant.image"
            >
          </router-link>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">
              {{topRestaurant.name}}
            </h5>
            <span class="badge bg-secondary">收藏數：{{topRestaurant.FavoriteCount}}</span>
            <p class="card-text">
              {{topRestaurant.description}}
            </p>
            <router-link
              :to="{name: 'restaurant', params: {id: topRestaurant.id}}"
              class="btn btn-primary mr-2"
            >Show</router-link>

            <button
              v-if="topRestaurant.isFavorited"
              type="button"
              class="btn btn-danger mr-2"
              @click="deleteFavorite(topRestaurant.id)"
            >
              移除最愛
            </button>
            <button
              v-else
              type="button"
              class="btn btn-primary"
              @click="addFavorite(topRestaurant.id)"
            >
              加到最愛
            </button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "TopRestaurantCard",
  props: {
    topRestaurant: {
      type: Object,
      required: true,
    }
  },
  methods: {
    addFavorite(restaurantId) {
      this.$emit('add-favorite', restaurantId)
    },
    deleteFavorite(restaurantId) {
      this.$emit('delete-favorite', restaurantId)
    }
  }
}
</script>

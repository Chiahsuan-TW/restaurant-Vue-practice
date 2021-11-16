<template>
  <div class="card">
    <div class="card-header">
      <strong>{{favoritedRestaurants.length}}</strong> 收藏的餐廳
    </div>
    <div class="card-body img-layout">
      <div v-for="favoritedRestaurant in favoritedRestaurants" :key="favoritedRestaurant.id" class="img-frame">
        <img :src="favoritedRestaurant.image" alt="restaurant picture">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserFavoritedRestaurantCard",
  props: {
    favoritedRestaurants: {
      type: Array,
      required: true,
    }
  }
}
</script>

<style scoped>
.img-layout {
  display:flex;
  flex-wrap: wrap;
  gap: 5px;
}

.img-frame {
  width: 30px;
  height: 30px;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;;
}
</style>
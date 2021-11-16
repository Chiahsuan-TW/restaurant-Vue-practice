<template>
  <div class="card">
    <div class="card-header">
      <strong>{{comments.length}}</strong> 已評論餐廳
    </div>
    <div class="card-body img-layout">
      <div v-for="comment in comments" :key="comment.id" class="img-frame">
        <img :src="comment.Restaurant.image" alt="restaurant picture">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserCommentsCard",
  props: {
    comments: {
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
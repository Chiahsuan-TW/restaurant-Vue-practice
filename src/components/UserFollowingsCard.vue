<template>
  <div class="card">
    <div class="card-header">
      <strong>{{following.length}}</strong> followings (追蹤者)
    </div>
    <div class="card-body">
      <div class="img-frame d-flex">
        <img v-for="followingPerson in following" :key="followingPerson.id" :src="followingPerson.image" alt="profilePic">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserFollowingsCard",
  props: {
    following: {
      type: Array,
      required: true,
    }
  }
}
</script>

<style scoped>
.img-frame {
  width: 50px;
  height: 50px;
  gap: 10px;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
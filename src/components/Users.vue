<template>
  <div :key="user.id" class="col-3">
    <a href="#">
      <img
        :src="user.image"
        width="140px"
        height="140px"
      >
    </a>
    <h2>{{user.name}}</h2>
    <span class="badge bg-secondary">追蹤人數：{{user.followerCount}}</span>
    <p class="mt-3">
      <button
        v-if="user.isFollowed"
        type="button"
        class="btn btn-danger"
        @click="clickUnfollow(user.id)"
      >
        取消追蹤
      </button>
      <button
        v-else
        type="button"
        class="btn btn-primary"
        @click="clickFollow(user.id)"
      >
        追蹤
      </button>
    </p>
  </div> 
</template>

<script>
export default {
  name: "Users",
  props: {
    initialUser: {
      type: Object,
      required: true,
    }
  },
  data() {
    return {
      user: this.initialUser
    }
  },
  methods: {
    clickFollow(userId) {
      this.$emit('click-follow', userId)
    },
    clickUnfollow(userId) {
      this.$emit('click-unfollow', userId)
    }
  },
}
</script>

<template>
  <div :key="user.id" class="col-3">
    <a href="#">
      <img
        src="http://via.placeholder.com/300x300?text=No+Image"
        width="140px"
        height="140px"
      >
    </a>
    <h2>{{user.name}}</h2>
    <span class="badge bg-secondary">追蹤人數：{{user.FollowerCount}}</span>
    <p class="mt-3">
      <button
        v-if="user.isFollowed"
        type="button"
        class="btn btn-danger"
        @click="removeFollow"
      >
        取消追蹤
      </button>
      <button
        v-else
        type="button"
        class="btn btn-primary"
        @click="addFollow"
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
    addFollow() {
      this.user = {
        ...this.initialUser,
        isFollowed: true
      }
    },
    removeFollow() {
      this.user = {
        ...this.initialUser,
        isFollowed: false
      }
    }
  }
}
</script>

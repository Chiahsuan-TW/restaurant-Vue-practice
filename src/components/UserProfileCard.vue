<template>
  <div class="card mb-3">
  <div class="row no-gutters">
    <div class="col-md-4">
        <img :src="profile.image" width="300px" height="300px">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{{profile.name}}</h5>
        <p class="card-text">
          {{profile.email}}
        </p>
        <ul class="list-unstyled list-inline">
          <li><strong>{{profile.Comments.length}}</strong> 已評論餐廳</li>
          <li><strong>{{profile.FavoritedRestaurants.length}}</strong> 收藏的餐廳</li>
          <li><strong>{{profile.Followings.length}}</strong> followings (追蹤者)</li>
          <li><strong>{{profile.Followers.length}}</strong> followers (追隨者)</li>
        </ul>
        <form action="/following/41" method="POST" style="display: contents;">
          <router-link :to="{name: 'user-edit', params: {id: currentUser.id}}" v-if="currentUser.isAdmin"><button  type="submit" class="btn btn-primary">Edit</button></router-link>
          <div v-else class="follow">
            <button v-if="followed" @click.stop.prevent="unfollow" type="submit" class="btn btn-danger">取消追蹤</button>
            <button v-else @click.stop.prevent="follow" type="submit" class="btn btn-primary">追蹤</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
const dummyUser = {
  currentUser: {
    id: 1,
    name: '管理者',
    email: 'root@example.com',
    image: 'https://i.pravatar.cc/300',
    isAdmin: true
  },
  isAuthenticated: true
}

export default {
  name: "UserProfileCard",
  props: {
    profile: {
      type: Object,
      required: true,
    },
    isFollowed: {
      type: Boolean,
      required: true,
    }
  },
  data() {
    return {
      currentUser: dummyUser.currentUser,
      followed: this.isFollowed
    }
  },
  methods: {
    follow() {
      this.followed = true
    },
    unfollow() {
      this.followed = false
    },
  }
}
</script>

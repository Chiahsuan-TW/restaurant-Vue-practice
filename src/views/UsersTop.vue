<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      美食達人
    </h1>
    <div class="row text-center">
      <Users v-for="user in users" :key="user.id" :initial-user="user" 
        @click-follow="addFollow"
        @click-unfollow="removeFollow"
      />
    </div>
  </div>
</template>

<script>
import NavTabs from './../components/NavTabs'
import Users from './../components/Users'
import usersAPI from './../apis/users'
import { apiHelper, Toast } from './../utils/helpers'


export default {
  components: {
    NavTabs,
    Users,
  },
  data() {
    return {
      users: []
    }
  },
  methods: {
    async fetchUsers() {
      try {
          const { data } = await usersAPI.getTopUsers()
          this.users = data.users.map(user => {
            return {
                id: user.id,
                name: user.name,
                image: user.image,
                followerCount: user.FollowerCount,
                isFollowed: user.isFollowed
            }
          })

      } catch(error) {
        console.log(error)
      }
    },
    async addFollow(userId) {
      console.log(userId)
      try {
          const { data } = await usersAPI.addFollowing(userId)

          if(data.status !== 'success') {
            throw new Error(data.message)
          }
          this.users = this.users.map(user => {
            if (user.id === userId) {
              return {
                ...user,
                isFollowed: true,
                followerCount: user.followerCount + 1
              }
            } else {
              return user
            }
          })
          
      } catch(error) {
        console.log(error)
      }
    },
    async removeFollow(userId) {
      try {
          const { data } = await usersAPI.deleteFollowing(userId)

          if(data.status !== 'success') {
            throw new Error(data.message)
          }

          this.users = this.users.map(user => {
            if (user.id === userId) {
              return {
                ...user,
                isFollowed: false,
                followerCount: user.followerCount - 1
              }
            } else {
              return user
            }
          })
          
      } catch(error) {
        console.log(error)
      }
    }
  },
  created() {
    this.fetchUsers();
  },
}
</script>
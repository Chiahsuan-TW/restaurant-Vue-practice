<template>
  <div class="container py-5">
    <!-- AdminNav Component -->
    <AdminNav />

    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">
            #
          </th>
          <th scope="col">
            Email
          </th>
          <th scope="col">
            Role
          </th>
          <th
            scope="col"
            width="140"
          >
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <th scope="row">
            {{user.id}}
          </th>
          <td>{{user.email}}</td>
          <td>{{user.isAdmin ? 'admin': 'user'}}</td>
          <td v-if="user.isAdmin">
            <button
              type="button"
              class="btn btn-link"
              @click.stop.prevent="toggleUserRole(user.id)"
            >
              set as user
            </button>
          </td>
          <td v-else>
            <button
              type="button"
              class="btn btn-link"
              @click.stop.prevent = "toggleUserRole(user.id)"
            >
              set as admin
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNav from './../components/AdminNav.vue'

const dummyUser = {
    "users": [
        {
            "id": 1,
            "name": "root",
            "email": "root@example.com",
            "password": "$2a$10$PVIaTClmkkc8SVcwPE..wekXjDz.H9KCuLnJjoN2tE.QmcAGpFQxu",
            "isAdmin": true,
            "image": null,
            "createdAt": "2021-11-18T08:12:35.000Z",
            "updatedAt": "2021-11-18T08:12:35.000Z"
        },
        {
            "id": 2,
            "name": "user1",
            "email": "user1@example.com",
            "password": "$2a$10$swaE5HDgmpqqXkKtfqvi3u1YWJHkmphcuNSwXWbZ1wU5U26M2lpD.",
            "isAdmin": false,
            "image": null,
            "createdAt": "2021-11-18T08:12:35.000Z",
            "updatedAt": "2021-11-18T08:12:35.000Z"
        },
        {
            "id": 3,
            "name": "user2",
            "email": "user2@example.com",
            "password": "$2a$10$Z2Px/IQNhbaG1EyMfm1ksO.n.LUqBHeJnvH8eqAuH3LzudG0M1SYO",
            "isAdmin": false,
            "image": null,
            "createdAt": "2021-11-18T08:12:35.000Z",
            "updatedAt": "2021-11-18T08:12:35.000Z"
        }
    ]
}

export default {
  components: {
    AdminNav
  },
  data() {
    return {
      users: []
    }
  },
  methods: {
    fetchUsers() {
      this.users = dummyUser.users
    },
    toggleUserRole(userId) {
      this.users = this.users.map( user => {
        if(user.id === userId) {
          return {
            ...this.users,
            isAdmin: !user.isAdmin
          }
        } else {
          return user
        }
      })
    }
  },
  created() {
    this.fetchUsers()
  }
}
</script>

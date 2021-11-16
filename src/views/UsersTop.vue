<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      美食達人
    </h1>
    <div class="row text-center">
      <Users v-for="user in users" :key="user.id" :initial-user="user" />
    </div>
  </div>
</template>

<script>
import NavTabs from './../components/NavTabs'
import Users from './../components/Users'

const dummyData = {
    "users": [
        {
            "id": 41,
            "name": "sss",
            "email": "sss@www.v",
            "password": "$2a$10$n.P5rlX7tHdxbMvoe/Dr.uTRV.tNcYXScKUUOcGd5DmnoDD8JPI4e",
            "isAdmin": false,
            "image": null,
            "createdAt": "2021-11-04T02:57:13.000Z",
            "updatedAt": "2021-11-04T02:57:13.000Z",
            "Followers": [
                {
                    "id": 1,
                    "name": "root",
                    "email": "root@example.com",
                    "password": "$2a$10$hWARc0RhdL/93XckpRCfdOerrvS7Ye.iZ0e0LkYV8PVfZy/xDWRNW",
                    "isAdmin": false,
                    "image": null,
                    "createdAt": "2021-10-19T09:35:54.000Z",
                    "updatedAt": "2021-10-27T05:23:52.000Z",
                    "Followship": {
                        "followerId": 1,
                        "followingId": 41,
                        "createdAt": "2021-11-11T10:51:15.000Z",
                        "updatedAt": "2021-11-11T10:51:15.000Z"
                    }
                },
                {
                    "id": 2,
                    "name": "user1",
                    "email": "user1@example.com",
                    "password": "$2a$10$Amu86uI4I7RyT/UGdzHISufp/HqN6u6680DeGDNz.q1gpgPxuKW7i",
                    "isAdmin": false,
                    "image": null,
                    "createdAt": "2021-10-19T09:35:54.000Z",
                    "updatedAt": "2021-10-19T09:35:54.000Z",
                    "Followship": {
                        "followerId": 2,
                        "followingId": 41,
                        "createdAt": "2021-11-14T03:53:25.000Z",
                        "updatedAt": "2021-11-14T03:53:25.000Z"
                    }
                }
            ],
            "FollowerCount": 2,
            "isFollowed": true
        },
        {
            "id": 3,
            "name": "user2",
            "email": "user2@example.com",
            "password": "$2a$10$RDuM0nSTb8e5OJergUBAeOecTeGBe.Sr8xWreYzsJsONzZzOvwkDq",
            "isAdmin": false,
            "image": null,
            "createdAt": "2021-10-19T09:35:54.000Z",
            "updatedAt": "2021-10-19T09:35:54.000Z",
            "Followers": [
                {
                    "id": 2,
                    "name": "user1",
                    "email": "user1@example.com",
                    "password": "$2a$10$Amu86uI4I7RyT/UGdzHISufp/HqN6u6680DeGDNz.q1gpgPxuKW7i",
                    "isAdmin": false,
                    "image": null,
                    "createdAt": "2021-10-19T09:35:54.000Z",
                    "updatedAt": "2021-10-19T09:35:54.000Z",
                    "Followship": {
                        "followerId": 2,
                        "followingId": 3,
                        "createdAt": "2021-11-13T11:36:55.000Z",
                        "updatedAt": "2021-11-13T11:36:55.000Z"
                    }
                }
            ],
            "FollowerCount": 1,
            "isFollowed": false
        },
        {
            "id": 1,
            "name": "root",
            "email": "root@example.com",
            "password": "$2a$10$hWARc0RhdL/93XckpRCfdOerrvS7Ye.iZ0e0LkYV8PVfZy/xDWRNW",
            "isAdmin": false,
            "image": null,
            "createdAt": "2021-10-19T09:35:54.000Z",
            "updatedAt": "2021-10-27T05:23:52.000Z",
            "Followers": [],
            "FollowerCount": 0,
            "isFollowed": false
        },
        {
            "id": 2,
            "name": "user1",
            "email": "user1@example.com",
            "password": "$2a$10$Amu86uI4I7RyT/UGdzHISufp/HqN6u6680DeGDNz.q1gpgPxuKW7i",
            "isAdmin": false,
            "image": null,
            "createdAt": "2021-10-19T09:35:54.000Z",
            "updatedAt": "2021-10-19T09:35:54.000Z",
            "Followers": [],
            "FollowerCount": 0,
            "isFollowed": false
        },
        {
            "id": 11,
            "name": "hello",
            "email": "hello@world.com",
            "password": "$2a$10$NkNjEPVzlLY9FoAqXWHX4.VUZ4baBILjQeZNHxRwCjGf.S7x53Jk6",
            "isAdmin": false,
            "image": null,
            "createdAt": "2021-10-24T12:05:35.000Z",
            "updatedAt": "2021-10-24T12:05:35.000Z",
            "Followers": [],
            "FollowerCount": 0,
            "isFollowed": false
        },
        {
            "id": 21,
            "name": "123123",
            "email": "lllxz@outlook.com",
            "password": "$2a$10$tpRNfK/rKPZLM514hUUjKOznSa48cKzF5KlAdEINlRQtAEzXHFOZC",
            "isAdmin": false,
            "image": null,
            "createdAt": "2021-11-02T12:20:39.000Z",
            "updatedAt": "2021-11-02T12:20:39.000Z",
            "Followers": [],
            "FollowerCount": 0,
            "isFollowed": false
        },
        {
            "id": 31,
            "name": "Aaaa",
            "email": "aaa@aaa.com",
            "password": "$2a$10$TTBWrEWYfkYw3PXfAyJPy.MwScb7qXwfwvnBk4ZmxkNMWGiaqJaM6",
            "isAdmin": false,
            "image": null,
            "createdAt": "2021-11-02T17:45:46.000Z",
            "updatedAt": "2021-11-02T17:45:46.000Z",
            "Followers": [],
            "FollowerCount": 0,
            "isFollowed": false
        }
    ]
}

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
    fetchUsers() {
      this.users = dummyData.users
    }
  },
  created() {
    this.fetchUsers();
  }
}
</script>
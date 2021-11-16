<template>
  <div class="container py-5">
    <div>
      <h1>{{restaurant.name}}</h1>
      <span class="badge badge-secondary mt-1 mb-3">
        {{restaurant.Category.name}}
      </span>
    </div>

    <hr>

    <ul>
      <li>評論數： {{restaurant.Comments.length}}</li>
      <li>瀏覽次數： {{restaurant.viewCounts}}</li>
    </ul>

    <button
      type="button"
      class="btn btn-link"
      @click="$router.back()"
    >
      回上一頁
    </button>
  </div>
</template>

<script>

const dummyData = {
    "restaurant": {
        "id": 1,
        "name": "Myrtice Rempel",
        "tel": "1-236-483-5268 x15726",
        "address": "73826 Witting Hollow",
        "opening_hours": "08:00",
        "description": "Enim velit dolores in.",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=34.28664124510033",
        "viewCounts": 71,
        "createdAt": "2021-10-19T09:35:54.000Z",
        "updatedAt": "2021-11-15T05:41:15.000Z",
        "CategoryId": 1,
        "Category": {
            "id": 1,
            "name": "中式料理",
            "createdAt": "2021-10-19T09:35:54.000Z",
            "updatedAt": "2021-10-19T09:35:54.000Z"
        },
        "Comments": [
            {
                "id": 261,
                "text": "123",
                "UserId": 1,
                "RestaurantId": 1,
                "createdAt": "2021-11-13T13:57:58.000Z",
                "updatedAt": "2021-11-13T13:57:58.000Z",
                "User": {
                    "id": 1,
                    "name": "root",
                    "email": "root@example.com",
                    "password": "$2a$10$hWARc0RhdL/93XckpRCfdOerrvS7Ye.iZ0e0LkYV8PVfZy/xDWRNW",
                    "isAdmin": false,
                    "image": null,
                    "createdAt": "2021-10-19T09:35:54.000Z",
                    "updatedAt": "2021-10-27T05:23:52.000Z"
                }
            },
            {
                "id": 251,
                "text": "asd",
                "UserId": 2,
                "RestaurantId": 1,
                "createdAt": "2021-11-13T11:53:25.000Z",
                "updatedAt": "2021-11-13T11:53:25.000Z",
                "User": {
                    "id": 2,
                    "name": "user1",
                    "email": "user1@example.com",
                    "password": "$2a$10$Amu86uI4I7RyT/UGdzHISufp/HqN6u6680DeGDNz.q1gpgPxuKW7i",
                    "isAdmin": false,
                    "image": null,
                    "createdAt": "2021-10-19T09:35:54.000Z",
                    "updatedAt": "2021-10-19T09:35:54.000Z"
                }
            },
            {
                "id": 1,
                "text": "Voluptatem cupiditate officia ipsam aut architecto omnis perspiciatis expedita explicabo.",
                "UserId": 3,
                "RestaurantId": 1,
                "createdAt": "2021-10-19T09:35:54.000Z",
                "updatedAt": "2021-10-19T09:35:54.000Z",
                "User": {
                    "id": 3,
                    "name": "user2",
                    "email": "user2@example.com",
                    "password": "$2a$10$RDuM0nSTb8e5OJergUBAeOecTeGBe.Sr8xWreYzsJsONzZzOvwkDq",
                    "isAdmin": false,
                    "image": null,
                    "createdAt": "2021-10-19T09:35:54.000Z",
                    "updatedAt": "2021-10-19T09:35:54.000Z"
                }
            },
            {
                "id": 101,
                "text": "Sed nihil esse assumenda aperiam exercitationem.",
                "UserId": 3,
                "RestaurantId": 1,
                "createdAt": "2021-10-19T09:35:54.000Z",
                "updatedAt": "2021-10-19T09:35:54.000Z",
                "User": {
                    "id": 3,
                    "name": "user2",
                    "email": "user2@example.com",
                    "password": "$2a$10$RDuM0nSTb8e5OJergUBAeOecTeGBe.Sr8xWreYzsJsONzZzOvwkDq",
                    "isAdmin": false,
                    "image": null,
                    "createdAt": "2021-10-19T09:35:54.000Z",
                    "updatedAt": "2021-10-19T09:35:54.000Z"
                }
            }
        ]
    }
}

export default {
  data() {
    return {
      restaurant: {}
    }
  },
  methods: {
    fetchDashboard() {
      this.restaurant = dummyData.restaurant
    }
  },
  created() {
    this.fetchDashboard()
  }
}  
</script>

<template>
  <div class="container py-5">
    <h1>餐廳描述頁</h1>
    <!-- 餐廳資訊頁 RestaurantDetail -->
    <RestaurantDetail :initial-restaurant="restaurant" />

    <hr>
    <!-- 餐廳評論 RestaurantComments -->
    <RestaurantComments :restaurant-comment="restaurantComment" @click-delete-comment="deleteComment"/>
    <!-- 新增評論 CreateComment -->
    <CreateComment :restaurant-id="restaurant.id" @handle-submit="addComment"/>
    
  </div>
</template>


<script>
import RestaurantDetail from "./../components/RestaurantDetail"
import RestaurantComments from "./../components/RestaurantComments"
import CreateComment from "./../components/CreateComment"

const dummyData = {
    "restaurant": {
        "id": 1,
        "name": "Myrtice Rempel",
        "tel": "1-236-483-5268 x15726",
        "address": "73826 Witting Hollow",
        "opening_hours": "08:00",
        "description": "Enim velit dolores in.",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=34.28664124510033",
        "viewCounts": 67,
        "createdAt": "2021-10-19T09:35:54.000Z",
        "updatedAt": "2021-11-14T12:11:48.432Z",
        "CategoryId": 1,
        "Category": {
            "id": 1,
            "name": "中式料理",
            "createdAt": "2021-10-19T09:35:54.000Z",
            "updatedAt": "2021-10-19T09:35:54.000Z"
        },
        "FavoritedUsers": [
            {
                "id": 1,
                "name": "root",
                "email": "root@example.com",
                "password": "$2a$10$hWARc0RhdL/93XckpRCfdOerrvS7Ye.iZ0e0LkYV8PVfZy/xDWRNW",
                "isAdmin": false,
                "image": null,
                "createdAt": "2021-10-19T09:35:54.000Z",
                "updatedAt": "2021-10-27T05:23:52.000Z",
                "Favorite": {
                    "UserId": 1,
                    "RestaurantId": 1,
                    "createdAt": "2021-11-02T09:11:45.000Z",
                    "updatedAt": "2021-11-02T09:11:45.000Z"
                }
            }
        ],
        "LikedUsers": [
            {
                "id": 1,
                "name": "root",
                "email": "root@example.com",
                "password": "$2a$10$hWARc0RhdL/93XckpRCfdOerrvS7Ye.iZ0e0LkYV8PVfZy/xDWRNW",
                "isAdmin": false,
                "image": null,
                "createdAt": "2021-10-19T09:35:54.000Z",
                "updatedAt": "2021-10-27T05:23:52.000Z",
                "Like": {
                    "UserId": 1,
                    "RestaurantId": 1,
                    "createdAt": "2021-11-10T10:36:15.000Z",
                    "updatedAt": "2021-11-10T10:36:15.000Z"
                }
            }
        ],
        "Comments": [
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
            }
        ]
    },
    "isFavorited": true,
    "isLiked": true
}

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
  components: {
    RestaurantDetail,
    RestaurantComments,
    CreateComment,
  },
  data() {
    return {
      restaurant: {
        id: -1,
        name: '',
        categoryName: '',
        image: '',
        openingHours: '',
        tel: '',
        address: '',
        description: '',
        isFavorited: false,
        isLiked: false
      },
      restaurantComment: [],
      currentUser: dummyUser.currentUser
    }
  },
  methods: {
    fetchRestaurant(restaurantId) {
      console.log('fetchRestaurant id:', restaurantId )

      const {restaurant, isFavorited, isLiked} = dummyData
      const { id, 
              name, 
              Category, 
              image, 
              opening_hours: openingHours, 
              tel, 
              address, 
              description,
              Comments} = restaurant

      this.restaurant = {
        id,
        name,
        categoryName: Category ? Category.name: "未分類",
        image,
        openingHours,
        tel,
        address,
        description,
        isFavorited,
        isLiked,
      }
      
      this.restaurantComment = Comments
    },
    deleteComment(commentID) {
      this.restaurantComment = this.restaurantComment.filter(comment => comment.id !== commentID)
    },
    addComment(payload) {
      const {id, text, restaurantId} = payload

      this.restaurantComment.push({
        id,
        text, 
        RestaurantId: restaurantId,
        createdAt: new Date(),
        User: {
          id: this.currentUser.id,
          name: this.currentUser.name
        }
      })
    },


  },
  created() {
    const { id }  = this.$route.params
    this.fetchRestaurant(id)
  }
}
</script>

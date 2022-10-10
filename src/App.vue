<template>
  <div class="container">
    <Search></Search>
    <List></List>
  </div>
</template>

<script>
import Search from "./components/Search.vue";
import List from "./components/List.vue";
// import axios from "axios";
export default {
  name: "App",
  components: {Search, List},
  methods: {
    // getStudent() {
    //   axios.get("http://localhost:8080/api/students").then(
    //     (response) => {
    //       console.log("请求成功了", response.data);
    //     },
    //     (error) => {
    //       console.log("请求失败了", error.message);
    //     }
    //   );
    // },
  },
};
</script>


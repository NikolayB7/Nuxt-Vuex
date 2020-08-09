<template>
  <section class="container">
    <div>
      <div class="users">
        <h1>Users</h1>
        <div class="users-wrap" v-for="index in users" :key="index.id">
          <div></div>
          <div>{{index.name}}</div>
          <div>{{index.email}}</div>
          <div>{{index.address.street}}</div>
          <div>{{index.website}}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.users-wrap {
  padding: 15px;
  margin-bottom: 15px;
  border: 1px solid #c1c1c1;
}
</style>

<script>
export default {
  async fetch({ store }) {
    if (store.getters["moduleName/USERS"].length === 0) {
      await store.dispatch("moduleName/fetch");
    }
  },
  computed: {
    users() {
      return this.$store.getters["moduleName/USERS"];
    }
  },
  components: {}
};
</script>



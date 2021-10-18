<template>
  <v-container>
    <v-divider class="my-5"></v-divider>
    <div v-for="categoria in categories" :key="categoria.id">
      <v-btn
        :to="{
          name: 'category',
          params: { category: categoria.slug },
          query: { id: categoria.id },
        }"
        class="my-1"
        >{{ categoria.name }}</v-btn
      >
    </div>
    <!-- <ApolloQuery :query="query">
      <template slot-scope="{ result: { data, loading, error } }">
        <div v-if="loading">Cargando datos ...</div>
        <div v-else-if="error">{{ error }}</div>
        <div v-else>
          <div v-for="categoria in data.categories" :key="categoria.id">
            <v-btn 
            :to="{
              name:'category', 
              params:{category: categoria.slug},
              query:{id:categoria.id}
              }" class="my-1">{{categoria.name}}</v-btn>
          </div>
        </div>
      </template>
    </ApolloQuery> -->

    <v-btn class="primary">primary</v-btn>
    <v-btn class="secondary">secondary</v-btn>
    <v-btn class="accent">accent</v-btn>

    <div class="mt-2">
      <v-btn class="warning">warning</v-btn>
      <v-btn class="error">error</v-btn>
      <v-btn class="success">success</v-btn>
      <v-btn class="info">info</v-btn>
    </div>
  </v-container>
</template>

<script>
// import { categorias } from '../graphql/querys'

export default {
  data() {
    return {
      // query: categorias
    };
  },
  async asyncData(context) {
    const client = context.app.apolloProvider.defaultClient;

    const query = {
      query: require("../graphql/categories.gql"),
    };
    let categories = [];
    await client.query(query).then((data) => {
      console.log(data);
      categories = data.data.categories;
    });

    return { categories };
  },
  // apollo:{
  //   categories:{
  //     query: categorias,
  //     update: data => data.categories
  //   }
  // }
};
</script>

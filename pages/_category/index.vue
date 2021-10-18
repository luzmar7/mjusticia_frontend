<template>
  <div>
    {{ $route.params.category }}
    {{category}}
    <div>
      {{counter}}
      <v-btn @click="callMutation()">
        Mutation
      </v-btn>
       <v-btn @click="callAction()">
        Action
      </v-btn>
    </div>
  </div>
</template>

<script>
import {  category } from '../../graphql/querys';
export default {
  data() {
    return {
      query: category,
    };
  },
    computed:{
    counter(){
      return this.$store.getters.readCounter
    }
  },
  methods: {
    callMutation(){
      this.$store.commit("increment")
    },
    callAction(){
      this.$store.dispatch("increment")
    }
  },
  apollo: {
    category: {
      query: category,
      variables(){
        return {
          id: this.$route.query.id
        }
      }
    },
  },
};
</script>
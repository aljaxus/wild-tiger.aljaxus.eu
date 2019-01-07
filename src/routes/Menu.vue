<template>
  <v-container fluid>
            
            <v-layout
              v-for="food in foods"
              :key="food.id"
              row
              wrap
            >
              <v-flex
                xs12
              >
                <h5>{{food.name}}</h5>
                <p>{{food.description}}</p>
              </v-flex>

              <v-flex 
                xs6 
                sm4 
                md4 
                lg3
                class="pa-2"
                v-for="(meal, id) in food.items"
                :key="id"
              >
                <v-card
                  height="100%"
                  hover
                >
                  <v-img
                    :src="meal.imgUrl != null && meal.imgUrl != '' ? meal.imgUrl : './img/transparent-512px.png'"
                    aspect-ratio="2.75"
                  ></v-img>

                  <v-card-title>
                    <h3 style="font-weight:bold; font-size: 20px;">{{meal.name}}</h3>
                  </v-card-title>
                  <v-card-text>
                    <div>{{meal.description}}</div>
                  </v-card-text>

                  <v-card-actions>
                    <v-btn flat color="orange">Share</v-btn>
                    <v-btn flat color="orange">Explore</v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>

            </v-layout>
  </v-container>
</template>

<script>
  import menu from './../assets/menuarray.js'
  export default {
    data: () => ({
      tree: [],
      foods: menu.foods,
      drinks: menu.drinks
    })
  }
</script>

<style>

</style>

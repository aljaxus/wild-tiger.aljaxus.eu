<template>
     <v-container fluid fill-height>
        <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
                <v-card class="elevation-6">
                    <v-card-text class="text-xs-center">
                        <h3>Menu</h3>
                        <p>
                          <span
                            v-for="food in foods"
                            :key="food.id"
                          >
                            <h5>{{food.name}}</h5>
                            <p>{{food.description}}</p>
                            <span
                              v-for="meal in food.meals"
                              :key="meal.id"
                            >
                              Name:{{ meal.name }}<br>
                              Description:{{ meal.description }}<br>
                              Price:{{ meal.price }}<br>
                              Additions:{{ meal.additions }}<br>
                              <br>
                            </span>
                            <br><br><br><br>
                          </span>
                        </p>
                    </v-card-text>
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

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
        lg2
        xl2
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
            aspect-ratio="1.75"
          >
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 flexbox text-xs-right>
                  <v-btn icon v-if="basket.includes(id)">
                    <v-icon>mdi-check</v-icon>
                  </v-btn>
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>
          <v-card-title>
            <h3 style="font-weight:bold; font-size: 20px;">{{meal.name}}</h3>
          </v-card-title>
          <v-card-text>
            <div>{{meal.description}}</div>
          </v-card-text>
          <v-card-actions align-end>
            <v-btn 
              flat 
              color="green"
              @click="meal.count++"
            >+</v-btn>
            <v-spacer></v-spacer>
            {{meal.count}}
            <v-spacer></v-spacer>
            <v-btn 
              flat
              color="red"
              @click="meal.count--"
            >-</v-btn>
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
      basket: [],
      foods: menu.foods,
      drinks: menu.drinks
    }),
    methods: {
      toggleItemSelection: (el) => {
        if (this.basket.includes(el)) {
          // remove item from array
        } else {
          this.basket.push(el)
        }
      }
    }
  }
</script>

<style>

</style>

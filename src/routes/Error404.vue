<template>
     <v-container fluid fill-height>
        <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
                <v-card class="elevation-12">
                    <v-card-text class="text-xs-center">
                        <h3>{{ $t("error404_title") }}</h3>
                        <p>{{ $t("error404_message") }}</p>
                        <v-btn :to="{name:'home'}" color="error"><v-icon>mdi-arrow-left</v-icon><span>{{ $t("error404_btnTxt") }}</span></v-btn>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
  export default {
    data: () => ({

    })
  }
</script>

<style>

</style>

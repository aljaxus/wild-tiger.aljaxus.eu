<template>
	<v-navigation-drawer
		v-model="drawerState"
		:mini-variant="drawerMini"
		style="min-height:100%"
		:touchless="$vuetify.breakpoint.lgAndUp"
		clipped
		fixed
		app
	>
		<v-list 
			v-if="$vuetify.breakpoint.xsOnly && !drawerMini" 
			class="pa-0"
		>
			<v-list-tile @click.stop="drawerState = !drawerState">
				<v-list-tile-action>
					<v-icon>mdi-backburger</v-icon>
				</v-list-tile-action>
				<v-list-tile-content>
					<v-list-tile-title>{{ $t("close_sidebar") }}</v-list-tile-title>
				</v-list-tile-content>
			</v-list-tile>
			<v-divider light></v-divider>
		</v-list>
		<v-list class="pa-0">
			<v-list-tile
				to="/"
				exact
			>
				<v-list-tile-action>
					<v-icon>mdi-home</v-icon>
				</v-list-tile-action>
				<v-list-tile-content>
					<v-list-tile-title>{{ $t("home") }}</v-list-tile-title>
				</v-list-tile-content>
			</v-list-tile>
			<v-list-tile
				to="/about"
				exact
			>
				<v-list-tile-action>
					<v-icon>mdi-home-city</v-icon>
				</v-list-tile-action>
				<v-list-tile-content>
					<v-list-tile-title>{{ $t("about") }}</v-list-tile-title>
				</v-list-tile-content>
			</v-list-tile>
			<v-list-tile
				to="/menu"
				exact
			>
				<v-list-tile-action>
					<v-icon>mdi-book-open-page-variant</v-icon>
				</v-list-tile-action>
				<v-list-tile-content>
					<v-list-tile-title>{{ $t("menu") }}</v-list-tile-title>
				</v-list-tile-content>
			</v-list-tile>

			<v-list-tile 
				v-if="drawerMini" 
				@click.stop="drawerMini = false"
			>
				<v-list-tile-action>
					<v-icon>mdi-chevron-right</v-icon>
				</v-list-tile-action>
			</v-list-tile>
			<v-list-tile 
				v-if="!drawerMini && $vuetify.breakpoint.lgAndUp"
				@click.stop="drawerMini = true"
			>
				<v-list-tile-action>
					<v-icon>mdi-chevron-left</v-icon>
				</v-list-tile-action>
			</v-list-tile>
		</v-list>
	</v-navigation-drawer>
</template>
<script>
import router from './../../router.js'
import store from './../../store.js'

export default {
	data: () => ({
    router: router,
    store: store,
    mini: false
  }),
  computed: {
    drawerState: {
      get: function () {
        return this.$vuetify.breakpoint.lgAndUp ? true : store.getters.drawerState
      },
      set: function (newValue) {
        store.dispatch('toggleDrawerState', newValue);
      }
    },
    drawerMini: {
      get: function () {
        return this.$vuetify.breakpoint.mdAndDown ? false : store.getters.drawerMini
      },
      set: function (newValue) {
        store.dispatch('toggleDrawerMini', newValue);
      }
    }
  }
}
</script>

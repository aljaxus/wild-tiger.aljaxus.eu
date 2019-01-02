<template>
	<v-toolbar
		app
		fixed
		clipped-left
	>
		<v-toolbar-side-icon @click.stop="openDrawer" v-if="!this.$vuetify.breakpoint.lgAndUp">
			<v-icon>mdi-menu</v-icon>
		</v-toolbar-side-icon>
		<v-toolbar-title>
      <router-link
        to="/"
        exact
      >
        Wild Tiger - Thai restaurant & bar
      </router-link>
    </v-toolbar-title>
		<v-spacer></v-spacer>
	</v-toolbar>
</template>
<script>
import router from './../../router.js'
import store from './../../store.js'

export default {
	data: () => ({
    router: router,
    store: store
	}),
	methods: {
		openDrawer () {
			store.dispatch('toggleDrawerState', true);
		}
	}
}
</script>
<template>
  <v-footer
    height="auto"
    id="footer"
    absolute
    app
    fixed
    clipped-left
  >
    <v-layout justify-center row wrap>
      <v-flex color="grey darken-2" pa-2 text-xs-left white--text xs12 md8 >
        <v-btn
          v-for="link in links"
          v-bind:key="link.id"
          v-bind:color="link.color || 'primary'"
          v-bind:to="link.to"
          style="padding:0;margin:2px 3px;height:24px;min-width:70px;"
          small
          outline
          exact
        >
          {{ link.text }}
        </v-btn>
      </v-flex>
      <v-flex color="grey darken-2" pa-2 text-xs-center text-md-right blue--text xs12 md4 >
        <a
          color="purple accent-1"
          href="https://wildtigerwa.net"
          target="_blank"
          small
          outline
        >
          &copy; {{ new Date().getFullYear() }} - Wild Tiger
        </a>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
		links: [
			{
        text: 'Home',
        to: {name:'home'}
      }
		]
	})
}
</script>

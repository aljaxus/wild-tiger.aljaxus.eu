<template>
  <div>
    <Navbar />
    <Sidebar />
  </div>
</template>

<script>
import Navbar from './Navigation/Navbar'
import Sidebar from './Navigation/Sidebar'
export default {
  components: {
    Navbar, Sidebar
  },
  data () {
    return {
      //
    }
  }
}
</script>
const RouterPlugin = function() {
  this.$router = null
  this.$store = null
}
RouterPlugin.install = function(Vue, router, store) {
  this.$router = router
  this.$store = store
  this.$vue = new Vue()
}

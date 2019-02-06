<template>
    <div class="container">
        <div class="d-flex justify-content-center">
            <pre>
                {{ dataTest }}
            </pre>
            <!-- <button class="m-auto btn btn-primary" @click="startTest()">
                Start test
            </button> -->
        </div>
    </div>
</template>

<script>
  export default {
      name: 'test-info',
      data () {
          return {
              dataTest: []
          }
      },
      methods: {
          startTest () {
              this.$router.push('/')
          }
      },
      mounted () {
          this.dataTest = this.$store.getters.getTest
      }
  }
</script>

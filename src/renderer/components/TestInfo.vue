<template>
    <div class="container">
        <div class="d-flex flex-wrap justify-content-center">            
            <h2>{{ testInfo.name }}</h2>
            <pre>
                {{testData}}
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
              testInfo: {},
              testData: {}
          }
      },
      methods: {
          startTest () {
              this.$router.push('/')
          }
      },
      mounted () {
          this.testData = JSON.parse(this.$store.getters.getTest)
          this.testInfo = this.$store.getters.getTestInfo
          console.log(this.testData)
      }
  }
</script>

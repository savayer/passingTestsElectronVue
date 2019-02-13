<template>
    <div class="wrapper">
        <top-header />
        <div class="container">
            <div class="d-flex vh-custom flex-column text-center">    
                <div class="m-auto">
                    <div class="col">
                        <h2>{{ testInfo.name }}</h2>
                    </div>
                    <div class="col">
                        <h4> Count questions:                         
                            {{ testData.length }} </h4>
                    </div>
                    <div class="col">
                        <h4>Time test passing:                         
                        {{ testData.length * 30 / 60 }}m</h4>
                    </div>
                    <div class="col">
                        <br>
                        <button class="m-auto btn btn-primary" @click="startTest()">
                            Start test                            
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import TopHeader from './TopHeader.vue'

  export default {
      name: 'test-info',
      components: {
          TopHeader
      },
      data () {
          return {
              testInfo: {},
              testData: {}
          }
      },
      methods: {
          startTest () {
              this.$router.push('/passing-test/1')
          }
      },
      mounted () {
          this.testData = this.$store.getters.getTest
          this.testInfo = this.$store.getters.getTestInfo
      }
  }
</script>

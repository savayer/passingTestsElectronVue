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
                        <h4> <!-- Count questions:  -->
                        ספירת שאלות:
                            {{ testData.length }} </h4>
                    </div>
                    <div class="col">
                        <h4><!-- Time test passing: --> 
                        בדיקת זמן הבדיקה:
                        {{ testData.length * 30 / 60 }}m</h4>
                    </div>
                    <div class="col">
                        <hr>
                        <div class="form-group">
                            <input type="text" :class="!studentNameField ? 'error' : ''" placeholder="שם פרטי *" class="form-control" name="name" v-model="studentName">
                        </div>
                        <div class="form-group">
                            <input type="text" :class="!passportDataField ? 'error' : ''" placeholder="נתוני דרכון *" class="form-control" v-model="passportData">
                        </div>                        
                    </div>
                    <div class="col">
                        <br>
                        <button class="m-auto btn btn-primary" @click="startTest()">
                            <!-- Start test -->
                            התחל בדיקה
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
              testData: {},
              studentName: '',
              studentNameField: true,
              passportData: '',
              passportDataField: true
          }
      },
      methods: {
          startTest () {
              if (this.studentName === '') {
                  this.studentNameField = false
                  return
              } else {
                  this.studentNameField = true
              }
              if (this.passportData === '') {
                  this.passportDataField = false
                  return
              } else {
                  this.studentNameField = true
              }
              this.$store.dispatch('setName', this.studentName)
              this.$store.dispatch('setPassport', this.passportData)
              this.$router.push('/passing-test/1')
          }
      },
      mounted () {
          this.testData = this.$store.getters.getTest
          this.testInfo = this.$store.getters.getTestInfo
      }
  }
</script>

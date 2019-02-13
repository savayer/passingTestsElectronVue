<template>
    <div class="container">
        <div class="d-flex vh100">
            <div class="m-auto">
                <h3 class="text-right">
                    <b>
                    סיימנו, כל הכבוד ! <br>
                    תוצאה שלך היא:
                    </b>
                </h3>

                <div class="circle">
                    <div class="m-auto">
                        {{ result }}/{{ countQuestion }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'result-test',
    data () {
        return {
            result: 0,
            countQuestion: 0
        }
    },
    mounted () {
        this.result = this.$store.getters.getResult
        this.countQuestion = this.$store.getters.getTest.length
    }
  }
</script>


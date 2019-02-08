<template>
    <div class="container">
        <div class="d-flex vh100">
            <div class="m-auto">
                <h1>Your result</h1>

                <div class="circle">
                    <div class="m-auto">
                        {{ result }}
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
            result: 0
        }
    },
    mounted () {
        this.result = this.$store.getters.getResult
    }
  }
</script>


<template>
    <div class="wrapper">
        <div class="area vh-full">
            <div class="area-item answer">
                <div class="container m-auto">
                    <h4 class="text-center"><b>Answer:</b></h4>
                    <div class="answers-radio text-right">
                        <label class="radio-container" v-for="(answer, index) in testData.answers" :key="index">
                            {{ answer.answer }}
                            <input type="radio" :value="answer" v-model="selectedAnswer">
                            <span class="checkmark"></span>
                        </label>
                    </div>
                    <br>
                    <div class="text-right">
                        <button class="btn btn-primary" @click="nextQuestion()">
                            Next question
                        </button>                        
                    </div>
                </div>
            </div>
            <div class="area-item question">
                <div class="container text-center m-auto timer-relative">
                    <div class="timer">
                        {{ timeLeftString }}
                    </div>
                    <h4><b>Question {{ numberQuestion }}:</b></h4>
                    <h4>{{ testData.question }} </h4>
                </div>
            </div>
        </div>        
    </div>
</template>

<script>
  export default {
    name: 'passing-test',
    props: {
        numberQuestion: {
            type: String,
            required: true
        }
    },
    data () {
        return {
            testData: {},
            selectedAnswer: {},
            timer: 30,
            timeLeftString: '00:30',
            interval: ''
        }
    },
    methods: {
        renderData () {
            let testData = this.$store.getters.getTest
            this.testData = testData[this.numberQuestion - 1]
            if (!this.testData) {
                this.$router.push('/result-test')
                return
            }
            this.timer = 31
            this.interval = setInterval(() => {
                this.timerCount()
            }, 1000)
        },
        timerCount () {
            this.timer--
            this.timeLeftString = `00:${this.timer < 10 ? '0' + this.timer : this.timer}`
            if (this.timer === 0) this.nextQuestion()
        },
        nextQuestion () {
            this.checkAnswer()
            clearInterval(this.interval)
            // let nextNumberQuestion = this.$store.getters.getCurrentQuestion + 1
            // this.$store.dispatch('setCurrentQuestion', nextNumberQuestion)
            this.$router.push(`/passing-test/${+this.numberQuestion + 1}`)
        },
        checkAnswer () {
            if (this.selectedAnswer.right) this.$store.dispatch('incrementResult')
        }
    },
    beforeRouteUpdate (to) {
        this.numberQuestion = to.params.numberQuestion
        this.renderData()
    },
    mounted () {
        this.renderData()
    }
  }
</script>


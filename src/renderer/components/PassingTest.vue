<template>
    <div class="wrapper">
        <top-header />
        <div class="area vh-custom">
            <div class="area-item answer">
                <div class="container m-auto">
                    <h4 class="text-center"><b><!-- Answer: -->תשובה:</b></h4>
                    <div class="answers-radio text-right">
                        <div v-if="show">
                            <label class="radio-container" v-for="(answer, index) in testData.answers" :key="index">
                                {{ answer.answer }}
                                <input type="radio" :value="answer" v-model="selectedAnswer"  @change="nextQuestion()">
                                <span class="checkmark"></span>
                            </label>
                        </div>
                        <div v-else>
                            <p>...</p>
                        </div>
                    </div>
                    <br>
                    <div class="text-right">
                        <span style="color: #f75733;font-style: italic;padding-right: 55px">
                        * אנא תסמן תשובה נכונה
                        </span>
                    </div>
                </div>
            </div>
            <div class="area-item question">
                <div class="container text-center m-auto timer-relative">
                    <div class="timer">
                        {{ timeLeftString }}
                    </div>
                    <h4><b><!-- Question -->שאלה {{ numberQuestion }}:</b></h4>
                    <h4>{{ testData.question }} </h4>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import TopHeader from './TopHeader.vue'
  export default {
    name: 'passing-test',
    components: {
        TopHeader
    },
    data () {
        return {
            show: true,
            numberQuestion: 0,
            testData: {},
            selectedAnswer: {},
            timer: 30,
            timeLeftString: '00:30',
            interval: ''
        }
    },
    methods: {
        renderData () {
            ++this.numberQuestion
            this.initTestData()
            this.startTimer()
        },
        initTestData () {
            this.testData = this.getTestData(this.numberQuestion - 1)
            if (!this.testData) {
                return this.$router.push('/result-test')
            }
        },
        getTestData (index) {
            return this.$store.getters.getTest ? this.$store.getters.getTest[index] : null
        },
        timerCount () {
            this.timer--
            this.timeLeftString = `00:${this.timer < 10 ? '0' + this.timer : this.timer}`
            if (this.timer === 0) this.nextQuestion()
        },
        nextQuestion () {
            this.checkAnswer()
            this.stopTimer()
            this.renderData()
        },
        checkAnswer () {
            console.log(this.selectedAnswer.right)
            if (this.selectedAnswer.right) {
                this.$store.dispatch('incrementResult')
            }
        },
        stopTimer () {
            clearInterval(this.interval)
        },
        startTimer () {
            this.refreshAnswersCases()
            this.timeLeftString = '00:30'
            this.timer = 30
            this.interval = setInterval(() => {
                this.timerCount()
            }, 1000)
        },
        refreshAnswersCases () {
            this.hideAnswersCases()
            this.showAnswersCases()
        },
        hideAnswersCases () {
            this.show = false
            this.selectedAnswer = {}
        },
        showAnswersCases () {
            setTimeout(() => {
                this.show = true
            }, 1)
        }
    },
    mounted () {
        this.renderData()
    }
  }
</script>
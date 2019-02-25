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
                                <br>
                <div class="text-center" style="margin-top: 30px;">
                    <button class="btn btn-block btn-lg btn-secondary" @click="exportResult()">
                        <b>Export</b>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import CryptoJS from 'crypto-js'
  import fs from 'fs'
  const remote = require('electron').remote
  const {dialog} = require('electron').remote

  export default {
    name: 'result-test',
    data () {
        return {
            result: 0,
            countQuestion: 0,
            export: {}
        }
    },
    methods: {
        exportResult () {
            this.export['result'] = this.result + '/' + this.countQuestion
            dialog.showSaveDialog({
                filters: [{ name: 'Text', extensions: ['txt'] }],
                defaultPath: `./${this.export.studentName}-${this.export.testName}.txt`
                },
                (fileName) => {
                    let ciphertext = CryptoJS.AES.encrypt(JSON.stringify(this.export), '?Nd2DOKHgAKK|@$')
                    let content = ciphertext

                    if (fileName === undefined) {
                        console.log('You didn\'t save the file')
                        return
                    }
                    fs.writeFile(fileName, content, (err) => {
                        if (err) {
                            alert('An error ocurred creating the file ' + err.message)
                            return
                        }

                        alert('Successful saved')
                        this.closeWindow()
                    })
                }
            )
        },
        closeWindow () {
            let w = remote.getCurrentWindow()
            w.close()
        }
    },
    mounted () {
        this.result = this.$store.getters.getResult
        this.countQuestion = this.$store.getters.getTest.length
        this.export['testName'] = this.$store.getters.getTestInfo.name
        this.export['studentName'] = this.$store.getters.getName
        this.export['passport'] = this.$store.getters.getPassportData
    }
  }
</script>


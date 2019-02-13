<template>
    <div class="wrapper">
        <top-header />
        <div class="container">
            <div class="d-flex vh-custom">
                <div class="m-auto text-center">
                    <h2>
                        <!-- You need upload a test that teacher send you. -->
                        אתה צריך להעלות מבחן כי המורה לשלוח לך.
                    </h2>
                    <button class="btn btn-success" @click="uploadFile()">
                        <!-- Upload test -->
                        טען בדיקה
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import CryptoJS from 'crypto-js'
  import fs from 'fs'
  import TopHeader from './TopHeader.vue'
  const {dialog} = require('electron').remote

  export default {
    name: 'main-page',
    components: {
        TopHeader
    },
    data () {
        return {
            decryptData: ''
        }
    },
    methods: {
        uploadFile () {
            dialog.showOpenDialog({
                    properties: ['openFile'],
                    filters: [
                        {
                            name: 'Text files',
                            extensions: ['txt']
                        }
                    ]
                },
                (fileName) => {
                if (fileName === undefined) {
                    console.log('No file selected')
                    return
                }
                fs.readFile(fileName[0], 'utf-8', (err, data) => {
                    if (err) {
                        alert('An error ocurred reading the file :' + err.message)
                        return
                    }
                    this.ecnryptedData = data
                    this.decrypt(this.ecnryptedData)
                })
            })
        },
        decrypt (data) {
            let bytes = CryptoJS.AES.decrypt(data.toString(), '?Nd2DOKHgAKK|@$')
            let decryptData = bytes.toString(CryptoJS.enc.Utf8)
            let testInformation = {}
            this.decryptData = JSON.parse(decryptData)
            testInformation.date = this.decryptData.date
            testInformation.id = this.decryptData.id
            testInformation.name = this.decryptData.name
            this.$store.dispatch('setTest', JSON.parse(this.decryptData.encrypt))
            this.$store.dispatch('setTestInfo', testInformation)
            this.$router.push('/test-info')
        }
    }
  }
</script>

<style lang="scss" src="./../assets/scss/styles.scss"></style>


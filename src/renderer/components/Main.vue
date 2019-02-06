<template>
    <div class="container">
        <div class="d-flex vh100">
            <button class="btn btn-success m-auto" @click="uploadFile()">
                Upload test
            </button>

        </div>
    </div>
</template>

<script>
  import CryptoJS from 'crypto-js'
  import fs from 'fs'
  const {dialog} = require('electron').remote

  export default {
    name: 'main',
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
            this.$store.dispatch('setTest', this.decryptData.encrypt)
            this.$store.dispatch('setTestInfo', testInformation)
            this.$router.push('/test-info')
        }
    }
  }
</script>

<style lang="scss" src="./../assets/scss/styles.scss"></style>


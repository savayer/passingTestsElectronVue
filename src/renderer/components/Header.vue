<template>
    <header class="header">
        <!-- <div class="item power">
            <img src="../assets/power.png" class="img" @click="closeWindow()">
        </div> -->
        <!-- <div class="item profile">
            <span>
            שלום שלמה הפטקר
            </span>
            <span>
            <img src="../assets/profile.png">          
            </span>
        </div> -->
        <div class="item logo ml-auto">
            <router-link to="/">
                <img src="../assets/logo.png" class="logo" alt="">
            </router-link>
        </div>
    </header>
</template>

<script>
  export default {
      name: 'header'
  }
</script>

<style lang="scss" scoped>
    .header {
        height: 60px;
        width: 100%;
        box-shadow: 0 2px 24px rgba(0, 0, 0, 0.14);
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
        align-items: center;
        position: relative;
        .item.power {
            flex-basis: 60px;
            background: #208eef;
            display: flex;
            cursor: pointer;
            transition: .3s;
            padding: 0;
            align-self: normal;
            &:hover {
                background: #126fc0;
            }
        }
        .item {
            padding: 5px 0;
        }
        .img {    
            margin: auto;
            width: 18px;    
        }
        .menu {
            margin-right: 20px;
            ul {
                list-style: none;            
                margin: 0;
                padding: 0;            
            }
            li {
                display: inline-block;
                margin: 0 15px;
                min-width: 120px;
                color: #898989;
                text-align: center;
                &.active {
                    color: #208eef;
                    font-weight: 600;
                    line-height: 3.5;
                    border-bottom: 3px solid #208eef
                }         
            }
            a {
                cursor: pointer;   
                &:hover {
                    text-decoration: none;
                    color: #000
                }         
            }
        }
        .profile {
            color: #898989;
            span:first-child {
                margin-left: 7px;
            }
        }
        .logo {
            width: 110px;        
            margin-right: 10px;
        }
        .profile {
            margin-right: auto;
            margin-left: 20px;
        }
    }
</style>

<style lang="less">

body {
    background-color: #2E363F!important;
}

.login {
    width: 360px;
    height: 342px;
    margin: 7% auto;
    padding: 40px 0;
    border-top: 1px solid #3f4954;
    border-bottom: 1px solid #3f4954;
    & > h2 {
        font-weight: 700;
        color: #fff;
        margin-bottom: 25px;
        text-align: center;
    }
    & > .login-content {
        width: 100%;
        height: 343px;
        padding: 20px;
        & > div {
            padding-bottom: 40px;
            & > button {
                float: right;
            }
        }
    }
}
.form-item{
    padding: 0!important;
    label{
      display: none!important;
    }
}

</style>

<template lang="html">

<div class="login">
    <h2>PizzaAdmin</h2>
    <pz-form ref="form" class="login-content">
        <pz-formitem :validate="rules.username">
            <pzinput placeholder="用户名" v-model="form.name"></pzinput>
        </pz-formitem>
        <pz-formitem :validate="rules.password">
            <pzinput placeholder="密码" v-model="form.password" type="password" @keydown.enter.native="submitHandle"></pzinput>
        </pz-formitem>
        <pz-formitem>
            <pzbutton btn="success" @click="submitHandle">登录</pzbutton>
        </pz-formitem>
    </pz-form>
</div>

</template>

<script>

import pzbutton from 'pzvue-button';
import pzinput from 'pzvue-input';
import pzform from 'pzvue-form';
import pzformitem from 'pzvue-formitem';
import tools from 'pizzatools';

export default {
    data() {
            return {
                form: {
                    name: "",
                    password: ""
                },
                rules: {
                    username: {
                        min: 1,
                        max: 48,
                        message: "请填写1-48位的用户名"
                    },
                    password: {
                        min: 6,
                        max: 12,
                        message: "请填写6-12位的密码"
                    }
                }
            }
        },
        components: {
            pzbutton,
            pzinput,
            "pz-form": pzform,
            "pz-formitem": pzformitem
        },
        methods: {
          submitHandle: async function() {
             let check = await this.$refs.form.validate();
             if(check) {
                let doc = await tools.httpAgent('/admin/login/login','post', this.form);
                if(doc.state) {
                  document.location.href="/admin";
                }
             } else{
               this.$layer.msg("帐号或者密码错误");
             }
          }
        }
}

</script>

<style lang="css">
</style>

<template lang="html">

<div id="main">
    <div class="menu">
        <a href="javascript:history.back();">返回</a>
    </div>
    <pz-form ref="form">
        <pz-formitem label="标题" :validate="rules.name">
            <pzinput v-model="form.name" placeholder="请输入活动名称"></pzinput>
        </pz-formitem>
        <pz-formitem label="节点" :validate="rules.area">
            <pzinput v-model="form.area" placeholder="请输入活动区域"></pzinput>
        </pz-formitem>
        <pz-formitem label="标题图片" :validate="rules.time">
            <pzinput v-model="form.time"></pzinput>
        </pz-formitem>
        <pz-formitem label="文章连接" :validate="rules.ps">
            <pzinput v-model="form.ps"></pzinput>
        </pz-formitem>
        <pz-formitem label="文章来源" :validate="rules.xs">
            <pzinput v-model="form.xs"></pzinput>
        </pz-formitem>
        <pz-formitem label="描述" :validate="rules.xs">
            <pzinput v-model="form.xs"></pzinput>
        </pz-formitem>
        <pz-formitem label="正文1" :validate="rules.xs">
            <textarea id="content" v-model="form.xs"></textarea>
        </pz-formitem>
        <pz-formitem label="标签" :validate="rules.xs">
            <pzinput v-model="form.xs"></pzinput>
        </pz-formitem>
        <pz-formitem label="附加" :validate="rules.xs">
            <pzselect v-model="form.xs"></pzselect>
            <pzselect v-model="form.xs"></pzselect>
        </pz-formitem>
        <pz-formitem>
            <pzbutton @click.native="submitHandle">提交</pzbutton>
        </pz-formitem>
    </pz-form>
    <br>
    <br> result11d: {{form}}
</div>

</template>

<script>

import validate from 'validate';
import pzbutton from 'pzvue-button';
import pzselect from 'pzvue-select';
import pzinput from 'pzvue-input';
import pzform from 'pzvue-form';
import pzformitem from 'pzvue-formitem';
import kindeditor from "kindeditor";

export default {
    data() {
            return {
                form: {
                    title: '',
                    nodeid: "",
                    time: "",
                    xz: [],
                    zy: "",
                    ps: "",
                    xs: ""
                },
                rules: {
                    name: {
                        min: 1,
                        max: 20,
                        message: "请填写1-20位的名称"
                    },
                    area: {
                        min: 1,
                        max: 30,
                        message: "请填写1-20位的名称"
                    },
                    time: {
                        required: false,
                        reg: 'time',
                        message: "请填写1-20位的名称,非必填"
                    },
                    xz: {
                        type: 'array',
                        min: 3,
                        max: 4,
                        message: "请至少选择一项"
                    },
                    ps: {
                        min: 1,
                        max: 20,
                        message: "请填写1-20位的名称"
                    },
                    xs: {
                        min: 1,
                        max: 20,
                        message: "请填写1-20位的名称"
                    },
                }
            }
        },
        components: {
            pzbutton,
            pzinput,
            "pz-form": pzform,
            "pz-formitem": pzformitem,
        },
        methods: {
            submitHandle: async function() {
                console.log(kd);
                let ischeck = await this.$refs.form.validate();
                if (ischeck) { //通过验证

                    //TODO: submit or ajax

                } else {
                    console.log("数据验证失败");
                    let id = this.$layer.alert("this is demo", {
                        title: "警告"
                    }, function() {
                        this.$layer.close(id);
                    });
                }
            }
        },
        mounted() {
            window.editor = KindEditor.create('#content', {
                uploadJson: '/admin/upfile/local',
                allowFileManager: false
            });
        },
}

</script>

<style lang="css">



</style>

<template lang="html">

<div id="main">
    <div class="menu">
        <a href="javascript:history.back();">返回</a>
    </div>
    <pz-form ref="form">
        <pz-formitem label="标题" :validate="rules.title">
            <pzinput v-model="form.title" placeholder="请输入活文章标题"></pzinput>
        </pz-formitem>
        <pz-formitem label="节点">
            <pzselect :options="nodeOptions" :default="nodeDefault" :change="nodeChange"></pzselect>
        </pz-formitem>
        <pz-formitem label="标题图片" :validate="rules.time">
            <pzinput v-model="form.timg" id="timg" style="width:700px;"></pzinput>
            <pzbutton id="timgup">上传</pzbutton>
        </pz-formitem>
        <pz-formitem label="文章连接" :validate="rules.link">
            <pzinput v-model="form.link"></pzinput>
        </pz-formitem>
        <pz-formitem label="文章来源" :validate="rules.source">
            <pzinput v-model="form.source"></pzinput>
        </pz-formitem>
        <pz-formitem label="描述" :validate="rules.brief">
            <textarea v-model="form.brief" style="height:100px;"></textarea>
        </pz-formitem>
        <pz-formitem label="正文" :validate="rules.content">
            <textarea id="content" v-model="form.content" style="height:500px;"></textarea>
        </pz-formitem>
        <pz-formitem label="标签" :validate="rules.tags">
            <pzinput v-model="form.tags"></pzinput>
        </pz-formitem>
        <pz-formitem label="附加" :validate="rules.xs">
            <pzselect :options="passOption" :change="passChange" :default="this.form.pass"></pzselect>
            <pzselect :options="recoOption" :change="recoChange" :default="this.form.reco"></pzselect>
        </pz-formitem>
        <pz-formitem>
            <pzbutton @click.native="submitHandle">提交</pzbutton>
        </pz-formitem>
    </pz-form>
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
import tools from 'pizzatools';

export default {
    data() {
            return {
                form: {
                    title: '',
                    nodeid: 0,
                    timg: "",
                    link: "",
                    source: "",
                    brief: "",
                    content: "",
                    tags: "",
                    pass: 1,
                    reco: 1
                },
                nodeOptions: [{
                    text: '不限',
                    value: 0
                }],
                nodeDefault: 0,
                passOption: [{
                    text: '审核',
                    value: 1
                }, {
                    text: '未审核',
                    value: 0
                }],
                recoOption: [{
                    text: '不推荐',
                    value: 0
                }, {
                    text: '1级推荐',
                    value: 1
                }],
                rules: {
                    title: {
                        min: 1,
                        max: 48,
                        message: "请填写1-48位的标题"
                    },
                    timg: {
                        required: false,
                        min: 1,
                        max: 30,
                        message: "题图须在1-100个字符之间"
                    },
                    link: {
                        required: false,
                        min: 8,
                        max: 150,
                        message: "请填写8-150位的名称,非必填"
                    },
                    source: {
                        required: false,
                        min: 1,
                        max: 30,
                        message: "请输入文章来源"
                    },
                    breif: {
                        required: false,
                        min: 1,
                        max: 300,
                        message: "请填写1-20位的名称"
                    },
                    tags: {
                        required: false,
                        min: 1,
                        max: 30,
                        message: "请填写1-20位的名称"
                    },
                }
            }
        },
        components: {
            pzbutton,
            pzinput,
            pzselect,
            "pz-form": pzform,
            "pz-formitem": pzformitem,
        },
        methods: {
            submitHandle: async function() {
                let ischeck = await this.$refs.form.validate();
                if (ischeck || true) { //通过验证
                    let id = this.$route.params.id;
                    let op = id ? "update" : "create";
                    this.form.content = escape(editor.html());
                    await tools.httpAgent("/admin/article/" + op, "post", this.form);
                } else {
                    console.log("数据验证失败");
                    let id = this.$layer.alert("this is demo", {
                        title: "警告"
                    });
                }
            },
            nodeChange: function(val) {
                this.form.nodeid = val;
            },
            passChange: function(val) {
                this.form.nodeid = val;
            },
            recoChange: function(val) {
                this.form.nodeid = val;
            },
        },
        async mounted() {
            window.editor = KindEditor.create('#content', {
                uploadJson: '/admin/upfile/local',
                allowFileManager: false
            });
            KindEditor('#timgup').click(function() {
                editor.loadPlugin('image', function() {
                    editor.plugin.imageDialog({
                        imageUrl: KindEditor('#timg').val(),
                        clickFn: function(url, title, width, height, border, align) {
                            KindEditor('#timg').val(url);
                            editor.hideDialog();
                        }
                    });
                });
            });
            //获取node
            let nodes = await tools.httpAgent("/admin/tree/pageall", "post");
            let nodesArray = [];
            for (let i = 0; i < nodes.msg.length; i++) {
                nodesArray.push({
                    text: nodes.msg[i].name,
                    value: nodes.msg[i].id,
                });
            }
            this.nodeOptions = nodesArray;
            //获取article
            let id = this.$route.params.id;
            if (id) {
                let article = await tools.httpAgent("/admin/article/get", "post", {
                    id: id
                });
                this.form = article.msg;
                this.nodeDefault = article.msg.nodeid;
                editor.html(article.msg.content);
            }
        },
}

</script>

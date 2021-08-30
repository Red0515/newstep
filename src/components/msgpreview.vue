<template>
<div class="msg-preview">
    <div class="arrow"></div>
    <ul>
        <li @click="navToMsg">私信</li>
        <li>回帖</li>
        <li>点赞</li>
    </ul>
</div>
</template>

<script>
export default {
    name: 'MsgPreview',
    methods: {
        navToMsg () {
            console.log("NavToMsg");
        }
    }
}
</script>

<style lang="less" scoped>
    .msg-preview {
        position: absolute;
        width: 64px;
        margin-top: 13px;
        left: -22px;
        align-items: center;
        border-radius: 4px;
        background-color: rgb(150, 150, 150);
        ul {
            height: 82px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
        } 
    }
    .arrow {
        top: -10px;
        margin: -12px 25px 0 25px;    
        width: 0;
        height: 0;
        border-width: 4px 7px 8px;
        border-style: solid;
        border-color: transparent transparent #808080;
    }
</style>
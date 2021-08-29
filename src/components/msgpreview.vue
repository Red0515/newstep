<template>
<div class="msg-preview">
    <div class="arrow"></div>
    <ul>
        <li>私信</li>
        <li>回帖</li>
        <li>点赞</li>
    </ul>
</div>
</template>

<script>
export default {
    name: 'MsgPreview'
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
        width: 12px;
        height: 12px;
        top: -10px;
        margin: -12px 25px 0 25px;
        background-color: black;
    }
</style>
<template>
    <div class="discuss-list">
        <div class="discuss-header"></div>
        <div class="item-container">
            <DiscussListItem
                :type="question"
                title="Cần giúp đỡ về thuộc tính flex?"
                authorName="Nguyễn Văn Mạnh"
                :totalResponse="130"
            ></DiscussListItem>
            <DiscussListItem
                type="discuss"
                title="Cần giúp đỡ về thuộc tính flex?"
                authorName="Nguyễn Văn Mạnh"
                :totalResponse="130"
            ></DiscussListItem>
            <DiscussListItem
                type="share"
                title="Cần giúp đỡ về thuộc tính flex?"
                authorName="Nguyễn Văn Mạnh"
                :totalResponse="130"
            ></DiscussListItem>
            <DiscussListItem
                type="question"
                title="Cần giúp đỡ về thuộc tính flex?"
                authorName="Nguyễn Văn Mạnh"
                :totalResponse="130"
            ></DiscussListItem>

            <DiscussListItem
                type="question"
                title="Cần giúp đỡ về thuộc tính flex?"
                authorName="Nguyễn Văn Mạnh"
                :totalResponse="130"
            ></DiscussListItem>
            <DiscussListItem
                type="question"
                title="Cần giúp đỡ về thuộc tính flex?"
                authorName="Nguyễn Văn Mạnh"
                :totalResponse="130"
            ></DiscussListItem>
            <DiscussListItem
                type="question"
                title="Cần giúp đỡ về thuộc tính flex?"
                authorName="Nguyễn Văn Mạnh"
                :totalResponse="130"
            ></DiscussListItem>
            <DiscussListItem
                type="question"
                title="Cần giúp đỡ về thuộc tính flex?"
                authorName="Nguyễn Văn Mạnh"
                :totalResponse="130"
            ></DiscussListItem>
            <DiscussListItem
                type="question"
                title="Cần giúp đỡ về thuộc tính flex?"
                authorName="Nguyễn Văn Mạnh"
                :totalResponse="130"
            ></DiscussListItem>
        </div>
        <DiscussResponseDetail hidden />
    </div>
</template>
<script>
export default {
    name: "DiscussList",
    props: {},
    data() {
        return {};
    },
    methods: {},
    created() {},
    computed: {},
};
</script>
<style scoped>
.discuss-list {
    background-color: #fff;
    border-radius: 4px;
    width: 100%;
    height: 100%;
    padding-left: 22px;
}

.discuss-header {
}

.discuss-list .item {
    border-bottom: 2px solid #eeeff1;
}

.discuss-list .item:last-child {
    border-bottom: none;
}

.item-container {
    height: 100%;
    overflow: auto;
    padding-right: 22px;
}
</style>

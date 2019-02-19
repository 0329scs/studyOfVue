<template>
    <div class="clearAllContainer">
        <span class="clearAllBtn" @click="clearTodo">Clear All</span>
    </div>
</template>

<script>
export default {
    methods: {
        clearTodo() {
            this.$emit('removeAll');
        }
    },
}
</script>

<style scoped>
    .clearAllContainer {
        width: 8.5rem;
        height: 50px;
        margin: 0 auto;
        line-height: 50px;
        background-color: #fff;
        border-radius: 5px;
    }
    .clearAllBtn {
        display: block;
        color: #e20303
    }
</style>
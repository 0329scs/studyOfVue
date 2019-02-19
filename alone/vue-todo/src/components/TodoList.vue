<template>
    <section>
        <transition-group name="list" tag="ul">
            <li v-for="(todoItem, index) in propsdata" :key="todoItem" class="shadow">
                <i class="checkBtn fas fa-check" aria-hidden="ture"></i>
                {{ todoItem }}
                <span class="removeBtn" type="button" @click="removeTodo(todoItem, index)">
                    <i class="far fa-trash-alt" aria-hidden="true"></i>
                </span>
            </li>
        </transition-group>
    </section>
</template>

<script>
export default {
    props: ['propsdata'],
    methods: {
        removeTodo(todoItem, index) {
            this.$emit('removeTodo', todoItem, index);
        }
    },
}
</script>

<style scoped>
    ul {
        padding-left: 0;
        margin-top: 0;
        text-align: center;
        list-style-type: none;
    }
    .list-enter-active,
    .list-leave-active {
        transition: all 1s;
    }
    .list-enter,
    .list-leave-to {
        opacity: 0;
        transform: translateY(30px);
    }
    li {
        display: flex;
        height: 50px;
        margin: 0.5rem 0;
        padding: 0 0.9rem;
        background-color: #fff;
        border-radius: 5px;
        line-height: 50px;
        min-height: 50px;
    }
    .checkBtn {
        margin-right: 5px;
        color: #62acde;
        line-height: 45px;
    }
    .removeBtn {
        margin-left: auto;
        color: #de4343;
    }
</style>
<!-- eslint-disable vue/multi-word-component-names -->
<!--eslint-disable-next-line vue/multi-word-component-names-->
<!-- eslint-disable vue/valid-template-root -->
<script setup>
import { defineProps, defineEmits } from 'vue';
defineProps(['show'])
defineEmits(['toggle'])
</script>
<template>
    <Teleport to="body">
        <div class="backdrop" v-if="show" @click="$emit('toggle')"></div>
        <Transition name="modal">
            <dialog class="overlay" open v-if="show">
                <slot></slot>
            </dialog>
        </Transition>

    </Teleport>
</template>
<style scoped>
.backdrop {
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 100000000;
}

.overlay {
    position: fixed;
    z-index: 1000000000000000000000000000000;
    background-color: #fff;
    width: 500px;
    height: 400px;
    left: 20%;
    top: 0;
    color: #000;
    border-radius: 1rem;
}

dialog {
    position: fixed;
    z-index: 1000;
    border: none;
    border-radius: 20px;
    background-color: #fff;
    padding: 1.5rem;
    width: 80%;
    top: 20vh;
    left: 10%;
    /* overflow: hidden; */
}


.modal-enter-from,
.modal-leave-to {
    opacity: 0;
    transform: scale(0.8);
}

.modal-enter-active {
    transition: all 0.4s ease-out;
}

.modal-leave-active {
    transition: all 0.4s ease-in;
}

.modal-enter-to,
.modal-leave-from {
    opacity: 1;
    transform: scale(1);
}

@media screen and (min-width:768px) {
    dialog {
        left: calc(50% - 20rem);
        width: 40rem;
    }
}
</style>
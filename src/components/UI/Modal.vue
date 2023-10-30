<!-- eslint-disable vue/multi-word-component-names -->
<!--eslint-disable-next-line vue/multi-word-component-names-->
<!-- eslint-disable vue/valid-template-root -->
<script setup>
import { defineProps, defineEmits } from 'vue';
import { moneyInNaira } from '../../helpers/money-helper'
defineProps(['show', "itemName", "itemPrice", "instalmentMode", "downPayment", "oneMonth", "twoMonth", "otherMonth"])
defineEmits(['toggle'])

</script>
<template>
    <Teleport to="body">
        <div class="backdrop" v-if="show" @click="$emit('toggle')"></div>
        <Transition name="modal">
            <dialog class="overlay" open v-if="show">
                <header>
                    <h3>WaveBuddget LLC</h3>
                    <h6>
                        Instalment Demo
                    </h6>
                </header>
                <main class="overlay-main">
                    <h5>Item Details</h5>
                    <ul>
                        <li>
                            <div>Entered Item Name</div>
                            <div>{{ itemName }}</div>
                        </li>
                        <li>
                            <div>Entered Item Price</div>
                            <div>{{ itemPrice }}</div>
                        </li>
                        <li>
                            <div>Payment Instalment Plan</div>
                            <div style="text-transform: capitalize;">{{ instalmentMode.replace('-', ' ') }}</div>
                        </li>
                        <li v-if="downPayment">
                            <div>Entered Downpaynment</div>
                            <div>{{ moneyInNaira(downPayment) }}</div>
                        </li>
                    </ul>
                    <h5>Instalment Details</h5>
                    <ul v-if="instalmentMode === 'zero-pay'">
                        <li style="text-transform: capitalize;" v-for="month in ['first', 'second', 'third']" :key="month">
                            <div>{{ month }} month payment </div>
                            <div>{{ moneyInNaira(otherMonth) }}</div>
                        </li>
                    </ul>
                    <ul v-else>
                        <li style="text-transform: capitalize;" v-for="month in ['first', 'second', 'third', 'fourth']"
                            :key="month">
                            <div>{{ month }} month payment </div>
                            <div>{{ moneyInNaira(otherMonth) }}</div>
                        </li>
                    </ul>
                    <h5>Discount on early payment</h5>
                    <ul>
                        <li>
                            <div>On or before 2 month payment</div>
                            <div>{{ moneyInNaira(twoMonth) }}</div>
                        </li>
                        <li>
                            <div>On or before 1 month payment <span>premium</span></div>
                            <div>{{ oneMonth }}</div>
                        </li>

                    </ul>
                </main>
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
    z-index: 100000000000;
    background-color: #fff;
    width: 500px;
    height: 400px;
    left: 20%;
    top: 0;
    color: #000;
    border-radius: 1rem;
    border: none;
    /* padding: 0 1.5rem; */
    width: 80%;
    top: 20vh;
    left: 10%;
}

/* #12617a */
.overlay header {
    text-align: center;
    padding: 0.6rem;
    background: #12617a;
    color: #fff;
    border-radius: 1rem 1rem 0 0;
    letter-spacing: 0.1rem;
}


.overlay-main ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

.overlay-main h5 {
    text-align: center;
    letter-spacing: 0.12rem;
    margin: 0.4rem 0;
    color: #12617a;
}

.overlay-main li {
    display: flex;
    justify-content: space-between;
    padding: 0.1rem 0.4rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    color: #000;
    /* font-weight: 600; */
}

.overlay-main span {
    background-color: red;
    color: #fff;
    padding: 0.2rem;
    border-radius: 0.5rem;
}

.overlay-main li:first-child {
    border-top: 1px solid rgba(0, 0, 0, 0.2);
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

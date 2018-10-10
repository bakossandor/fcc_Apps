<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">
                    <div class="modal-header">
                        <h2>Pomodoro Settings</h2>                   
                    </div>
                    <div class="modal-body">
                        <div class="pomodoroModalActive">
                            <span>active time</span>
                            <span>{{ val }}</span>
                            <i @click="increaseVal" class="fas fa-plus"></i>
                            <i @click="decreaseVal" class="fas fa-minus"></i>
                        </div>
                        <div class="pomodoroModalRest">
                            <span>rest time</span>
                            <span>{{ rest }}</span>
                            <i @click="increaseRest" class="fas fa-plus"></i>
                            <i @click="decreaseRest" class="fas fa-minus"></i>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button @click="apply">apply</button>
                        <button @click="$emit('close')">cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
export default {
    data() {
        return {
           val: this.valParent,
           rest: this.restParent
        }
    },
    props: ["valParent", "restParent"],
    methods: {
        increaseVal() {
            this.val += 1;
        },
        decreaseVal() {
            if (this.val > 1) {
                this.val -= 1
            }
        },
        increaseRest() {
            this.rest += 1;
        },
        decreaseRest() {
            if (this.rest > 1) {
                this.rest -= 1
            }
        },
        apply() {
            this.$emit('apply', [this.val, this.rest])
        }
    }
}
</script>
<style lang="sass" scoped>
.modal-mask
    position: fixed
    z-index: 9998
    top: 0
    left: 0
    width: 100%
    height: 100%
    background-color: rgba(0, 0, 0, .5)
    display: table
    transition: opacity .3s ease

.modal-wrapper
    display: table-cell
    vertical-align: middle

.modal-container
    width: 300px
    margin: 0px auto
    padding: 20px 30px
    background-color: #c5c79b
    border-radius: 2px
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33)
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif

.modal-header
    text-align: center
    h2
        text-shadow: 0px 1px 2px grey
        text-decoration: underline
        text-decoration-color: #94b990
.modal-body
    margin: 20px 0
    font-size: 1.5rem
    text-align: right
    i
        margin-left: 0.3rem
        cursor: pointer
        transition: color 0.3s
    i:hover
        color: #94b990
.modal-footer
    text-align: center
    button
        font-size: 1rem
        background-color: #c5c79b
        border: 2px solid #028e71
        border-radius: 2px
        padding: 0.5rem
        transition: background-color 0.4s
        cursor: pointer
    button:nth-of-type(1)
        margin-right: 0.3rem
    button:nth-of-type(2)
        margin-left: 0.3rem
    button:hover
        background-color: #94b990
.modal-enter
    opacity: 0

.modal-leave-active
    opacity: 0

.modal-enter .modal-container
.modal-leave-active .modal-container
    -webkit-transform: scale(1.1)
    transform: scale(1.1)

.pomodoroModalActive > span:nth-of-type(1), .pomodoroModalRest > span:nth-of-type(1), 
    float: left

</style>

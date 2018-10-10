<template>
	<div @click="markThePlace" class="ticTacToePanel">
        <i v-if="hearts" class="fas fa-heart fa-5x" style="color:#FF6666"></i>
        <i v-if="ex" class="fas fa-times fa-5x" style="color:#C3E8C0"></i>
        <i v-if="circle" class="far fa-circle fa-5x" style="color:#FFCACA"></i>
	</div>
</template>
<script>
import { eventBus } from "./ticTacToeEventBus.js"
export default {
    props: ["panelNumber"],
    created() {
        //listening to a win event and call the change tile function
        eventBus.$on("win", (winTilesArray) => {
            this.changeTheTilesAccordingToWin(winTilesArray)
        })
        //listening to the draw event
        eventBus.$on("draw", () => {
            this.draw()
        })
        //machinePick
        eventBus.$on("machinePick", (fieldNumber) => {
            this.checkAndMarkTheMachinePick(fieldNumber)
        })

        //checking the mode after created if it is one player mode use the machine as well
        if (eventBus.onePlayerMode === true && eventBus.isPlayerIsTheNext === false) {
            const getRandomInt = function (min, max) {
                min = Math.ceil(min)
                max = Math.floor(max)
                return Math.floor(Math.random() * (max - min)) + min
            }
            this.checkAndMarkTheMachinePick(getRandomInt(0, 8))
        }
    },
    destroyed() {
        eventBus.$off("win")
        eventBus.$off("draw")
        eventBus.$off("machinePick")
    },
    data() {
        return {
            ex: false,
            circle: false,
            hearts: false,
        }
    },
    methods: {
        markThePlace() {
            //check if the field is disabled or not
            if (eventBus.fields[this.panelNumber].disabled === false) {
                //change the field according to the current isXTurnIsTheNextStatus
                if (eventBus.isXTurnIsTheNext) {
                    this.ex = true
                    eventBus.fields[this.panelNumber].field = "X"
                } else if (!eventBus.isXTurnIsTheNext) {
                    this.circle = true
                    eventBus.fields[this.panelNumber].field = "O"
                }
                //disabling this field
                eventBus.fields[this.panelNumber].disabled = true
                //changing x to circle
                eventBus.isXTurnIsTheNext = !eventBus.isXTurnIsTheNext

                // changing side if the computer is on
                if (eventBus.onePlayerMode === true) {
                    eventBus.isPlayerIsTheNext = !eventBus.isPlayerIsTheNext
                }

                //emiting an event
                this.$emit("checking", )
            }
        },
        changeTheTilesAccordingToWin(winTilesArray) {
            //checking if need to change the marks to a heart according to the win condition
            this.disableFields()
            if (winTilesArray.indexOf(this.panelNumber) > -1) {
                setTimeout(() => {
                    this.ex = false
                    this.circle = false
                    this.hearts = true
                }, 1000)
            }
            setTimeout(() => {
                this.resetTheGame()
            }, 2000)
        },
        draw() {
            this.disableFields()
            const getRandomInt = function (min, max) {
                min = Math.ceil(min)
                max = Math.floor(max)
                return Math.floor(Math.random() * (max - min)) + min
            }
            setTimeout(() => {
                this.ex = false
                this.circle = false
                this.hearts = true
            }, getRandomInt(200, 1200))
            setTimeout(() => {
                this.resetTheGame()
            }, 2200)
        },
        disableFields() {
            eventBus.fields.forEach((blocks) => {
                blocks.disabled = true
            })
        },
        resetTheGame() {
            //resetTheStates
            //backToTheMenu
            this.$emit("resetTheGame")
        },
        checkAndMarkTheMachinePick(fieldNumber) {
            if (this.panelNumber === fieldNumber) {
                this.markThePlace()
            }
        },
    }
}
</script>
<style lang="sass" scoped>
.ticTacToePanel
    opacity: 0
    height: 100px
    background-color: #666060
    border-radius: 3px
    display: flex
    justify-content: center
    align-items: center
    animation: born 0.2s ease-out 0.2s forwards
    i
        animation: iconBorn 0.2s ease forwards
@keyframes born
    0%
        transform: scale(0.2)
    100%
        opacity: 1
        transform: scale(1)
@keyframes iconBorn
    0%
        opacity: 0
        transform: scale(0.2)
    100%
        opacity: 1
        transform: scale(1)
</style>

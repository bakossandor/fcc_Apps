<template>
	<transition name="fadeIn">
        <div class="ticTacToePage">
            <div class="ticTacToeClass">
                <div v-if="oneOrTwoPlayerModeSelection" class="ticTacToeSelectionMode">
                    <span class="hoverOnSelection" @click="setPlayerAndMoveOn(true)">One Player</span>
                    <span>|</span>
                    <span class="hoverOnSelection" @click="setPlayerAndMoveOn(false)">Two Player</span>
                </div>
                <div v-if="onePlayerModeSideSelection" class="ticTacToeSelectionSide">
                    <i class="fas fa-times fa-5x" style="color:#C3E8C0" @click="setSideForThePlayer(true)"></i>
                    <i class="far fa-circle fa-5x" style="color:#FFCACA" @click="setSideForThePlayer(false)"></i>
                </div>
                <div v-if="showGameTable" class="ticTacToeGameArea">
                    <tic-tac-panel v-for="(numbers, index) in panelData" :key="index" :panelNumber="index" @checking="checking" v-on:resetTheGame.once="resetTheGame"></tic-tac-panel>
                </div>
            </div>
        </div>
	</transition>
</template>
<script>
import TicTacPanel from '../components/TicTacToeInduvidualPanel.vue'
import { eventBus } from "../components/ticTacToeEventBus.js"
export default {
    data() {
        return {
            oneOrTwoPlayerModeSelection: true,
            onePlayerModeSideSelection: false,
            showGameTable: false,
            panelData: [0,1,2,3,4,5,6,7,8],
        }
    },
    components: {
        TicTacPanel
    },
    methods: {
        setPlayerAndMoveOn(bool) {
            //if bool is true it going to be one-player mode if it is false it is going to be 2 player mode
            eventBus.onePlayerMode = bool

            //move to the next phase conditionally, player selection or playing the game
            this.oneOrTwoPlayerModeSelection = false
            if (eventBus.onePlayerMode === true) {
                this.onePlayerModeSideSelection = true
            } else if (eventBus.onePlayerMode === false) {
                this.showGameTable = true
            }
        },
        setSideForThePlayer(bool) {
            // if bool true the player is x, if bool false, player is circle
            eventBus.isPlayerIsTheNext = bool

            //move to the next phase - game phase
            this.onePlayerModeSideSelection = false
            this.showGameTable = true
        },
        checking() {
            //checking the win and tie condition
            this.checkingWinCondition()
        },
        checkingWinCondition() {
            //win emitter function passing the winner field numbers
            const emittingWinStateAndNumber = (numbersArray) => {
                eventBus.$emit("win", numbersArray)
            }
            //checking and emitting the winner numbers
            if (eventBus.fields[0].field === eventBus.fields[1].field && eventBus.fields[1].field === eventBus.fields[2].field ) {
                emittingWinStateAndNumber([0, 1, 2])
            } else if (eventBus.fields[3].field === eventBus.fields[4].field && eventBus.fields[4].field === eventBus.fields[5].field) {
                emittingWinStateAndNumber([3, 4, 5])
            } else if (eventBus.fields[6].field === eventBus.fields[7].field && eventBus.fields[7].field === eventBus.fields[8].field) {
                emittingWinStateAndNumber([6, 7, 8])
            } else if (eventBus.fields[0].field === eventBus.fields[3].field && eventBus.fields[3].field === eventBus.fields[6].field) {
                emittingWinStateAndNumber([0, 3, 6])
            } else if (eventBus.fields[1].field === eventBus.fields[4].field && eventBus.fields[4].field === eventBus.fields[7].field) {
                emittingWinStateAndNumber([1, 4, 7])
            } else if (eventBus.fields[2].field === eventBus.fields[5].field && eventBus.fields[5].field === eventBus.fields[8].field) {
                emittingWinStateAndNumber([2, 5, 8])
            } else if (eventBus.fields[0].field === eventBus.fields[4].field && eventBus.fields[4].field === eventBus.fields[8].field) {
                emittingWinStateAndNumber([0, 4, 8])
            } else if (eventBus.fields[2].field === eventBus.fields[4].field && eventBus.fields[4].field === eventBus.fields[6].field) {
                emittingWinStateAndNumber([2, 4, 6])
            } else {
            //if there is no winner call the draw
                this.checkingDrawCondition()
            }
        },
        checkingDrawCondition() {
            //if all of the fields are filled and there were no win previously call the draw function
            if (eventBus.fields.filter(blocks => !isNaN(blocks.field)).length === 0) {
                eventBus.$emit("draw")
            } else if (eventBus.onePlayerMode === true && eventBus.isPlayerIsTheNext === false) {
                eventBus.$emit("machinePick", this.machineSelectionRandomPicker())
            }
        },
        resetTheGame() {
            //need resetting all variable
            eventBus.fields.forEach((blocks, idx) => {
                blocks.disabled = false
                blocks.field = idx
            })
            this.oneOrTwoPlayerModeSelection = true
            this.onePlayerModeSideSelection = false
            this.showGameTable = false
        },
        machineSelectionRandomPicker() {
            //need to have the numbers in the array
            const availablePanelNumbers = eventBus.fields.filter(blocks => !isNaN(blocks.field))
            //give a random number from the available array to get a field number to pass into the event
            const getRandomInt = function (min, max) {
                min = Math.ceil(min)
                max = Math.floor(max)
                return Math.floor(Math.random() * (max - min)) + min
            }
            return availablePanelNumbers[getRandomInt(0, availablePanelNumbers.length)].field
        },
    },
}
</script>
<style lang="sass" scoped>
@import url('https://fonts.googleapis.com/css?family=Lato')
.ticTacToePage
    background-color: #FFE3BA
    width: 100%
    height: 100%
    display: flex
    justify-content: center
    align-items: center
    font-family: 'Lato', sans-serif
.ticTacToeClass
    width: 100%
    max-width: 300px
.ticTacToeSelectionMode, .ticTacToeSelectionSide
    padding: 1rem
    background-image: linear-gradient(to left, #FDE7C5, #F9EAD3)
    border-radius: 4px
    box-shadow: rgba(231, 199, 153, 0.65) 0px 5px 35px
.ticTacToeSelectionMode
    span
        font-size: 1.5rem
        font-weight: 600
    span:nth-of-type(2)
        margin: 0 0.5rem
    .hoverOnSelection
        position: relative
        color: #000
        text-decoration: none
    .hoverOnSelection:hover
        cursor: pointer
        color: #000
    .hoverOnSelection:before
        content: ""
        position: absolute
        width: 100%
        height: 2px
        bottom: 0
        left: 0
        background-color: #000
        visibility: hidden
        -webkit-transform: scaleX(0)
        transform: scaleX(0)
        -webkit-transition: all 0.3s ease-in-out 0s
        transition: all 0.3s ease-in-out 0s
    .hoverOnSelection:hover:before
        visibility: visible
        -webkit-transform: scaleX(1)
        transform: scaleX(1)
.ticTacToeSelectionSide
    text-align: center
    i:nth-of-type(1)
        margin-right: 1.5rem
    i:nth-of-type(2)
        margin-left: 1.5rem
    i
        transition: transform 0.5s
    i:hover
        transform: scale(1.2)
.ticTacToeGameArea
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 5px
.fadeIn-enter-active, .fadeIn-leave-active
    transition: opacity .5s
.fadeIn-enter, .fadeIn-leave-to
    opacity: 0
</style>

<template>
	<div class="pomodoroPage">
		<div class="pomodoroClass">
			<div class="pomodoroButtons">
				<i class="fas fa-cog fa-7x cogClass" @click="showModal = true" :class="{cogSpinClass: showModal}"></i>
				<i class="fas fa-play fa-7x playClass animateIn" v-if="!state.playing" @click="play"></i>
				<i class="fas fa-pause fa-7x pauseClass animateIn" v-if="state.playing" @click="pause"></i>
				<i class="fas fa-stop fa-7x stopClass animateIn" @click="stop"></i>
			</div>
			<div class="pomodoroTime">
				<p>{{ state.currentValue | showMinutes }}</p>
				<p>{{ state.currentValue | showSeconds }}</p>
			</div>
			<modal :valParent="originalValue / 60" :restParent="originalRestValue / 60" v-if="showModal" @close="showModal = false" @apply="applySettings"></modal>
		</div>
	</div>
</template>
<script>
import Modal from '../components/PomodoroModal.vue'
export default {
	data() {
		return {
			originalValue: 1500,
			originalRestValue: 300,
			state: {
				playing: false,
				activePhase: true,
				currentValue: 1500,
			},
			showModal: false,
			interval: undefined
		}
	},
	components: {
		Modal
	},
	methods: {
		applySettings(val) {
			//reset the timer with the right values from the settings
			this.originalValue = val[0] * 60
			this.originalRestValue = val[1] * 60
			this.state.currentValue = this.originalValue
			this.showModal = false
		},
		play() {
			const audio = new Audio("http://soundbible.com/mp3/Temple%20Bell-SoundBible.com-756181215.mp3")
			//check the time and start count from it
			this.state.playing = true
			this.interval = setInterval(() => {
				if (this.state.currentValue === 0) {
					console.log(this.state.currentValue)
					audio.play()
					if (this.state.activePhase === true) {
						this.state.currentValue = this.originalRestValue
					} else if (this.state.activePhase === false) {
						this.state.currentValue = this.originalValue
					}
					this.state.activePhase = !this.state.activePhase
				}
				this.state.currentValue -= 1
			}, 1000)
		},
		pause() {
			this.state.playing = false
			clearInterval(this.interval)
			//pause the interval
		},
		stop() {
			this.pause()
			this.state.currentValue = this.originalValue
			//stop the interval and reset the clock
		}
	},
	filters: {
		showMinutes(value) {
			return parseInt(value / 60) < 10 ? "0" + (parseInt(value / 60)).toString() : parseInt(value / 60)
		},
		showSeconds(value) {
			return value % 60 < 10 ? "0" + (value % 60).toString() : value % 60
		}
	}
}
</script>

<style lang="sass" scoped>
.pomodoroPage
	font-family: "Helvetica Neue", Helvetica, Arial, sans-serif
	height: 100%
	background-color: #f0f3bd
.pomodoroClass
	height: 100%
	display: flex
	justify-content: center
	align-items: center
.pomodoroTime
	margin-left: 1rem
	p
		font-size: 11rem
		text-shadow: 0px 2px 4px
.pomodoroButtons
	margin-right: 1rem
	text-align: center
	.animateIn
		 animation: iconBorn 0.1s ease forwards
	i
		display: block
		margin-bottom: 1rem
.cogClass
	color: #00a896
	text-shadow: 0px 2px 10px #02332e
	transition: transform 0.5s
.cogSpinClass
	transform: rotate(20deg)
.pauseClass
	color: #028090
	text-shadow: 0px 2px 10px #024b54
.playClass
	color: #02c39a
	text-shadow: 0px 2px 10px #004d3c
.stopClass
	color: #05668d
	text-shadow: 0px 2px 10px #023042
@keyframes iconBorn
    0%
        opacity: 0
        transform: scale(0.2)
    100%
        opacity: 1
        transform: scale(1)
</style>

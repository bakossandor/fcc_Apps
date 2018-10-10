<template>
	<div class="calculator">
		<div class="calculatorBody">
			<div class="calculatorDisplay">
				<p>{{ console }}</p>
			</div>
			<div class="calculatorButtons">
				<div class="calculatorGrey calculatorButtonParts" @click="reset"><p>C</p></div>
				<div class="calculatorGrey calculatorButtonParts" @click="plusMinus"><p>+/-</p></div>
				<div class="calculatorGrey calculatorButtonParts" @click="deleteLast"><p>del</p></div>
				<div class="calculatorBlue calculatorNoMarginRight calculatorButtonParts" @click="calculateMethods(4)"><p>/</p></div>
				<div class="calculatorGrey calculatorButtonParts" @click="write('7')"><p>7</p></div>
				<div class="calculatorGrey calculatorButtonParts" @click="write('8')"><p>8</p></div>
				<div class="calculatorGrey calculatorButtonParts" @click="write('9')"><p>9</p></div>
				<div class="calculatorBlue calculatorNoMarginRight calculatorButtonParts" @click="calculateMethods(3)"><p>X</p></div>
				<div class="calculatorGrey calculatorButtonParts" @click="write('4')"><p>4</p></div>
				<div class="calculatorGrey calculatorButtonParts" @click="write('5')"><p>5</p></div>
				<div class="calculatorGrey calculatorButtonParts" @click="write('6')"><p>6</p></div>
				<div class="calculatorBlue calculatorNoMarginRight calculatorButtonParts" @click="calculateMethods(2)"><p>-</p></div>
				<div class="calculatorGrey calculatorButtonParts" @click="write('1')"><p>1</p></div>
				<div class="calculatorGrey calculatorButtonParts" @click="write('2')"><p>2</p></div>
				<div class="calculatorGrey calculatorButtonParts" @click="write('3')"><p>3</p></div>
				<div class="calculatorBlue calculatorNoMarginRight calculatorButtonParts" @click="calculateMethods(1)"><p>+</p></div>
				<div class="calculatorGrey calculatorNoMarginBottom calculatorButtonParts" @click="write('0')"><p>0</p></div>
				<div class="calculatorGrey calculatorNoMarginBottom calculatorButtonParts" @click="write('00')"><p>00</p></div>
				<div class="calculatorGrey calculatorNoMarginBottom calculatorButtonParts" @click="addDecimal"><p>.</p></div>
				<div class="calculatorYellow calculatorButtonParts" @click="equal"><p>=</p></div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			console: "0",
			storedNum: undefined,
			newNum: undefined,
			operation: undefined,
		}
	},
	methods: {
		reset() {
			this.console = "0"
			this.storedNum = undefined
			this.newNum = undefined
			this.operation = undefined
		},
		write(num) {
			if (this.console === "0") {
				if (num === "00") {
					this.console = "0"
				} else {
					this.console = num
				}
			} else if (this.console.length < 11) {
				this.console = this.console + num
			}
		},
		addDecimal() {
			if (!this.console.match(/\./) && this.console.length < 9) {
				this.console = this.console + "."
			}
		},
		deleteLast() {
			if (this.console === "0") {
				return
			} else if (this.console !== "0" && this.console.length === 1) {
				this.reset()
			} else if (this.console !== "0" && this.console.length === 2 && this.console[0] === "-"){
				this.reset()
			} else if (this.console !== "0" && this.console.length > 1) {
				const array = this.console.split("")
				array.pop()
				this.console = array.join("")
			}
		},
		plusMinus() {
			if (this.console !== "0") {
				if (this.console[0] !== "-") {
					const array = this.console.split("")
					array.unshift("-")
					this.console = array.join("")
				} else if (this.console[0] === "-") {
					const array = this.console.split("")
					array.shift()
					this.console = array.join("")
				}
			}
		},
		calculateMethods(op) {
			this.operation = op
			this.storedNum = Number(this.console)
			this.console = "0"
		},
		sum() {
			const result = parseFloat((this.storedNum + this.newNum).toFixed(3))
			this.console = result
		},
		extract() {
			const result = parseFloat((this.storedNum - this.newNum).toFixed(3))
			this.console = result
		},
		multiply() {
			const result = parseFloat((this.storedNum * this.newNum).toFixed(3))
			if (result.length > 13) {
				this.console = Number(result).toExponential(3)
			} else {
				this.console = result
			}
		},
		divide() {
			const result = parseFloat((this.storedNum / this.newNum).toFixed(3))
			this.console = result
		},
		equal() {
			if (this.operation) {
				this.newNum = Number(this.console)
				switch(this.operation) {
					case 1:
						this.sum()
						break
					case 2:
						this.extract()
						break
					case 3:
						this.multiply()
						break
					case 4:
						this.divide()
						break
				}
				this.storedNum = this.console
				this.operation = undefined
				this.newNum = undefined
			}
		}
	}
}
</script>
<style lang="sass" scoped>
@import url('https://fonts.googleapis.com/css?family=M+PLUS+Rounded+1c')
.calculator
	background-color: #1E2326
	font-family: 'M PLUS Rounded 1c', sans-serif
	height: 100%
	padding-top: 1rem
.calculatorBody
	width: 20rem
	margin: auto
	box-shadow: 0 5px 35px rgba(0,0,0,.65)
.calculatorDisplay
	height: 5rem
	line-height: 5rem
	background-color: #FFF
	text-align: right
	padding-right: 0.5rem
	font-size: 2rem
	p
		overflow: hidden
.calculatorGrey
	background-color: #1E2326
.calculatorGrey:active
	background-color: #60717C
.calculatorBlue
	background-color: #5E4BB7
	margin-right: none
.calculatorBlue:active
	background-color: #9E90E0
.calculatorYellow
	background-color: #FEC208
	border-right: none !important
	border-bottom: none !important
.calculatorYellow:active
	background-color: #f9EBBE
.calculatorButtons
	background-color: #FFF
.calculatorButtonParts
	width: 5rem
	height: 5rem
	display: inline-block
	border-bottom: 1px solid #FFF
	border-right: 1px solid #FFF
	text-align: center
	line-height: 5rem
	cursor: pointer
	background-position: center
	transition: background 0.8s
	p
		margin: 0
		color: #FFF
		cursor: pointer
.calculatorButtonParts:active
	background-size: 100%
	transition: background 0s
.calculatorNoMarginBottom
	border-bottom: none
.calculatorNoMarginRight
	border-right: none
</style>
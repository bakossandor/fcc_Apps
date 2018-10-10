<template>
	<div class="home">
		<header class="home_header">
			<p>freeCodeCamp personal portfolio</p>
			<p>v. 0.1.2</p>
		</header>
		<!-- <div class="linkDiv_first"></div> -->
		<main class="home_main">
			<div class="linkDiv" @click='nav("product")'>
				<div class="linkDiv_full">
					<h2>Product Landing Page</h2>
				</div>
			</div>
			<div class="linkDiv" @click='nav("tictac")'>
				<div class="linkDiv_full">
					<h2>Tic Tac Toe</h2>
				</div>
			</div>
			<div class="linkDiv" @click='nav("weather")'>
				<div class="linkDiv_full">
					<h2>Weather Application</h2>
				</div>
			</div>
			<div class="linkDiv" @click='nav("survey")'>
				<div class="linkDiv_full">
					<h2>Survey Form</h2>
				</div>
			</div>
			<div class="linkDiv" @click='nav("pomodoro")'>
				<div class="linkDiv_full">
					<h2>Pomodor Clock</h2>
				</div>
			</div>
			<div class="linkDiv" @click='nav("calculator")'>
				<div class="linkDiv_full">
					<h2>Calculator</h2>
				</div>
			</div>
		</main>
		<footer class="home_footer">
			<p>created by Sándor Bakos @ <a href="https://www.linkedin.com/in/s%C3%A1ndor-bakos-3a1109137/">LinedIn</a></p>
			<p>made with passion and Vue Sass Express</p>
		</footer>
	</div>
</template>
<script>
export default {
	methods: {
		nav(routeToNav) {
			this.$router.push({ name: routeToNav });
		}
	}
}
</script>
<style lang="sass" scoped>
@import url('https://fonts.googleapis.com/css?family=Mukta|Muli')
$font_1: 'Muli', sans-serif
$font_2: 'Mukta', sans-serif
.home_header, .home_footer
	font-family: $font_1
	font-size: 0.5rem
	width: 100%
	padding: 0.2rem
	color: #FFF
	background-color: #000
	position: fixed
	z-index: 10
	p
		display: inline
		&:nth-of-type(2)
			float: right
.home_header
	left: 0
	top: 0
.home_footer
	left: 0
	bottom: 0
	a
		color: grey
.home_main
	padding-top: 1.4rem
	padding-bottom: 1.4rem
	display: flex
	justify-content: center
	flex-wrap: wrap
	width: 100%
	max-width: 600px
	margin: auto
	.linkDiv
		height: 250px
		width: 250px
		border: 3px solid #000
		transition: box-shadow 0.2s
		margin: 1rem
		line-height: 250px
		text-align: center
		font-family: $font_2
		color: #fff
		text-shadow: 0px 0px 2px #ededed
		filter: grayscale(100%)
		.linkDiv_full
			width: 100%
			height: 100%
			background-color: #7c6767
			opacity: 0.9
			transition: opacity 0.2s
			cursor: pointer
			
		&:hover
			box-shadow: 1px 1px 15px grey
			.linkDiv_full
				opacity: 0
	.linkDiv:nth-of-type(1)
		background-image: url("../../static/img/portfolio/product1.jpg")
	.linkDiv:nth-of-type(2)
		background-image: url("../../static/img/portfolio/tictactoe1.jpg")
	.linkDiv:nth-of-type(3)
		background-image: url("../../static/img/portfolio/weather1.jpg")
	.linkDiv:nth-of-type(4)
		background-image: url("../../static/img/portfolio/survey1.jpg")
	.linkDiv:nth-of-type(5)
		background-image: url("../../static/img/portfolio/pomodoro1.jpg")
	.linkDiv:nth-of-type(6)
		background-image: url("../../static/img/portfolio/calculator1.jpg")
</style>


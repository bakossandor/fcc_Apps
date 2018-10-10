<template>
    <div class="surveyPage">
        <transition name="fade1">
            <div class="submitted" @click="form = !form" v-if="!form">
                <i class="fab fa-angellist fa-4x"></i>
            </div>
        </transition>
        <transition name="fade2">
            <div class="surveyContainer" v-if="form">
                <div class="surveyForm">
                    <div class="surveyTitle">
                        <h2>General football survey</h2>
                    </div>
                    <form action="" method="post">
                        <div>
                            <label class="mainLabel sublabel" for="mail">email</label>
                            <input class="inputs" type="email" id="mail" name="user_email" placeholder="my email is email@email.com" />
                        </div>
                        <div>
                            <label class="mainLabel sublabel" for="mail">age</label>
                            <input class="inputs" type="text" id="age" name="user_age" placeholder="I am ... years old" />
                        </div>
                        <div class="radioButtons">
                            <label class="mainLabel sublabel" for="gender">gender</label>
                            <label>male</label>
                            <input type="radio" name="gender" value="male">
                            <label>female</label>
                            <input type="radio" name="gender" value="female">
                        </div>
                        <div class="radioButtons">
                            <label class="mainLabel sublabel" for="q1">Are you intrested in football?</label>
                            <label>yes</label>
                            <input type="radio" name="q1" value="yes">
                            <label>no</label>
                            <input type="radio" name="q1" value="no">
                        </div>
                        <div class="radioButtons">
                            <label class="mainLabel sublabel" for="q2">Did you follow the 2018 World Cup?</label>
                            <label>yes</label>
                            <input type="radio" name="q2" value="yes">
                            <label>no</label>
                            <input type="radio" name="q2" value="no">
                        </div>
                        <div class="radioButtons">
                            <label class="mainLabel sublabel" for="q3">Are you intrested in club footblall?</label>
                            <label>yes</label>
                            <input type="radio" name="q3" value="yes">
                            <label>no</label>
                            <input type="radio" name="q3" value="no">
                        </div>
                        <div class="radioButtons">
                            <label class="mainLabel sublabel" for="q4">Do you support your local football club?</label>
                            <label>yes</label>
                            <input type="radio" name="q4" value="yes">
                            <label>no</label>
                            <input type="radio" name="q4" value="no">
                        </div>
                        <div>
                            <label class="mainLabel sublabel" for="favourite_player">Who is your favourite player?</label>
                            <input class="inputs" type="text" id="favourite_player" name="user_fav_player" placeholder="Lord Bendtner" />
                        </div>
                        <div>
                            <label class="mainLabel sublabel" for="favourite_club">Which club is your favourite?</label>
                            <input class="inputs" type="text" id="favourite_club" name="user_fav_club" placeholder="Giant slayer F.C." />
                        </div>
                    </form>
                    <div class="surveySubmitButton">
                        <button @click="form = !form">Submit</button>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
export default {
    data() {
        return {
            form: true
        }
    }
}
</script>
<style lang="sass" scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat|Mukta')
$font-title: 'Mukta', sans-serif
$font-content: 'Montserrat', sans-serif
.surveyPage
    width: 100%
    height: auto
    padding: 2rem 0 2rem 0
    @media screen and (max-width: 600px)
        padding: 0
.surveyContainer
    width: 100%
    max-width: 600px
    margin: auto
    box-shadow: 0 5px 15px #c6c6c6
    padding: 1rem
.surveyTitle
    h2
        font-family: $font-title
        text-shadow: 1px 1px 2px #a99696
.surveyForm
    font-family: $font-content
    .mainLabel
        display: block
    .sublabel
        border-left: 2px solid #ff4b00
        padding-left: 5px
        font-size: 1.2rem
        margin-bottom: 0.4rem
    .inputs
        width: 100%
        padding: 5px
        border: 2px solid #ff4b00
        transition: background-color 0.2s
        transition: box-shadow 0.2s
        font-size: 1rem
        color: #1e4c08
        font-weight: bold
    .inputs:focus
        box-shadow: 1px 3px 5px #e58d8d
        background-color:  #fcf1f1
    div
        margin-bottom: 1rem
    .radioButtons
        label
            margin-right: 0.3rem
        label:nth-of-type(2)
            margin-left: 0.5rem
        input
            margin-right: 0.5rem
.surveySubmitButton
    button
        width: 100%
        padding: 1rem
        border: 2px solid black
        background-color: #ffdfd9
        box-shadow: 1px 2px black
        font-size: 1rem
        cursor: pointer
        transition: background-color 0.1s
        transition: box-shadow 0.1s
    button:active
        box-shadow: none
        background-color: #ffc3b8
.submitted
    width: 200px
    height: 200px
    border-radius: 50%
    border: 1px solid black
    display: flex
    align-items: center
    justify-content: center
    background-color:  #40f740
    box-shadow: 0 0 8px #0b8700
    margin: 1rem auto
.fade1-enter-active, .fade1-leave-active
    transition: opacity 0.3s
.fade1-enter, .fade1-leave-to
    opacity: 0
.fade2-enter-active, .fade2-leave-active
    transition: opacity 0.6s
.fade2-enter, .fade2-leave-to
    opacity: 0
</style>

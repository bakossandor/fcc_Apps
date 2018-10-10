<template>
    <div class="weatherPage">
        <div class="weatherPage_loading" v-if="loading">
            <i class="fas fa-spinner fa-spin fa-4x"></i>
        </div>
        <div class="weatherPage_app" :class="classes">
            <div class="weatherPage_app_header">
                <span>{{ city }}, </span>
                <span>{{ country }}</span>
            </div>
            <div class="weatherPage_app_mainInfo">
                <div class="weatherPage_app_mainInfo_icon">
                    <img :src="imgSource" alt="clear weather icon">
                </div>
                <div class="weatherPage_app_mainInfo_currentData">
                    <p class="weatherPage_app_mainInfo_currentData_state">{{ styleAndIcon }}</p>
                    <p class="weatherPage_app_mainInfo_currentData_temp">{{ temprature }}</p>
                    <!-- <p class="weatherPage_app_mainInfo_currentData_today">{{ today }}</p> -->
                </div>
            </div>
            <div class="weatherPage_app_forecast">
                <div class="weatherPage_app_forecast_fancyTop"></div>
                <div class="weatherPage_app_forecast_five_day">
                    <div class="weatherPage_app_forecast_five_day_day" v-for="(day, idx) in forecast" :key="day.idx" @click="showDetails(idx)">
                        <p class="weatherPage_app_forecast_five_day_day_day">{{day.day}}</p>
                        <img :src="day.url">
                        <p>{{ day.temprature }}</p>
                    </div>
                </div>
                <div class="weatherPage_app_forecast_currentDayInfo">
                    <div>
                        <p>{{ forecastData.temprature }}</p>
                        <p>temp</p>
                    </div>
                    <div>
                        <p>{{ forecastData.wind }}</p>
                        <p>wind</p>
                    </div>
                    <div>
                        <p>{{ forecastData.humidity }}</p>
                        <p>humidity</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import clear_sky from "../../static/icons/weatherApp/weather-clear.png"
import few_clouds from "../../static/icons/weatherApp/weather-few-clouds.png"
import scattered_clouds from "../../static/icons/weatherApp/weather-clouds.png"
import broken_clouds from "../../static/icons/weatherApp/weather-few-clouds.png"
import shower_rain from "../../static/icons/weatherApp/weather-rain-day.png"
import thunderstorm from "../../static/icons/weatherApp/weather-storm.png"
import snow from "../../static/icons/weatherApp/weather-snow.png"
import mist from "../../static/icons/weatherApp/weather-mist.png"
import overcast_clouds from "../../static/icons/weatherApp/weather-clouds.png"

const apiKey = "850184de2a635bc0f5bdaabdeca0034d"
const apiString = "https://api.openweathermap.org/data/2.5/forecast?"
const images = [
    {desc: "clear sky", url: clear_sky},
    {desc: "few clouds", url: few_clouds},
    {desc: "scattered clouds", url: scattered_clouds},
    {desc: "broken clouds", url: broken_clouds},
    {desc: "shower rain", url: shower_rain},
    {desc: "rain", url: shower_rain},
    {desc: "light rain", url: shower_rain},
    {desc: "thunderstorm", url: thunderstorm},
    {desc: "snow", url: snow},
    {desc: "mist", url: mist},
    {desc: "overcast clouds", url: overcast_clouds}
]

export default {
    data() {
        return {
            country: "",
            city: "",
            styleAndIcon: "",
            temprature: "",
            today: "",
            forecast: [
                {day: "", temprature: "", wind: "", humidity: "", url: ""},
                {day: "", temprature: "", wind: "", humidity: "", url: ""},
                {day: "", temprature: "", wind: "", humidity: "", url: ""},
                {day: "", temprature: "", wind: "", humidity: "", url: ""},
                {day: "", temprature: "", wind: "", humidity: "", url: ""},
            ],
            
            forecastData: {
                temprature: "",
                wind: "",
                humidity: ""
            },
            imgSource: "",
            classes: {
                stye_clear: false,
                stlye_cloud_rain: false,
                style_snow: false,
                style_storm: false
            },
            loading: true
        }
    },
    watch: {
        styleAndIcon(newStyle) {
            if (newStyle === "clear sky") {
                this.classes.stye_clear = true
                this.classes.stlye_cloud_rain = false
                this.classes.style_snow = false
                this.classes.style_storm = false
            } else if (newStyle === "few clouds" || newStyle === "scattered clouds" || newStyle === "broken clouds"|| newStyle === "shower rain" || newStyle === "rain" || newStyle === "light rain" || newStyle === "mist" || newStyle === "overcast clouds") {
                this.classes.stye_clear = false
                this.classes.stlye_cloud_rain = true
                this.classes.style_snow = false
                this.classes.style_storm = false
            } else if (newStyle === "snow") {
                this.classes.stye_clear = false
                this.classes.stlye_cloud_rain = false
                this.classes.style_snow = true
                this.classes.style_storm = false
            } else if (newStyle === "thundersorm") {
                this.classes.stye_clear = false
                this.classes.stlye_cloud_rain = false
                this.classes.style_snow = false
                this.classes.style_storm = true
            }
        }
    },
    created() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.sendingAPIrequest);
        } else {
            console.log("geolocation is not available or not supported")
        }
    },
    methods: {
        sendingAPIrequest(position) {
            const vm = this
            const long = position.coords.longitude
            const lat = position.coords.latitude
            const apiRequest = (`${apiString}lat=${lat}&lon=${long}&APPID=${apiKey}`)
            function status(response) {
                if (response.status >= 200 && response.status < 300) {
                    return Promise.resolve(response)
                } else {
                    return Promise.reject(new Error(response.statusText))
                }
            }
            function json(response) {
                return response.json()
            }

            function kelvinToCelsius(kelvin) {
                if (kelvin) {
                    return Math.round(kelvin - 273.15) + "" + "°"
                } else {
                    return "NDA"
                }
            }

            function getDayTo(day) {
                const date = new Date(day)
                const weekArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                return weekArray[date.getDay()]
            }


            function fillData(data) {
                //seperate the data by days
                const seperate_array = []
                data.list.forEach((listObj, idx) => {
                    var pushed = false
                    if (idx === 0) {
                        seperate_array.push(new Array)
                        seperate_array[0].push(listObj)
                    } else {
                        for (let i = 0; i < seperate_array.length; i++) {
                            if (new Date(listObj.dt_txt).getDate() === new Date(seperate_array[i][0].dt_txt).getDate()) {
                                seperate_array[i].push(listObj)
                                pushed = true
                                return
                            }
                        }
                        if (pushed === false) {
                            seperate_array.push(new Array)
                            seperate_array[seperate_array.length - 1].push(listObj)
                        }
                    }
                })
                console.log("seperate_array :", seperate_array)

                //narrowing the selection
                const narrowed_array = []
                seperate_array[0].forEach((obj) => {
                    if (obj.dt_txt.split(" ")[1] === "15:00:00") {
                        narrowed_array.push(obj)
                    }
                })
                if (narrowed_array.length === 0) {
                    narrowed_array.push(seperate_array[0][0])
                }
                seperate_array.forEach((day_array, idx) => {
                    if (idx > 0) {
                        day_array.forEach((obj) =>{
                            if (obj.dt_txt.split(" ")[1] === "15:00:00") {
                                narrowed_array.push(obj)
                            }
                        })
                    }
                })
                if (narrowed_array.length === 6) {
                    narrowed_array.pop()
                }
                console.log("narrowed array: ", narrowed_array)

                function passImgUrl(descr) {
                    console.log("desc", descr)
                    return images.filter((img) => {
                        return img.desc === descr
                    })[0].url
                }

                // assigning value
                narrowed_array.forEach((obj, idx) => {
                    vm.forecast[idx].url = passImgUrl(obj.weather[0].description)
                    vm.forecast[idx].day = getDayTo(obj.dt_txt)
                    vm.forecast[idx].temprature = kelvinToCelsius(obj.main.temp)
                    vm.forecast[idx].wind = obj.wind.speed
                    vm.forecast[idx].humidity = obj.main.humidity
                })

                vm.styleAndIcon = data.list[0].weather[0].description
                vm.temprature = kelvinToCelsius(data.list[0].main.temp)
                vm.today = new Date(data.list[0].dt_txt).getDate()
                vm.imgSource = passImgUrl(data.list[0].weather[0].description)

                vm.city = data.city.name
                vm.country = data.city.country

                vm.showDetails(0)
                vm.loading = false
            }

            fetch(apiRequest, {
                method: "GET",
                mode: "cors"
            })
                .then(status)
                .then(json)
                .then((data) => {
                    console.log("request successfull with data", data)
                    fillData(data)
                })
                .catch((error) => {
                    console.log("request failed", error)
                })
        },
        showDetails(idx) {
            this.forecastData.temprature = this.forecast[idx].temprature
            this.forecastData.wind = this.forecast[idx].wind
            this.forecastData.humidity = this.forecast[idx].humidity
        }
    }
}
</script>
<style lang="sass" scoped>
@import url('https://fonts.googleapis.com/css?family=Quicksand')
$family-1: 'Quicksand', sans-serif
.weatherPage
    height: auto
    width: 100%
    padding-top: 2rem
    @media screen and (max-width: 500px)
        height: 100%
        padding: 0
        .weatherPage_app
            box-shadow: none !important
            height: 100%
.weatherPage_loading
    position: absolute
    width: 100%
    height: 100%
    background-color: grey
    z-index: 100
    opacity: 0.9
    text-align: center
    padding-top: 4rem
.weatherPage_app
    width: 100%
    max-width: 500px
    margin: auto
    font-family: $family-1
.weatherPage_app_header
    padding: 10px 5px
    font-size: 0.8rem
.weatherPage_app_mainInfo
    text-align: center
    margin-bottom: 5rem
    .weatherPage_app_mainInfo_icon
        img
            width: 100px
            height: 100px
    .weatherPage_app_mainInfo_currentData
        .weatherPage_app_mainInfo_currentData_state, .weatherPage_app_mainInfo_currentData_temp
            text-shadow: 0 0 1px black
            font-weight: 900
        .weatherPage_app_mainInfo_currentData_state
            text-transform: uppercase
        .weatherPage_app_mainInfo_currentData_temp
            font-size: 2.3rem
.weatherPage_app_forecast
    .weatherPage_app_forecast_fancyTop
        opacity: 0.4
        width: 100%
        height: 0.4rem
        background-image: linear-gradient(to bottom right, white, grey)
        margin-bottom: 0.5rem
    .weatherPage_app_forecast_five_day
        text-align: center
        display: flex
        justify-content: space-around
        .weatherPage_app_forecast_five_day_day
            .weatherPage_app_forecast_five_day_day_day
                font-size: 0.6rem
            img
                width: 40px
                height: 40px
    .weatherPage_app_forecast_currentDayInfo
        padding: 5px
        margin-top: 5px
        display: flex
        justify-content: space-around
        div > p:nth-of-type(1)
            font-size: 1.3rem
        div > p:nth-of-type(2)
            font-size: 0.6rem
.stye_clear
    background-image: linear-gradient(#ffbe62, #ffffa0)
    box-shadow: 1px 2px 10px #ffffa0
.stlye_cloud_rain
    background-image: linear-gradient(#484f7c, #ecf1f2)
    box-shadow: 1px 2px 10px #b4b7b8
.style_snow
    background-image: linear-gradient(#bfbfbf, #fff)
    box-shadow: 1px 2px 10px #b4b7b8
.style_storm
    background-image: linear-gradient(#000, #eeffc6)
    box-shadow: 1px 2px 10px #eeffc6
</style>
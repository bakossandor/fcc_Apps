<template>
    <div class="productSite">
        <div class="productContainer">
            <div class="productHeader">
                <div class="productHeader_sales">
                    <p>Free Shipping For US Orders Only This Week</p>
                </div>
                <div class="productHeader_header">
                    <a href=""><img src="../../static/img/productPage/polaroid.svg" alt="polaroid icon"></a>
                    <a href=""><i class="fas fa-shopping-bag fa-3x"></i></a>
                </div>
            </div>
            <main>
                <section class="newIdeas productSiteText productSite_yellow_bg">
                    <div>
                        <div class="newIdeas_title">
                            <h2>Meet the OneStep+</h2>
                        </div>
                        <div class="newIdeas_description">
                            <p class="productSiteDescription">The new instant camera that lets you unlock more ways to play than ever before.</p>
                        </div>
                        <div class="newIdeas_actions">
                            <button>pre-order</button>
                            <a href=""><i class="far fa-play-circle"></i><span>see in action</span></a>
                        </div>
                    </div>
                </section>
                <section class="bg-1 bg"></section>
                <section class="bg-2 bg"></section>
                <section class="description productSiteText productSite_white_bg">
                    <div>
                        <div class="description_title">
                            <h2>The OneStep+</h2>
                        </div>
                        <div class="description_description">
                            <p class="productSiteDescription">The OneStep+ is a new Polaroid instant camera with more ways to play.</p>
                        </div>
                        <div class="description_ul">
                            <ul class="fa-ul">
                                <li><span class="fa-li" ><i class="fas fa-cookie-bite" style="color: #496ffb"></i></span>High-quality standard and portrait lens</li>
                                <li><span class="fa-li" ><i class="fas fa-cookie-bite" style="color: #496ffb"></i></span>Bluetooth-enabled app</li>
                                <li><span class="fa-li" ><i class="fas fa-cookie-bite" style="color: #496ffb"></i></span>USB-rechargeable battery</li>
                                <li><span class="fa-li" ><i class="fas fa-cookie-bite" style="color: #496ffb"></i></span>Powerful flash</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section class="about productSiteText productSite_yellow_bg">
                    <div>
                        <div class="about_title">
                            <h2>The Next Step.</h2>
                        </div>
                        <div class="about_description">
                            <p class="productSiteDescription">
                                Inspired by the original OneStep camera from 1977, 
                                the Polaroid OneStep 2 and OneStep+ are analog instant cameras for the modern era. 
                                Whether yours is connected to your phone, or helping you unplug, you'll discover new ways to play and share a moment you can hold.
                            </p>
                        </div>
                    </div>
                </section>
                <section class="bg-3 bg"></section>
                <section class="bg-4 bg"></section>
                <section class="buy productSiteText productSite_white_bg">
                    <div>
                        <div class="buy_top">
                            <h2>$129.00</h2>
                            <p>plus shipping taxes</p>
                        </div>
                        <div class="buy_middle">
                            <button>Buy Now</button>
                            <i class="fas fa-lock"></i>
                            <p>Payments are processed via secure Shopify server</p>
                        </div>
                        <div class="buy_bottom">
                            <p>Expected to ship by end of September. We ship worldwide.</p>
                        </div>
                    </div>
                </section>
            </main>
            <div class="productFooter">
                <div class="productFooter_subscribee">
                    <h3>Stay In The Loop</h3>
                    <p>enter your email for featured stories and tools</p>
                    <form action="" method="post">
                        <input type="email" placeholder="email adress">
                        <input id="subscribeButton" type="button" value="Subscribe">    
                    </form>
                </div>
                <div class="productFooter_contact">
                    <div class="productFooter_contact_greeting">
                        <h3>say hello at <a href="">hello@fantasyemail.com</a></h3>
                    </div>
                    <div class="productFooter_contact_icons">
                        <a href=""><i class="fab fa-facebook fa-2x"></i></a>
                        <a href=""><i class="fab fa-instagram fa-2x"></i></a>
                        <a href=""><i class="fab fa-twitter fa-2x"></i></a>
                    </div>
                    <div class="productFooter_contact_messageUs">
                        <button><i class="fab fa-facebook-messenger fa-lg"></i> Message Us</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="sass" scoped>
@import url('https://fonts.googleapis.com/css?family=Lato|Source+Sans+Pro')
$font-one: 'Source Sans Pro', sans-serif
$font-two: 'Lato', sans-serif
.productSite
    background-color: #fff6e9
    width: 100%
    height: auto
    font-family: $font-one
    button
        padding: 0.6rem
        border-radius: 4px
        border: 1px solid rgb(220, 196, 172)
        font-size: 16px
        background-color: #496ffb
        color: #FFF
        font-weight: 600 
        font-family: "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif
        cursor: pointer
    a
        text-decoration: none
        color: #496ffb
    .productSiteDescription
        margin-bottom: 0.8rem
    .productSiteText
        padding: 0.8rem
        display: flex
        align-items: center
.productSite h3, .productSite h2
    font-weight: 900
    margin-bottom: 1rem
.productSite h2
    font-size: 2rem
    color: #496ffb
.productSite h3
    font-size: 1.5rem
.productContainer
    width: 100%
    max-width: 960px
    margin: auto
section
    height: 400px
.bg
    background-size: cover
    background-position: center
.bg-1
    background-image: url("../../static/img/productPage/polaroid_new_ideas_resized.jpg")
.bg-2
    background-image: url("../../static/img/productPage/polaroid_description_resized.jpg")
.bg-3
    background-image: url("../../static/img/productPage/polaroid_about_resized.jpg")
.bg-4
    background-image: url("../../static/img/productPage/polaroid_buy_resized.jpg")
//header
.productHeader_sales
    font-family: $font-two
    text-align: center
    background-color: #21262d
    color: #FFF
    padding: 0.6rem
.productHeader_header
    padding: 1rem
    background-color: #FFF
    img
        height: 2.625rem
        width: auto
    i
        color: #21262d
        float: right
//main
.productSite_yellow_bg
    background-color: #f7efe4
.productSite_white_bg
    background-color: #FFF
main
    display: flex
    flex-wrap: wrap
    section
        width: 50%
    @media screen and (max-width: 667px)
        flex-wrap: nowrap
        flex-direction: column
        section
            width: 100%
            height: 300px
            .bg
                background-position: center-bottom
        .newIdeas
            order: 1
            text-align: center
        .bg-1
            order: 2
        .description
            order: 3
        .bg-2
            order: 4
        .about
            order: 5
            text-align: center
        .bg-3
            order: 6
        .buy
            order: 7
        .bg-4
            order: 8
.newIdeas_actions
    a
        margin-left: 1rem
        vertical-align: middle
    i
        margin-right: 0.2rem
        vertical-align: middle
.productSiteDescription
    text-align: justify
.buy_top
    h2
        margin-bottom: 0
.buy_top p, .buy_middle p
    margin-bottom: 1.2rem
    font-size: 0.7rem
    color: grey
.buy_middle
    button
        display: block
        margin-bottom: 1rem
    p
        display: inline
    i
        color: #496ffb
        margin-right: 0.2rem
        vertical-align: middle
.buy_bottom
    margin-top: 1rem
//footer
.productFooter > div
    width: 50%
.productFooter h3
    margin-bottom: 1rem
.productFooter
    padding-bottom: 2rem
    padding-top: 2rem
    display: flex
    flex-wrap: wrap
    .productFooter_subscribee
        p
            margin-bottom: 0.5rem
        input
            display: block
            margin-bottom: 0.3rem
            width: 100%
            padding: 0.6rem
            border-radius: 4px
            border: 1px solid rgb(220, 196, 172)
            font-size: 16px
        #subscribeButton
            background-color: #496ffb
            color: #FFF
            font-weight: 600 
            font-family: "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif
    .productFooter_contact
        text-align: center
        .productFooter_contact_icons
            text-align: center
            margin-bottom: 1rem
            i
                color: #496ffb
                text-align: center
            a:nth-of-type(2)
                margin-right: 1.5rem
                margin-left: 1.5rem
        .productFooter_contact_messageUs
            text-align: center
    @media screen and (max-width: 667px)
        flex-direction: column
        & > div
            width: 70%
            margin: auto
        & > div:nth-of-type(2)
            margin-top: 1rem
</style>


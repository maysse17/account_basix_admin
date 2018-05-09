<template>
    <div class="vue-progressbarsss">

        <div class="col-md-12 mb-3">
            <progress-bar class="line" ref="basicLine" type="line" :options="lineBasicOptions"></progress-bar>
        </div>
        <div class="col-md-12 mb-3">
            <progress-bar class="line" ref="percentLine" type="line" :options="linePercentOptions"></progress-bar>
        </div>
        <div class="col-md-12 mb-3">
            <progress-bar class="line" ref="colorAnimationLine" type="line" :options="lineColorAnimationOptions"></progress-bar>
        </div>
        <div class="col-md-6 mb-3">
            <progress-bar class="circle" ref="basicCircle" type="circle" :options="circleBasicOptions"></progress-bar>
        </div>
        <div class="col-md-6 mb-3">
            <progress-bar class="circle" ref="bounceEasingCircle" type="circle" :options="circleBounceEasingOptions"></progress-bar>
        </div>
        <div class="col-md-6 mb-3">
            <progress-bar class="circle" ref="multiplePropertiesCircle" type="circle" :options="circleMultiplePropertiesOptions"></progress-bar>
        </div>
        <div class="col-md-6 mb-3">
            <progress-bar class="heart" ref="customHeart" type="path" path-id="heart-path" :options="customHeartOptions">
                <svg slot="svg" xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 100 100">
                    <path fill-opacity="0" stroke-width="1" stroke="#bbb" d="M81.495,13.923c-11.368-5.261-26.234-0.311-31.489,11.032C44.74,13.612,29.879,8.657,18.511,13.923  C6.402,19.539,0.613,33.883,10.175,50.804c6.792,12.04,18.826,21.111,39.831,37.379c20.993-16.268,33.033-25.344,39.819-37.379  C99.387,33.883,93.598,19.539,81.495,13.923z"/>
                    <path id="heart-path" fill-opacity="0" stroke-width="3" stroke="#f86c6b" d="M81.495,13.923c-11.368-5.261-26.234-0.311-31.489,11.032C44.74,13.612,29.879,8.657,18.511,13.923  C6.402,19.539,0.613,33.883,10.175,50.804c6.792,12.04,18.826,21.111,39.831,37.379c20.993-16.268,33.033-25.344,39.819-37.379  C99.387,33.883,93.598,19.539,81.495,13.923z"/>
                </svg>
            </progress-bar>
        </div>


    </div>
</template>

<script>
    import ProgressBar from './vue-progress/ProgressBar.vue'
    import { ANIMATE_DURATION, ANIMATE_DELAY, OPTIONS } from './vue-progress/constants'

    function loopAnimate (target) {
        target.animate(1.0, () => {
            setTimeout(target.animate(0, () => {
                setTimeout(loopAnimate(target), ANIMATE_DELAY)
            }), ANIMATE_DELAY)
        })
    }
    export default {
        name: 'vue-progress-bar',
        components: {
            ProgressBar
        },
        data () {
            return {
                title: 'progressbar.js',
                subtitle: 'As a Vue Component',
                lineBasicOptions: OPTIONS.LINE_BASIC,
                linePercentOptions: OPTIONS.LINE_PERCENT,
                lineColorAnimationOptions: OPTIONS.LINE_COLOR_ANIMATION,
                circleBasicOptions: OPTIONS.CIRCLE_BASIC,
                circleBounceEasingOptions: OPTIONS.CIRCLE_BOUNCE_EASING,
                circleMultiplePropertiesOptions: OPTIONS.CIRCLE_MULTIPLE_PROPERTIES,
                customHeartOptions: OPTIONS.CUSTOM_HEART
            }
        },
        mounted () {
            this.init()
        },
        methods: {
            init () {
                let basicLine = this.$refs.basicLine
                loopAnimate(basicLine)
                let percentLine = this.$refs.percentLine
                loopAnimate(percentLine)
                let colorAnimationLine = this.$refs.colorAnimationLine
                loopAnimate(colorAnimationLine)
                let basicCircle = this.$refs.basicCircle
                loopAnimate(basicCircle)
                let bounceEasingCircle = this.$refs.bounceEasingCircle
                loopAnimate(bounceEasingCircle)
                let multiplePropertiesCircle = this.$refs.multiplePropertiesCircle
                loopAnimate(multiplePropertiesCircle)
                let customHeart = this.$refs.customHeart
                loopAnimate(customHeart)
            }
        }
    }
</script>

<style scoped>
    .line {
        width: 100%;
        height: 6px;
        margin-bottom: 20px;
    }
    .circle {
        width: 200px;
        height: 200px;
    }
    .heart {
        width: 200px;
        height: 200px;
    }
</style>

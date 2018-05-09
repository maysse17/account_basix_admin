export const LINE = 'line'
export const CIRCLE = 'circle'
export const PATH = 'path'


export const ANIMATE_DURATION = 4000
export const ANIMATE_DELAY = 400

const LINE_BASIC = {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: ANIMATE_DURATION,
  color: '#28a745',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: { width: '100%', height: '100%' }
}

const LINE_PERCENT = {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: ANIMATE_DURATION,
  color: '#FFEA82',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'},
  text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: '#999',
      position: 'absolute',
      right: '0',
      top: '30px',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
  },
  from: {color: '#ffc107'},
  to: {color: '#ED6A5A'},
  step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 100) + ' %')
  }
}

const LINE_COLOR_ANIMATION = {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: ANIMATE_DURATION,
  color: '#f86c6b',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'},
  from: {color: '#f86c6b'},
  to: {color: '#63c2de'},
  step: (state, bar) => {
    bar.path.setAttribute('stroke', state.color)
  }
}

const CIRCLE_BASIC = {
  strokeWidth: 5,
  easing: 'easeInOut',
  duration: ANIMATE_DURATION,
  color: '#28a745',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: null
}

const CIRCLE_BOUNCE_EASING = {
  color: '#63c2de',
  trailColor: '#eee',
  trailWidth: 1,
  duration: ANIMATE_DURATION,
  easing: 'bounce',
  strokeWidth: 5,
  from: {color: '#63c2de', a:0},
  to: {color: '#ffc107', a:1},
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color)
  }
}

const CIRCLE_MULTIPLE_PROPERTIES = {
  color: '#4dbd74',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 4,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: ANIMATE_DURATION,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#4dbd74', width: 1 },
  to: { color: '#63c2de', width: 4 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color)
    circle.path.setAttribute('stroke-width', state.width)
    var value = Math.round(circle.value() * 100)
    if (value === 0) {
      circle.setText('')
    } else {
      circle.setText(value)
    }
  }
}

const CUSTOM_HEART = {
  easing: 'easeInOut',
  duration: ANIMATE_DURATION
}

// example options
export const OPTIONS = {
  LINE_BASIC,
  LINE_PERCENT,
  LINE_COLOR_ANIMATION,
  CIRCLE_BASIC,
  CIRCLE_BOUNCE_EASING,
  CIRCLE_MULTIPLE_PROPERTIES,
  CUSTOM_HEART
}

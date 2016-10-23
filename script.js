var imgId = 0
$(document).ready(function () {
    // on page load...
    moveProgressBar()
    // on browser resize...
    $(window).resize(function() {
        moveProgressBar()
    });

    // SIGNATURE PROGRESS
    function moveProgressBar() {
        console.log("moveProgressBar")
        var getPercent = ($('.progress-wrap').data('progress-percent') / 100.0)
        console.log(getPercent)
        var getProgressWrapWidth = $('.progress-wrap').width()
        var progressTotal = getPercent * getProgressWrapWidth
        var animationLength = 2500
        console.log(progressTotal)

        // on page load, animate percentage bar to data percentage length
        // .stop() used to prevent animation queueing
        $('.progress-bar').stop().animate({
            left: progressTotal
        }, animationLength)

    }

  $('#poolersContainer').click(function() {
    var name = ["Rafikah", "Harris", "Ravi", "Timothy", "Anh Vu"]
    var progress = [20, 40, 60, 80, 100]
    imgId++
    person = name[imgId]
    bar = progress[imgId]
    console.log(imgId)
    if (bar < 101) {
      $('#contributorsDp').append("<div class='contributorSquare'><div id='contributorIcon" + imgId + "'></div><div id='name" + imgId + "'>" + person + "</div></div>")
      $('.progress-wrap').data('progress-percent', bar)
      moveProgressBar()
    }

    if(bar == 100) {
      $('#contributorsDp').append("<div id='savings'>Saved $7.80 Per Purchase</div>")
    }

    if(bar === 100) {
      $('#completedPayment').css({'background-color': '#00CA72', 'color': '#fff', 'border': 'none'})
      $('#poolersContainer').css({'border-color': '#00CA72', 'border-width': '3px'})

    }

  })
})

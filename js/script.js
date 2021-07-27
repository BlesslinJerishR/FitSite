// Intro
var textWrapper = document.querySelector('.mov');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.mov .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.mov',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

$(".hover").mouseleave(
  function () {
    $(this).removeClass("hover");
  }
);

$(document).ready(function () {
    var basicTimeline = anime.timeline(),
        doneTimeline = anime.timeline();
    var trigger = true;

    $('form .btn').click(function (e) {
        e.preventDefault();
        if ($(this).hasClass('first')) {
            trigger = false;
            $(this).removeClass('first').addClass('active');
            basicTimeline
                .add({
                    targets: 'button',
                    width: 65,
                    paddingLeft: 17,
                    paddingRight: 17,
                    translateX: 97,
                    scale: 1.2,
                    duration: 1500
                })
                .add({
                    targets: 'form input',
                    width: 370,
                    opacity: 1,
                    duration: 2000,
                    offset: '-=1500'
                })
                .add({
                    targets: 'form button img',
                    opacity: 1,
                    translateX: 15,
                    duration: 2000,
                    offset: '-=1700',
                    complete: function(anim) {
                        trigger = true;
                    }
                })
        } else if ($(this).hasClass('active') && trigger) {
            $(this).removeClass('active').addClass('done');
            doneTimeline
                .add({
                    targets: 'button',
                    translateX: 180,
                    duration: 1500,
                    scale: 1.2
                })
                .add({
                    targets: 'button img',
                    opacity: 0,
                    duration: 1000,
                    offset: '-=1200'
                })
                .add({
                    targets: 'button',
                    width: 187,
                    scale: 1.2,
                    translateX: -23,
                    duration: 1500,
                    offset: '-=1000'
                })
                .add({
                    targets: 'form input',
                    width: 0,
                    translateX: -193,
                    duration: 1500,
                    offset: '-=1500'
                })
                .add({
                    targets: 'form button .done',
                    opacity: 1,
                    duration: 1000,
                    offset: '-=1500'
                })
        }
    });

});

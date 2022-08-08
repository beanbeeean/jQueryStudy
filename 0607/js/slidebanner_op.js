$(document).ready(function () {

    // 초기값 선언
    var current = 0;
    var i = 0;
    var setIntervalid;

    $('.btns > li').click(function () {
        var i = $(this).index();

        $('.btns > li').removeClass('on');
        $('.btns > li').eq(i).addClass('on');

        move(i);
    });

    $('#main_img').hover(
        function () {
            clearInterval(setIntervalid);
        },

        function () {
            timer();
        }
    )

    timer();
    function timer() {
        setIntervalid = setInterval(function () {
            i = i + 1;
            if (i == 3) {
                i = 0;
            }
            $('.btns > li').removeClass('on');
            $('.btns > li').eq(i).addClass('on');
            move(i);
        }, 3000);

        $('.btns > li').removeClass('on');
        $('.btns > li').eq(i).addClass('on');
    }

    function move(n) {
        if (current == n) return;
        // 현재 보이는 슬라이드와 클릭한 버튼의 인덱스값이 같다면 다음 코딩을 수행하지않고 나감

        var currentEl = $('#imgs > ul > li').eq(current);
        var nextEl = $('#imgs > ul > li').eq(n);

        currentEl.stop().css({ opacity: 1 }).animate({ opacity: 0 });
        nextEl.stop().css({ opacity: 0 }).animate({ opacity: 1 });

        current = n;
    }
});
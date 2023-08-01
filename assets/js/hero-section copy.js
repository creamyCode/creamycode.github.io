(function ($) {
    "use strict";

    const startDt = moment('2013-11-04 09:00:00', 'YYYY-MM-DD HH:mm:ss')
    const totalDiffMonth = moment().diff(startDt, 'month');
    const diffYear = Math.floor(totalDiffMonth / 12)
    const diffMonth = totalDiffMonth % 12

    const str = [
        `올해로 ${diffYear}년 ${diffMonth ? `${diffMonth}개월 ` : ''}차이며 개발이 아직도 즐겁습니다...`.split(''),
        `부족하지만 2년동안 팀장 업무도 수행해봤는데..`
    ];


    
    let idx = 1;
    setTimeout(() => {
        const timer = setInterval(() => {
            document.querySelector('.animation-area').innerHTML = str.slice(0, idx).join('');
            idx++;

            // 글씨 다쓰고 2초뒤 전체 영역 선택효과
            if (idx > str.length + 10) {
                document.querySelector('.animation-area').classList.add('selected')
            }

            // 전체 영역 선택후 1초후 삭제 효과
            if (idx > str.length + 15) {
                document.querySelector('.animation-area').innerHTML = '';
                document.querySelector('.animation-area').classList.remove('selected')
            }

            // 삭제후 3초동안 기다리기
            if (idx > str.length + 30) {
                idx = 1;
            }
        }, 200)
    }, 3000)
})(window.jQuery);
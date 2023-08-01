(function ($) {
    "use strict";

    const startDt = moment('2013-11-04 09:00:00', 'YYYY-MM-DD HH:mm:ss')
    const totalDiffMonth = moment().diff(startDt, 'month');
    const diffYear = Math.floor(totalDiffMonth / 12)
    const diffMonth = totalDiffMonth % 12

    const str = [
        `올해로    ${diffYear}년 ${diffMonth ? `${diffMonth}개월 ` : ''}차...            아직도 개발이 즐겁습니다.`.split(''),
        `이슈를 해결했을때의 희열 . . .   `.split(''),
        `사용자로부터 좋은 피드백을 받았을때의 기쁨 .  .  .   `.split(''),
        `끝까지 봐주신 형님, 누님들 감사합니다 ~ !!!                    `.split('')
    ];

    let idx = 1;
    let strIdx = 0;
    setTimeout(() => {
        const timer = setInterval(() => {
            document.querySelector('.animation-area').innerHTML = str[strIdx].slice(0, idx).join('');
            idx++;

            // 글씨 다쓰고 2초뒤 전체 영역 선택효과
            if (idx > str[strIdx].length + 10) {
                document.querySelector('.animation-area').classList.add('selected')
            }

            // 전체 영역 선택후 1초후 삭제 효과
            if (idx > str[strIdx].length + 15) {
                document.querySelector('.animation-area').innerHTML = '';
                document.querySelector('.animation-area').classList.remove('selected')
            }

            // 삭제후 3초동안 기다리기
            if (idx > str[strIdx].length + 30) {
                idx = 1;
                strIdx = strIdx < str.length - 1 ? strIdx + 1 : 0;
            }
        }, 200)
    }, 3000)
})(window.jQuery);
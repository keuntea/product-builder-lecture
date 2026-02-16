document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const numberSpans = document.querySelectorAll('.number');

    console.log('버튼 요소:', generateBtn);
    console.log('숫자 요소 개수:', numberSpans.length);

    function getLottoColor(num) {
        if (num <= 10) return '#fbc400';
        if (num <= 20) return '#69c8f2';
        if (num <= 30) return '#ff7272';
        if (num <= 40) return '#aaa';
        return '#b0d840';
    }

    function generateNumbers() {
        console.log('번호 생성 시작');
        const numbers = [];
        while (numbers.length < 6) {
            const num = Math.floor(Math.random() * 45) + 1;
            if (!numbers.includes(num)) {
                numbers.push(num);
            }
        }
        numbers.sort((a, b) => a - b);

        numberSpans.forEach((span, index) => {
            const num = numbers[index];
            span.textContent = num;
            span.style.backgroundColor = getLottoColor(num);
            span.style.color = (num <= 10 || num > 40) ? '#000' : '#fff';
            // 애니메이션 없이 즉시 보이도록 설정
            span.style.transform = 'scale(1)';
            span.style.opacity = '1';
        });
    }

    if (generateBtn) {
        generateBtn.addEventListener('click', generateNumbers);
    } else {
        console.error('generate-btn을 찾을 수 없습니다.');
    }

    // 초기 실행
    generateNumbers();
});

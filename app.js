// alert('하이')
// 사진 클래스 panel 모두 선택
const panels = document.querySelectorAll('.panel');  //panels는 배열로 표시
//반복문
// panels.forEach()


// 1. 전통적인 반복문
for (let i = 0; i < panels.length; i++) {
    panels[i].addEventListener('click', function () {
        //클래스의 active 비활성화/삭제 후 하나만 활성화
        removeAllActive();
        panels[i].classList.add('active');
    })
}

function removeAllActive() {
    for (let i = 0; i < panels.length; i++) {
        panels[i].classList.remove('active');
    }
}





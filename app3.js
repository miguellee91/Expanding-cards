// alert('하이')
// 사진 클래스 panel 모두 선택
const panels = document.querySelectorAll('.panel');  //panels는 배열로 표시
//반복문
//3. foreach
panels.forEach(function (item) {
    item.addEventListener('click', function () {

        removeAllActive();
        item.classList.add('active');
    })
})
function removeAllActive() {
    panels.forEach(function (item) {
        item.classList.remove('active');
    })
}
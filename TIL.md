1. window.confirm 메소드 복습

notesContainer.addEventListener('click', function (e) {
if (window.confirm('메모를 삭제하시겠습니까?')) {
e.target.parentElement.remove();
updateStorage(); //localstorage 내용도 사라짐
} else {
return;}
}
)

2. Cannot use import statement outside a module 문제 해결
<script src="timeStamp.js" type="module"></script> 와 같이 module 추가

3. 파일 경로 등이 올바른데도 module import가 안되고 있음
   GET http://127.0.0.1:5500/ddanjitTable/timeStamp net::ERR_ABORTED 404 (Not Found)
   확장자 확인: import 문을 사용할 때, ES6 모듈에서는 파일 확장자를 생략해도 되지만, 브라우저가 ES6 모듈을 직접 지원하지 않거나 다른 설정이 필요할 경우에는 확장자를 포함해야 할 수도 있습니다.
   import timeStamp from './timeStamp.js';

4. return 문 사용
   timestamp 기능을 import 해서 사용하고 싶으면 return 되는 것이 무엇인지 확인하기

   return `${years}년 ${months}월 ${dates}일 ${days} ${hours}:${minutes}:${seconds}`; 이렇게 바꾸면 된다.

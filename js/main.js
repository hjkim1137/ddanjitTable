import { updateStorage } from './storage.js';

export const notesContainer = document.querySelector('.notesContainer'); // 노트들의 묶음
let allNotes = document.querySelectorAll('.inputBox'); // 모든 입력 영역 선택

// 노트안 각 요소(인풋, 삭제이미지, 드롭박스)에 대한 이벤트 리스너
notesContainer.addEventListener('click', function (e) {
  if (e.target.tagName === 'IMG') {
    if (window.confirm('메모를 삭제하시겠습니까?')) {
      e.target.parentElement.remove(); // 전체 메모 삭제
      updateStorage(); //localstorage 내용도 사라짐
    } else {
      // 삭제 취소
      return; // 그대로 반환
    }
  } else if (e.target.tagName === 'INPUT') {
    allNotes = document.querySelectorAll('.inputDiv');
    allNotes.forEach((nt) => {
      nt.onkeyup = function () {
        updateStorage(); // 내용 로컬스토리지에 저장
      };
    });
  } else if (e.target.tagName === 'SELECT') {
    allNotes = document.querySelectorAll('.dropBox').forEach((option) => {
      option.addEventListener('change', updateStorage);
    });
  }
  // 'select'는 SELECT 요소의 메소드가 아님.
  // option을 선택할 때마다 이벤트 발생시키려면 select가 아닌 change 이벤트 사용해야 함
});
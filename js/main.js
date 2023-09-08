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
    allNotes = document.querySelectorAll('.inputDiv, .solutionInput'); // 두 개 같이 저장 가능
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
});

import timeStamp from './timeStamp.js';

const notesContainer = document.querySelector('.notes-container');
const createBtn = document.querySelector('.btn');
let notes = document.querySelectorAll('.input-box'); // 모든 인풋 박스 선택

function showNotes() {
  notesContainer.innerHTML = localStorage.getItem('notes');
}
showNotes();

function updateStorage() {
  localStorage.setItem('notes', notesContainer.innerHTML);
}

// 메모 영역 만들기 - html 주석처리된 부분을 만들어준다고 생각하면 된다.
createBtn.addEventListener('click', () => {
  let contentBox = document.createElement('div');
  let inputBox = document.createElement('div'); // 실제 입력창
  let img = document.createElement('img');

  contentBox.className = 'input-box';

  inputBox.setAttribute('contenteditable', 'true');
  inputBox.className = 'input-div';

  img.src = 'images/delete.png';

  let timeBox = document.createElement('div');
  timeBox.innerHTML = timeStamp(); // timestamp 호출
  timeBox.setAttribute('contenteditable', 'false');
  timeBox.className = 'time-stamp';

  contentBox.appendChild(inputBox);
  contentBox.appendChild(img);
  contentBox.appendChild(timeBox);
  notesContainer.appendChild(contentBox);
});

notesContainer.addEventListener('click', function (e) {
  if (e.target.tagName === 'IMG') {
    if (window.confirm('메모를 삭제하시겠습니까?')) {
      e.target.parentElement.remove();
      updateStorage(); //localstorage 내용도 사라짐
    } else {
      return;
    }
  } else if (e.target.tagName === 'DIV') {
    notes = document.querySelectorAll('.input-box');
    notes.forEach((nt) => {
      nt.onkeyup = function () {
        updateStorage(); // 내용 로컬스토리지에 저장
      };
    });
  }
});

import timeStamp from './timeStamp.js';

const notesContainer = document.querySelector('.notesContainer');
const createBtn = document.querySelector('.btn');
let allNotes = document.querySelectorAll('.inputBox'); // 모든 입력 영역 선택

// 저장된 노트 로컬스토리지에서 불러오기
function showNotes() {
  notesContainer.innerHTML = localStorage.getItem('allNotes');
}
showNotes();

// 모든 노트 갱신하기
function updateStorage() {
  localStorage.setItem('allNotes', notesContainer.innerHTML);
}

// 메모 영역 만들기
createBtn.addEventListener('click', () => {
  let contentBox = document.createElement('div'); // 각 노트
  contentBox.className = 'contentDiv';

  let inputBox = document.createElement('div'); // '새롭게' 생성되는 입력 영역
  inputBox.setAttribute('contenteditable', 'true');
  inputBox.className = 'inputDiv';

  let img = document.createElement('img');
  img.src = 'images/delete.png';

  let timeBox = document.createElement('div');
  timeBox.innerHTML = timeStamp(); // timestamp 호출
  timeBox.setAttribute('contenteditable', 'false');
  timeBox.className = 'timeStamp';

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
    allNotes = document.querySelectorAll('.inputDiv');
    allNotes.forEach((nt) => {
      nt.onkeyup = function () {
        updateStorage(); // 내용 로컬스토리지에 저장
      };
    });
  }
});

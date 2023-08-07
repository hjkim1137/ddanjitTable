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

createBtn.addEventListener('click', () => {
  let inputBox = document.createElement('p');
  let img = document.createElement('img');
  inputBox.className = 'input-box';
  inputBox.setAttribute('contenteditable', 'true');
  img.src = 'images/delete.png';
  notesContainer.appendChild(inputBox).appendChild(img);
});

notesContainer.addEventListener('click', function (e) {
  if (e.target.tagName === 'IMG') {
    e.target.parentElement.remove();
    updateStorage(); //localstorage 내용도 사라짐
  } else if (e.target.tagName === 'P') {
    notes = document.querySelectorAll('.input-box');
    notes.forEach((nt) => {
      nt.onkeyup = function () {
        updateStorage(); // 내용 로컬스토리지에 저장
      };
    });
  }
});

// 이 처리 안하면 새로고침 하면 글자가 input 박스 밖으로 튕겨나감
document.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    document.execCommand('insertLineBreak');
    event.preventDefault();
  }
});

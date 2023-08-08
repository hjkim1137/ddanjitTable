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

// 주석처리된 부분을 만들어준다고 생각하면 된다.
createBtn.addEventListener('click', () => {
  let inputBox = document.createElement('div');
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
  } else if (e.target.tagName === 'DIV') {
    notes = document.querySelectorAll('.input-box');
    notes.forEach((nt) => {
      nt.onkeyup = function () {
        updateStorage(); // 내용 로컬스토리지에 저장
      };
    });
  }
});

function timeStamp() {
  const today = new Date();
  console.log(today);
  const years = today.getFullYear(); // 년도 가져오기
  const months = today.getMonth() + 1; // 월 가져오기
  const dates = today.getDate(); // 일 가져오기
  const week = [
    '일요일',
    '월요일',
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일',
  ];
  const days = week[today.getDay()]; // 요일 가져오기

  const modifyNumber = (number) => {
    return parseInt(number) < 10 ? '0' + number : number;
  };

  const hours = modifyNumber(today.getHours()); // 변수가 변하기때문에, const로 선언하면 error 발생
  const minutes = modifyNumber(today.getMinutes());
  const seconds = modifyNumber(today.getSeconds());
  console.log(
    `${years}년 ${months}월 ${dates}일 ${days} ${hours}:${minutes}:${seconds}`
  );
}

timeStamp();

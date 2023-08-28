import { timeStamp } from './timeStamp.js';
import { updateStorage } from './storage.js';
import { notesContainer } from './main.js';

// 메모 레이아웃 그리기
export function createNote(noteValue, solutionValue, selectValue) {
  let contentBox = document.createElement('div'); // 개별 노트 생성(가장 큰 틀)
  contentBox.className = 'contentDiv';

  // input 박스 생성
  let inputBox = document.createElement('input'); // input 박스 생성
  inputBox.className = 'inputDiv';
  inputBox.value = noteValue; // 사용자가 입력한 값을 noteValue에 저장
  inputBox.placeholder = '딴짓을 기록하세요.';

  // 대처방법 생성
  let solutionBox = document.createElement('input'); // input 박스 생성
  solutionBox.className = 'solutionInput';
  solutionBox.value = solutionValue;
  solutionBox.placeholder = '대처하기 위한 아이디어';

  //  메모 삭제 이미지 생성
  let img = document.createElement('img');
  img.src = 'images/delete.png';

  // 타임스탬프 생성
  let timeBox = document.createElement('div');
  timeBox.innerHTML = timeStamp(); // timestamp 함수 호출
  timeBox.setAttribute('contenteditable', 'false'); // 시간 변경 불가
  timeBox.className = 'timeStamp';

  // 드롭박스 생성
  // option은 드롭다운 버튼 눌렀을 때 열거되는 목록
  let dropBox = document.createElement('select'); //select 생성
  dropBox.className = 'dropBox';

  const options = ['내부계기', '외부계기', '잘못된 계획'];
  for (let optionChild of options) {
    let option = document.createElement('option');
    option.text = optionChild;
    dropBox.appendChild(option);
  }
  dropBox.value = selectValue;

  // 그룹화
  contentBox.appendChild(inputBox);
  contentBox.appendChild(solutionBox);
  contentBox.appendChild(img);
  contentBox.appendChild(dropBox);
  contentBox.appendChild(timeBox);
  notesContainer.appendChild(contentBox);
}

// 생성하기 버튼 이벤트 리스너
const createBtn = document.querySelector('.btn');
createBtn.addEventListener('click', () => {
  createNote('', '', '내부계기');
  updateStorage();
});

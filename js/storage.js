import { createNote } from './createNote.js';
import { notesContainer } from './main.js';

// 로컬스토리지에 노트 갱신(수정)하기
export function updateStorage() {
  const notesArray = Array.from(
    notesContainer.querySelectorAll('.inputDiv')
  ).map((input) => input.value);

  const solutionsArray = Array.from(
    notesContainer.querySelectorAll('.solutionInput')
  ).map((solution) => solution.value);

  const selectsArray = Array.from(
    notesContainer.querySelectorAll('.dropBox')
  ).map((select) => select.value);

  const savedData = {
    notes: notesArray,
    solutions: solutionsArray,
    selects: selectsArray,
  };
  // console.log('savedData', savedData);
  saveToLocalStorage(savedData);
}

// 로컬스토리지 저장
function saveToLocalStorage(data) {
  localStorage.setItem('allNotes', JSON.stringify(data)); // 문자열로 변환하여 저장
}

// 저장데이터 로컬스토리지에서 파싱하여 불러오기
function parseSavedData() {
  return JSON.parse(localStorage.getItem('allNotes'));
}

// 파싱한 데이터를 화면에 그리기
function showNotes() {
  const showData = parseSavedData();
  console.log('showData', showData);
  for (let i = 0; i < showData.notes.length; i++) {
    const note = showData.notes[i];
    const solution = showData.solutions[i];
    const select = showData.selects[i];
    createNote(note, solution, select);
  }
}
showNotes();

//트러블 슈팅
// [이전]
// for (let i = 0; i < showData.length; i++)

// [이후]
// for (let i = 0; i < showData.notes.length; i++)
// for는 배열에 사용된다. 객체안의 배열에 접근하려면 배열인 notes에 접근해야 함.

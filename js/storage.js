import { createNote } from './createNote.js';
import { notesContainer } from './main.js';

// 로컬스토리지에 노트 갱신(수정)하기
export function updateStorage() {
  const notesArray = Array.from(
    notesContainer.querySelectorAll('.inputDiv')
  ).map((input) => input.value);

  const selectsArray = Array.from(
    notesContainer.querySelectorAll('.dropBox')
  ).map((select) => select.value);

  const savedData = {
    notes: notesArray,
    selects: selectsArray,
  };
  saveToLocalStorage(savedData);
}

// 로컬스토리지 저장
function saveToLocalStorage(data) {
  localStorage.setItem('allNotes', JSON.stringify(data));
}

// 저장데이터 로컬스토리지에서 파싱하여 불러오기
function parseSavedData() {
  return (
    JSON.parse(localStorage.getItem('allNotes')) || {
      notes: [],
      selects: [],
    }
  );
}
// 저장된 데이터가 있으면 그걸 가져오고, 없으면 빈 배열 가져오기

// 파싱한 데이터를 화면에 그리기
function showNotes() {
  const savedData = parseSavedData();
  console.log('savedData', savedData);
  savedData.notes.forEach((note, index) => {
    createNote(note, savedData.selects[index]);
  });
}
showNotes();

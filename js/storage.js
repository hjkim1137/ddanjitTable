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

// 로컬스토리지에 저장되는 형식:
// notes: ['하이', '안녕', '메롱'];
// selects: ['외부계기', '내부계기', '잘못된 계획'];

// savedData.notes.forEach((note, index) => { 여기에서 note, index 값을 받는다.
// notes는 savedData 에서 notes: notesArray, 즉 input.value로 배열로 저장되어 있다.
// note는 각각의 요소이다 : 하이, 안녕, 메롱
// 각 요소의 index는 0 1 2

// createNote 함수는 사용자가 입력한 값인 noteValue, selectValue를 인자로 받는 함수이다.
// showNotes 함수에서 createNote 콜백 함수를 호출하면서
// noteValue, selectValue는 각각 note, savedData.selects[index]가 되었다.
// 아까 인덱스는 select와 상응되게 동일한 index 값을 갖는다.

// forEach(요소,인덱스, 배열)를 받는다 맨 마지막 배열은 잘 안쓰인다.

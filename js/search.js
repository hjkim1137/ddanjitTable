function filter() {
  let searchValue = searchInput.value.toLowerCase(); // 대소문자를 구분하지 않는 검색을 위해 소문자 변환
  let notes = document.querySelectorAll('.inputDiv');

  for (let i = 0; i < notes.length; i++) {
    if (notes[i].value.toLowerCase().includes(searchValue)) {
      // 대소문자를 구분하지 않는 검색을 위해 소문자 변환
      notes[i].parentElement.style.display = 'flex';
    } else {
      notes[i].parentElement.style.display = 'none';
    }
  }
}
let searchInput = document.querySelector('.searchBox');
searchInput.addEventListener('input', filter);

// 마찬가지로 input으로 수정했기 때문에, innerHTML 속성은 적용되지 않는다. value 속성 사용해야 함.

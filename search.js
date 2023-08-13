function filter() {
  let searchValue = searchInput.value.toLowerCase(); // 대소문자를 구분하지 않는 검색을 위해 소문자 변환
  let notes = document.querySelectorAll('.inputDiv');

  for (let i = 0; i < notes.length; i++) {
    if (notes[i].innerHTML.toLowerCase().includes(searchValue)) {
      // 대소문자를 구분하지 않는 검색을 위해 소문자 변환
      notes[i].parentElement.style.display = 'flex';
    } else {
      notes[i].parentElement.style.display = 'none';
    }
  }
}
let searchInput = document.querySelector('.searchBox');
searchInput.addEventListener('input', filter);

// 함수 호출 시기: searßch.js 파일이 로드될 때 filter() 함수를 한 번만 호출하는 문제
// 일반적으로는 검색 입력값이 변경될 때마다 filter 함수를 트리거하려고 합니다.
// 검색 입력에 대한 이벤트 리스너 추가: 입력값이 변경될 때마다 filter 함수가 트리거되도록 검색 입력에 이벤트 리스너를 추가합니다:
// filter 함수 내부에 addEventListener를 추가하는 것은 적절하지 않습니다.
// 중복 리스너: 만약 filter 함수 내에서 addEventListener를 사용하여 이벤트 리스너를 추가하면, filter 함수가 호출될 때마다 새로운 이벤트 리스너가 계속 추가됩니다. 즉, 사용자가 입력 상자에 문자를 입력할 때마다 filter 함수가 여러 번 호출되게 됩니다.
// 무한 루프 위험: 특히 input 이벤트와 같이 사용자의 입력에 반응하는 이벤트에서는 이런 방식이 무한 루프를 일으킬 위험이 있습니다. 함수 내에서 이벤트 리스너를 추가하고, 그 리스너가 다시 그 함수를 호출하게 되면, 무한히 함수가 호출될 수 있습니다.

// 배운점
// for 문이기 때문에 return 이라고 쓰지 않는다.
// includes는 뒤에 함수를 동반한다.
// includes, indexOf
// notes[i].parentElement.style.display = 'flex'; 이렇게 표현

// 검색기능 구현을 위해 필요한 사고과정
// 1. 재료 준비
// - 검색창 소스를 가져온다
// - 메모 박스에서 input 영역의 소스를 가져온다

// 2. 검색창 입력값과 input 영역 전체를 대조한다.
// - 검색창.value <-- 대조 --> input 전체 중에서 각 하나씩을 for 문으로 순환한 값

// 3. 값이 있으면 그 값을 포함한 메모를 보여주고, 없으면 보여주지 않는다.
// - display: flex
// - display: none

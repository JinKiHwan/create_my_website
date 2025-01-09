//박스 두개 만들기
//드랍 다운 리스트 만들기
//환율정보 들고오기
//드랍다운리스트에서 아이템 선택하면 아이템이 바뀜
//금액을 입력할 시 환전이 됨.
//드랍다운 리스트에서 아이템을 선택하면 다시 그 기준으로 환전해줌
//숫자 한국어로 읽는 법
//반대로 밑에 박스에서 숫자를 바꿔도 위 박스에 적용된다.

let currencyRatio = {
  USD: {
    KRW: 1408.45,
    USD: 1,
    VND: 23880.00,
    unit: "달러"
  },
  KRW: {
    KRW: 1,
    USD: 0.00071,
    VND: 16.96,
    unit: "원"
  },
  VND: {
    KRW: 0.059,
    USD: 0.000042,
    VND: 1,
    unit: "동"
  }
};

// 1. console.log(currencyRatio.USD.unit);

// 2. console.log(currencyRatio["VND"]["unit"])


document.querySelectorAll("#from-currency-list a").forEach((menu) => menu.addEventListener("click", function () {

}));
const registrationCard = {
  name: "남일쒸",
  age: 23,
  gender: "남성",
};

const canSellAlcohol = (registrationCard) => {
  return (checkAge = registrationCard.age >= 19);
};

console.log(canSellAlcohol(registrationCard));

// 객체의 age에 18 이하의 숫자를 넣으면 false값 출력
// const canSellAlcohol = (registrationCard) => checkAge = registrationCard.age >= 19
// 암묵적 반환.

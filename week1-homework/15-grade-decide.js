// const decideGrade = function (score) {
//   if (score >= 90) {
//     return { 'score': score, 'grade': 'A', 'description': '매우 우수'};
//   } else if (score >= 80) {
//     return { 'score': score, 'grade': 'B', 'description': '우수'};
//   } else if (score >= 70) {
//     return { 'score': score, 'grade': 'C', 'description': '보통'};
//   } else if (score >= 60) {
//     return { 'score': score, 'grade': 'D', 'description': '미달, 통과 기준 근접'};
//   } else {
//     return { 'score': score, 'grade': 'F', 'description': '낙제'};
//   }
// };

// 1번째로 작성한 코드. 상수 선언 후 점수를 받을 매개변수를 지정하고 객체 값이 출력되도록 설정.

const decideGrade = function (score) {
  let grade = "";
  let description = "";

  if (score >= 90) {
    grade = "A";
    description = "매우 우수";
  } else if (score >= 80) {
    grade = "B";
    description = "우수";
  } else if (score >= 70) {
    grade = "C";
    description = "보통";
  } else if (score >= 60) {
    grade = "D";
    description = "미달, 통과 기준 근접";
  } else {
    grade = "F";
    description = "낙제";
  }
  return { score: score, grade: grade, description: description };
};

console.log(decideGrade(87));

// 코드 간소화.

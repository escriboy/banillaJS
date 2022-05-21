const images = ["0.jpg","1.jpg","2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

//html태그 생성
const bgImage = document.createElement("img");

//태그 뒤에 들어갈 문자 입력
bgImage.src = `img/${chosenImage}`

//body에 append하기
document.body.appendChild(bgImage);
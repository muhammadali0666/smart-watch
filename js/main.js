let password = "";

const passwordRender = () => {
  let one = Math.floor(Math.random() * 9);
  let two = Math.floor(Math.random() * 9);
  let three = Math.floor(Math.random() * 9);
  let four = Math.floor(Math.random() * 9);

  password += one;
  password += two;
  password += three;
  password += four;

  return password;
};

let son = passwordRender();
console.log(son);

function login() {
  const userName = prompt("ismingizni kiriting");
const userAge = prompt("yoshingizni kiriting");
const userRegion = prompt("hududni kiriting");
const parol = prompt("password kiriting");

console.log(`ro'yxatda borsiz`);

function shart() {

}
}

var modal_meny = document.querySelector(".Nav_modal_open");
var modal = document.querySelector(".Modal_meny_content");
const Home_Listners = document.querySelector(".Home_list"); //тут контени
function modal_open() {
  modal === null || modal === void 0 ? void 0 : modal.classList.add("open");
}
function modal_close() {
  modal === null || modal === void 0 ? void 0 : modal.classList.remove("open");
}
modal_meny === null || modal_meny === void 0
  ? void 0
  : modal_meny.addEventListener("click", function () {
      var modal = document.querySelector(".Modal_meny_content");
      if (modal.classList.contains("open")) {
        modal_close();
      } else {
        modal_open();
      }
    });
window.addEventListener("DOMContentLoaded", () => {
  req();
  
});
function req() {
  fetch(" http://localhost:3000/News")
    .then((data) => data.json())
    .then((data) => createCards(data))
    .catch((err) => console.error(err));
}
function createCards(response) {
  // это функция отвечает за отрисовку данных из бд
  response.forEach((item) => {
    //этот цикл погоняет массив данных

    let card = document.createElement("div"); //контент главной
    card.classList.add("card");
    card.innerHTML = `
    <div class="news_block">
    <div class="news_img_containeer">

    <img class="news_img" src="${item.photo}" alt="">
      
    </div>
                  
                  <div class="News_main_content">
                  <p class="news_header">${item.Headers}</p>
                  <p class="news_text">${item.Slogan}</p>
                  <div class="news_footer">
                      <div class="news_footer_left">
                          <p class="news_footer_text">${item.Date}</p>
                          <div class="news_footer_krug"></div>
                          <p class="news_footer_text">${item.subtitle}</p>
                      </div>
                      <div class="news_footer_right">
                          <p class="news_footer_right_text">${item.Slogan_left}</p>
                      </div>
                  </div>
                  </div>
              </div>
            `;
    Home_Listners.appendChild(card);
  });
}

const Global = document.querySelector(`.Golobal`);
Global.addEventListener("click", home);
const profilete = document.querySelector(`.nav_menu_text_a`);
profilete.addEventListener("click", function () {
  ProfileOpen();
});

function ProfileOpen() {
  //Профиль
  let Profilezen = document.createElement("div");
  Profilezen.classList.add("profile");
  Profilezen.innerHTML = `
  
  <div class="profile_header">
      <p>Вход</p>
  </div>
  <div class="profile_main">
      <form class="profile_form" action="">
          <input class="mail" type="text" placeholder="Почта">
          <input class="password" type="text" placeholder="Пароль">
          <button class="login">Войти</button>
      </form>
      <div class="profile_supFinction">
          <a class="sharpen" href="#">восстановить</a>
          <a class="Registr" href="#">регистрация</a>
      </div>
      <div class="Errors_registr">
      </div>
  </div>


  `;
  Home_Listners.innerHTML = "";
  Home_Listners.appendChild(Profilezen);
  Registrs();
  authorization()
}
function home() {
  //Отрисовка главной по кнопке
  let main = document.createElement("div");
  main.classList.add("Home");
  main.innerHTML = `
  <div class="History">
                    <div class="one_History">
                        <div class="History_header">
                            <p class="History_text">Отдыхаю на природе</p>
                        </div>
                        <div class="History_footer">
                            <p class="History_text">21.09.2020</p>
                        </div>
                    </div>
                    <div class="two_History">
                        <div class="History_header">
                            <p class="History_text">Отдыхаю на природе</p>
                        </div>
                        <div class="History_footer">
                            <p class="History_text">21.09.2020</p>
                        </div>
                    </div>
                    <div class="free_History">
                        <div class="History_header">
                            <p class="History_text">Отдыхаю на природе</p>
                        </div>
                        <div class="History_footer">
                            <p class="History_text">21.09.2020</p>
                        </div>
                    </div>
                    <div class="foo_History">
                        <div class="History_header">
                            <p class="History_text">Отдыхаю на природе</p>
                        </div>
                        <div class="History_footer">
                            <p class="History_text">21.09.2020</p>
                        </div>
                    </div>
                </div>
                <div class="Search">
                    <form action="">
                        <input class="Search_all" type="text">
                    </form>
                </div>
                <div class="news">
                    
                </div>
            </div>
  `;
  Home_Listners.innerHTML = "";
  Home_Listners.appendChild(main);
  req();
}

function Registrs() {
  // Окно регистрации
  const linkRegistr = document.querySelector(`.Registr`);
  linkRegistr.addEventListener("click", () => {
    CreatWindowRegistr();
  });
}

function CreatWindowRegistr() {
  let Regist = document.createElement("div");
  Regist.classList.add("Registrs");
  Regist.innerHTML = `
  
                    <div class="Registrs_left">
                    <div class="Registrs_Header">
                        <p class="Registrs_Header_text">Профиль</p>
                    </div>
                    <form class="Form_Registrs" action="">
                        <input class="Registrs_Name" placeholder="Имя и Фамилия" type="text">
                        <input class="Registrs_Mail" placeholder="маил" type="mail">
                        <input class="Registrs_password" placeholder="Пароль" type="password">
                        <input class="Registrs_password_two" placeholder="Подтвердить впароль" type="password">
                        <button class="Registrs_Button_Save">Сохранить</button>
                    </form>
                    <div class="Errors"></div>
                </div>
                <div class="Registrs_rigt">
                    <img class="Img_profile" src="src/img/avatarka.svg" alt="">
                    <a class="registr_new_img">выбрать  аватар</a>
                </div>
               
               
  `;
  Home_Listners.innerHTML = "";
  Home_Listners.appendChild(Regist);
  const formRegistr = document.querySelector(`.Form_Registrs`);
  const inputName = document.querySelector(`.Registrs_Name`);
  const inputMail = formRegistr.querySelector(`.Registrs_Mail`);
  const inputPassword = formRegistr.querySelector(`.Registrs_password`);
  const Errors = document.querySelector(`.Errors`);
  const inputСonfirmationPassword = formRegistr.querySelector(
    `.Registrs_password_two`
  );
  const ButtonSubmitProfil = document.querySelector(`.Registrs_Button_Save`);

  ButtonSubmitProfil.addEventListener("click", () => {
    ChekRegistr(
      inputName,
      inputMail,
      inputPassword,
      inputСonfirmationPassword,
      Errors
    );
  });
}

function ChekRegistr(Name, Mail, Password, PasswordTwo, Put) {
  if (!chekInputName(Name.value)) {
    Put.innerHTML = "";

    errorName(Name, Put);
  } else if (!chekInputMail(Mail.value)) {
    Put.innerHTML = "";
    Mail.classList.remove("Error");
    Name.classList.remove("Error");
    errorMail(Mail, Put);
  } else if (chekInputPassword(Password.value, PasswordTwo.value)) {
    console.log();
    Name.classList.remove("Error");
    Put.innerHTML = "";
    Mail.classList.remove("Error");
    errorPassword(Password, PasswordTwo, Put);
  } else {
    SumbitProfile(Name, Mail, Password);
  }
}

function chekInputName(value) {
  return value.length >= 5;
}
function chekInputMail(value) {
  return value.length >= 5;
}
function chekInputPassword(password1, password2) {
  return password1 != password2 || password1.length <= 1;
}
function clear_input(Name, Mail, Password1, Password2) {
  //Очистка профиля
  Name.value = "";
  Mail.value = "";
  Password1.value = "";
  Password2.value = "";
}
async function saveProfile(url, data) {
  await fetch(`${url}`, {
    method: "post",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json",
    },
  });
  clear_input(inputName, inputMail, inputPassword, inputСonfirmationPassword);
  console.log(data);
}

function SumbitProfile(Names, Mails, Passwords) {
  const data = {
    Name: Names.value,
    Mail: Mails.value,
    Password: Passwords.value,
    owners: "",
    id: Math.random(),
  };
  console.log(data);
  saveProfile("http://localhost:3000/Profil", data);
}

function errorName(InputError, Put) {
  InputError.classList.add("Error");
  let errorNames = document.createElement("div");
  errorNames.classList.add("Errors_conatiner");
  errorNames.innerHTML = `
<p>Недостаточное количство символов в Name, минимум 5</p>
`;
  Put.appendChild(errorNames);
}

function errorMail(mailError, Put) {
  mailError.classList.add("Error");
  let errorMails = document.createElement("div");
  errorMails.classList.add("Errors_conatiner");
  errorMails.innerHTML = `
<p>Недостаточное количство символов в Mail, минимум 5</p>
`;
  Put.appendChild(errorMails);
}
function errorPassword(PasswordError, PasswordError2, Put) {
  PasswordError.classList.add("Error");
  PasswordError2.classList.add("Error");
  let errorPassword = document.createElement("div");
  errorPassword.classList.add("Errors_conatiner");
  errorPassword.innerHTML = `
<p>Пароли не совпадают или пароль слишком короткией</p>
`;
  Put.appendChild(errorPassword);
}
function authorization(){
const btnLogin = document.querySelector(`.login`)
btnLogin.addEventListener(`click`,(e)=>{

 
  e.preventDefault()
  DannieLogins()
})
}
function DannieLogins() {
  fetch("http://localhost:3000/Profil")
    .then((data) => data.json())
    .then((data) => ChekDannie(data))
    .catch((err) => console.error(err));
}
function ChekDannie(Dannie){
  let mailLogin = document.querySelector(`.mail`)
  let passwordLogin = document.querySelector(`.password`)
  console.log(Dannie)
  let long = Dannie.length
  for(let i = 0; i<long; i++){
    if (mailLogin.value ==Dannie[i].Mail){
      let ProfileCheck = Dannie[i]
       ChekPass(ProfileCheck, passwordLogin.value)
      break
    }else if ((i+1)==long){
      errorNotUzers()
    }
   
  }
}

function ChekPass(Dannie, pass) { // Проверка пароля
  if(Dannie.Password == pass){
    let ListRefistr = document.querySelector(`.Errors_registr`)
    CheckOwners(Dannie)
    console.log(`dv d`, Dannie)
    ListRefistr.innerHTML = "";
    
  }else{
    ErrorLogin()
  }
}
function ErrorLogin() {
  let ListRefistr = document.querySelector(`.Errors_registr`)
  let Error = document.createElement("div");
  Error.classList.add("Registr_Erors");
  Error.innerHTML=`
  <p class="tests">Вы ввели неправильный пароль</p>
  `;
  ListRefistr.innerHTML = "";
  ListRefistr.appendChild(Error)
}
function errorNotUzers (){
  let ListRefistr = document.querySelector(`.Errors_registr`)
  let Error = document.createElement("div");
  Error.classList.add("Registr_Erors");
  Error.innerHTML=`
  <p class="tests">Такого аккаунта нет</p>
  `;
  ListRefistr.innerHTML = "";
  ListRefistr.appendChild(Error)
}
function CheckOwners(Dannie){
  let check = "Admin"
  console.log(Dannie.owners)
  if(Dannie.owners == check){
    WritePost()
  }
  else{
    CloseWritePost()
  }
}
const BtnWritePost = document.querySelector(`.Write_post`)
function WritePost(){
  BtnWritePost.classList.add(`Visible`)
}

function CloseWritePost(){
  BtnWritePost.classList.remove(`Visible`)
}
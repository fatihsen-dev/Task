// login case
const loginPasswordInput = document.querySelector("#loginPasswordInput");
const loginShowPasswordBtn = document.querySelector("#loginShowPasswordBtn");

loginShowPasswordBtn.addEventListener("click", (e) => {
   if (loginPasswordInput.getAttribute("type") === "password") {
      loginPasswordInput.setAttribute("type", "text");
      loginShowPasswordBtn.classList.add("show");
   } else {
      loginPasswordInput.setAttribute("type", "password");
      loginShowPasswordBtn.classList.remove("show");
   }
});

// callender case
const curentDate1 = document.querySelector("#curentDate1"),
   curentDate2 = document.querySelector("#curentDate2"),
   callenderBackBtn = document.querySelector("#callenderBackBtn"),
   callenderNextBtn = document.querySelector("#callenderNextBtn"),
   calenderDays = document.querySelector("#calenderDays"),
   allMonth = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
   ];
let date = new Date(),
   curentYear = date.getFullYear(),
   curentMonth = date.getMonth();

const renderCalender = () => {
   let lastDateOfMonth = new Date(curentYear, curentMonth + 1, 0).getDate();
   calenderDays.innerHTML = "";
   for (let i = 0; i < lastDateOfMonth; i++) {
      if (
         curentMonth === date.getMonth() &&
         curentYear === date.getFullYear() &&
         i + 1 === date.getDate()
      ) {
         calenderDays.innerHTML += `<li class="active">${i + 1}</li>`;
      } else {
         calenderDays.innerHTML += `<li>${i + 1}</li>`;
      }
   }
   curentDate1.innerHTML = `${allMonth[curentMonth]} ${curentYear}`;
   curentDate2.innerHTML = `${allMonth[curentMonth]} ${curentYear}`;
};
renderCalender();

callenderBackBtn.addEventListener("click", (e) => {
   if (curentMonth == 0) {
      curentYear = curentYear - 1;
      curentMonth = 12;
   }
   curentMonth = curentMonth - 1;
   renderCalender();
});

callenderNextBtn.addEventListener("click", (e) => {
   if (curentMonth == 11) {
      curentMonth = -1;
   }
   curentMonth = curentMonth + 1;
   renderCalender();
});

// divContainer case - login
const divContainerPasswordInput = document.querySelector("#divContainerPasswordInput");
const divContainerPasswordBtn = document.querySelector("#divContainerPasswordBtn");

divContainerPasswordBtn.addEventListener("click", (e) => {
   if (divContainerPasswordInput.getAttribute("type") === "password") {
      divContainerPasswordInput.setAttribute("type", "text");
      divContainerPasswordBtn.classList.add("show");
   } else {
      divContainerPasswordInput.setAttribute("type", "password");
      divContainerPasswordBtn.classList.remove("show");
   }
});

// divContainer case - register password
const registerPasswordInput1 = document.querySelector("#registerPasswordInput1");
const registerPasswordBtn1 = document.querySelector("#registerPasswordBtn1");

registerPasswordBtn1.addEventListener("click", (e) => {
   if (registerPasswordInput1.getAttribute("type") === "password") {
      registerPasswordInput1.setAttribute("type", "text");
      registerPasswordBtn1.classList.add("show");
   } else {
      registerPasswordInput1.setAttribute("type", "password");
      registerPasswordBtn1.classList.remove("show");
   }
});

// divContainer case - register password confrim
const registerPasswordInput2 = document.querySelector("#registerPasswordInput2");
const registerPasswordBtn2 = document.querySelector("#registerPasswordBtn2");

registerPasswordBtn2.addEventListener("click", (e) => {
   if (registerPasswordInput2.getAttribute("type") === "password") {
      registerPasswordInput2.setAttribute("type", "text");
      registerPasswordBtn2.classList.add("show");
   } else {
      registerPasswordInput2.setAttribute("type", "password");
      registerPasswordBtn2.classList.remove("show");
   }
});

let employeesList = [
  {
    id: 1,
    name: "Aram",
    salary: 800,
    isBonus: false,
  },
  {
    id: 2,
    name: "Grigori",
    salary: 1200,
    isBonus: true,
  },
  {
    id: 3,
    name: "Hasmik",
    salary: 1000,
    isBonus: false,
  },
];
let smileIcon = "&#9865;";
let scissorsIcon = "&#9988;";
let starIcon = "&#9733;";

let ul = document.querySelector("#employeesList");

const deleteEmployee = function (id) {
  employeesList = employeesList.filter(function (employeer) {
    return id !== employeer.id;
  });
  renderEmployeeList();
};
const bonusEmployee = function (id) {
  employeesList = employeesList.map(function (employeer) {
    if (id === employeer.id) {
      employeer.isBonus = !employeer.isBonus;
    }
    return employeer;
  });
  renderEmployeeList();
};





const renderEmployeeList = function () {
  ul.innerHTML = "";
  employeesList.forEach(function (el) {
    let generaTag = document.createElement("div");
    generaTag.classList.add("employeer");
    generaTag.innerHTML = `
        <div class="simetra1" style="color: ${ el.isBonus ? 'green' : 'black' }">${el.name}</div>
        <div class="simetra2" style="color: ${ el.isBonus ? 'green' : 'black' }">${el.salary}$</div>
            <div  class="smde">
                <div class="smil" data-id="${el.id}">${smileIcon}</div>
                <div class="delete" data-id="${el.id}">${scissorsIcon}</div>
                <div class="astx">${starIcon}</div>
            </div>`;

    ul.append(generaTag);
  });
  const deleteButtons = document.querySelectorAll(".delete");

  deleteButtons.forEach(function (btn) {
    btn.addEventListener("click", function (event) {
      deleteEmployee(+event.target.dataset.id);
    });
  });

  const bonusButtons = document.querySelectorAll(".smil");

  bonusButtons.forEach(function (btn) {
    btn.addEventListener("click", function (event) {
      bonusEmployee(+event.target.dataset.id);
    });
  });

   document.querySelector('#employeesCount').innerText = "Общее число сотрудников: " + employeesList.length;
   
   let bonusCount = 0;
   employeesList.forEach(function(el) {
       if(el.isBonus){
           bonusCount++;
       }
   })

   document.querySelector('#bonusCount').innerText = "Премию получат: " + bonusCount;
};
renderEmployeeList();


let form = document.querySelector('form');

form.addEventListener('submit', function(event){
    event.preventDefault()
    let name = document.querySelector('#name').value;
    let salary = document.querySelector('#salary').value;
    let newEmployee = {
        name :name,
        salary: salary,
        isBonus: false,
        id: employeesList[employeesList.length - 1].id + 1
    }
    employeesList.push(newEmployee)
    renderEmployeeList()
})





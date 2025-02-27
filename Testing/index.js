console.log("hi pavan sfdsghdhgfb")
const btn = document.getElementById("btn")
btn.onclick = function () {
    console.log("clicked mee")
    fetch("http://localhost:8081/getemployees")
      .then((resdata) => resdata.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
}
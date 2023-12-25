const button = document.getElementById("clickbutton");
const userName = document.getElementById("input-UserName");
const uName = document.getElementById("username");


button.addEventListener('click', () => {
    alert("its working ");
    const Entity = userName.value;
    localStorage.setItem('Name',Entity );
    location.reload();

});

window.addEventListener('load', () => {
    const value = localStorage.getItem("Name")
    uName.innerText = value;
})


async function getRandomUser(){ 
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();
    const user = data.results[0];
    console.log(user);
    displayuser(user);  

}
function displayuser(user){
    const name = document.getElementById('name');
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const location = document.getElementById("location");
    const image = document.getElementById("image");

    name.innerText = `${user.name.title} ${user.name.first} ${user.name.last}` ;
    email.innerText= `${user.email}`
    phone.innerText = `${user.phone}`
    location.innerText = `${user.location.city} , ${user.location.country}`
    image.setAttribute('src',`${user.picture.large}`)

}





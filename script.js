async function fetchdata() {
    var foods = await fetch("https://api.thedogapi.com/v1/breeds",{method: "GET"});
    var dogs = await foods.json();
    data(dogs);
  }
  function data(dogs) {
    var res = document.createElement("div");
    dogs.forEach((foods) => {
      var foodscontainer = document.createElement("div");
      foodscontainer.className = "container";
      foodscontainer.innerHTML = `
      <div><h1>  ${foods.name}</h1><br>
      <img src="${foods.image.url}" class="image"><br>
      <div><span><b>Breed-Group  :</b> </span> ${foods.breed_group}</div><br>
      <div><span><b>Life-Span  :</b> </span>  ${foods.life_span}</div><br>
      <div><span><b>Bred-For : </b></span> ${foods.bred_for}</div><br>
      
    `;
      res.append(foodscontainer);
    });
    document.body.append(res);
  }
  fetchdata();


let sumnumbers = (...nos) => {
  if (operation === "addtion"){
  let sum = 0;
  for (let i of nos){
    sum = sum +1;

  }
  return sum;
}
};
console.log(sumnubers('addition'),43,32,23,11,313)
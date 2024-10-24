// https://free-apis.github.io/#/browse  (visit here for free apis)
// Randomly select any one (https://alexwohlbruck.github.io/cat-facts/) 

//scroll down -> api documentaion => start developing click there = copy the url and paste it here




let url = "https://cat-fact.herokuapp.com/facts";
let factpara = document.querySelector(".fact");
let btn = document.querySelector("#btn");


let getFacts = async () => {
    console.log("getting data...");
    let response = await fetch(url);
    console.log(response); // Response object

    let data = await response.json(); // Corrected: use response.json()
    console.log(data);

    // Accessing the text property of the first four elements
    let catFacts = data.slice(0, 4).map(fact => fact.text);
   
    // Join the text of the first four facts and display
    factpara.innerText = catFacts.join('\n');
};
btn.addEventListener("click", getFacts);

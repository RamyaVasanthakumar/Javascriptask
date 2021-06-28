 let myDetails = [
    {
      id: 1,
      company:"mobile",
      contact:"7264756",
      country:"India"
},
{
      id: 2,
      company:"It",
      contact:"287445",
      country:"India"
},
{
    id: 3,
    company:"hardware",
    contact:"287445",
    country:"India"
}
];
//let image = `my images ${myImages} `;
let myString = `<table><thead><tr><th>id</th><th>company</th><th>contact</th><th>country</th></tr></thead><tbody>`;

for(i=0;i<myDetails.length;i++){
    
    myString+=`<tr><td>${myDetails[i].id}</td><td>${myDetails[i].company}</td><td>${myDetails[i].contact}</td><td>${myDetails[i].country}</td>`
}
myString+=`</tbody></table>`

let tableDetails = document.getElementById("myTable");
tableDetails.innerHTML = myString;

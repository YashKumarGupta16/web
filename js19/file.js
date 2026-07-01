//fetch API

// let promise = fetch(url,[options]);

const api_endpoint =  "https://api.genderize.io?name=luc" ;

const obj = document.querySelector("#i1");

async function getGender(){
    console.log("getting data");
    let response = await fetch(api_endpoint);
    console.log(response);   //JSON format
    let data = await response.json();
    console.log(data);
    obj.innerText = data.name;
}


getGender();
// .json() method returns second promise...input is json and
// output is js object(usable data)

// simple data fetch from API = GET request
//status code : 200 (ok)
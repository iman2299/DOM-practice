
document.body.style.color = "purple"; 
const h1=document.getElementsByTagName("h1"); 
h1[0].innerHTML='Main Content Here';
h1[0].style.color = "black";
h1[0].style.fontWeight = "bold";

const addLinks =document.getElementsByClassName("padding-10");

let newNav=document.querySelector("nav");

newNav.insertAdjacentHTML("afterbegin","<a1 herf='#'>Link1</a1>");


newNav.insertAdjacentHTML('beforeend',"<a1 herf='#'>Link7</a1>");

newNav.insertAdjacentHTML('afterbegin',"<a1 herf='#'>Link4</a1>");

let link1=newNav.children[0];
link1.innerHTML="Link 1";
link1.style.textDecorationLine="underline";
link1.style.color="blue";


let link2=newNav.children[1];
link2.innerHTML="Link 2";
link2.style.textDecorationLine="underline";
link2.style.color="blue";

let link3=newNav.children[2];
link3.innerHTML="Link 3";

let link4=newNav.children[3];
link4.innerHTML="Link 4";

let link5=newNav.children[4];
link5.innerHTML="Link 5";


let link6=newNav.children[5];
link6.innerHTML="Link 6";

let link7=newNav.children[6];
link7.innerHTML="Link 7";
link7.style.textDecorationLine="underline";
link7.style.color="blue";





const aside=document.querySelector("aside"); 

aside.id="newId";

let newAside=document.getElementById("newId");

let text1=newAside.children[0];
text1.innerHTML="<strong>Title1</strong><br><br>Comment1";
text1.style.color="red";


let text2=newAside.children[1];
text2.innerHTML="<strong>Title2</strong><br><br>Comment2";
text2.style.color="blue";


let text3=newAside.children[2];
text3.innerHTML="<strong>Title3</strong><br><br>Comment3";
text3.style.color="green";

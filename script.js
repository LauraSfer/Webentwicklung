//console.log('Hallo');


/*let button = document.getElementById('Löschen');
console.log(button);
button.addEventListener('click', grau1);

/*let button1= document.getElementById('Erstellen');
console.log(button1);
button1.addEventListener('click', grau)*/

/*function grau(){
    button1.className='löschenNachClick';
    
}*/

 let Notes= document.querySelectorAll(".Note")
    for(let i = 0; i < Notes.length; i++){
        Notes[i].addEventListener('blur',speichern)

    }



function speichern(event){
    
    console.log("Bearbeitete Notiz: " + event.currentTarget.textContent);
    console.log("Bearbeitete Notiz: " + event.currentTarget.id);
     let Notes= document.querySelectorAll(".Note")
    for(let i = 0; i < Notes.length; i++){
        Notizen[i].Text  = Notes[i].textContent

    }
    console.log(Notizen)
    storeData();
    loadData()



}


function Display(){

    let Notes = document.querySelectorAll(".Note");

    for(let i = 0; i < Notes.length; i++){

        // Prüfen ob die Notiz existiert
        if(Notizen[i]){
            Notes[i].textContent = Notizen[i].Text;
        }
        else{
            Notes[i].textContent = "";
        }

    }

    


}



let Notizen = [
    {Name: "Notiz1", Text: ""},{Name: "Notiz2", Text: ""},
    {Name: "Notiz3", Text: ""},
    {Name: "Notiz4", Text: ""},{Name: "Notiz5", Text: ""},
    {Name: "Notiz6", Text: ""},
    {Name: "Notiz7", Text: "Click & write on me :)"}, 
    {Name: "Notiz8", Text: ""}, 
    {Name: "Notiz9", Text: ""}, 
    {Name: "Notiz10", Text: ""}, 
    {Name: "Notiz11", Text:""}, 
    {Name: "Notiz12", Text:""}, 
    {Name: "Notiz13", Text:""}
]







function storeData(){
    let jsonPosts = JSON.stringify(Notizen);
    console.log(jsonPosts);
    localStorage.setItem("Notes", jsonPosts);
    sendJsonWithPOST(
  'http://localhost:3000/',
  JSON.stringify(Notizen));
}


function loadData(){
     let jsonPosts = localStorage.getItem("Notes");
     console.log("geladeneDaten " + jsonPosts);
     if (jsonPosts) {
        Notizen = JSON.parse(jsonPosts);
     }
     Display();
    
}
loadData();
//localStorage.clear();

async function sendJsonWithPOST(url, jsonString) {
  const response = await fetch(url, {
    method: 'POST',
    body: jsonString,
  });
}







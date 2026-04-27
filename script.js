console.log('Hallo');


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
   
   /* button.className='löschenNachClick';*/


    /*myPosts.push({
        text: InputDeviceInfo.value
    })
    console.log(myPosts);*/
    let Notes= document.querySelectorAll(".Note")
    for(let i = 0; i < Notes.length; i++){
        Notes[i].textContent = Notizen[i].Text

    }

    


}



let Notizen = [
    {Name: "Notiz1", Text: "hallo"},{Name: "Notiz2", Text: "Arzt 11 Uhr Mittwoch"},
    {Name: "Notiz3", Text: "Webentwicklung abgeben"},
    {Name: "Notiz4", Text: "Blumen auf Sonntag kaufen"},{Name: "Notiz5", Text: "Geburtstag Papa"},
    {Name: "Notiz6", Text: "Friseurtermin Samstag 9 Uhr"},
    {Name: "Notiz7", Text: "Oma Bahnhof abholen Donnerstag"}, 
    {Name: "Notiz8", Text: "Heute Abend Müll rausstellen"}, 
    {Name: "Notiz9", Text: "Regal aufbauen Sonntag mit Freunden"}, 
    {Name: "Notiz10", Text: "Torte abholen ab Freitag"}, 
    {Name: "Notiz11", Text:"Paket abholen"}
]







function storeData(){
    let jsonPosts = JSON.stringify(Notizen);
    console.log(jsonPosts);
    localStorage.setItem("Notes", jsonPosts);
}


function loadData(){
     let jsonPosts = localStorage.getItem("Notes");
     console.log("geladeneDaten " + jsonPosts);
     Notizen = JSON.parse(jsonPosts);
     Display();
    
}
loadData();




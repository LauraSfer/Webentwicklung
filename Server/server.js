const http = require('http');
const mongodb = require('mongodb');//zwei Bibliotheken geladen: Webserver und Datenbank. Server wird später auf localhost:3000 laufen.

const hostname = '127.0.0.1'; // localhost
const port = 3000;




const url = 'mongodb://127.0.0.1:27017'; // für lokale MongoDB
const mongoClient = new mongodb.MongoClient(url); //MongoDB-Client wird erstellt, aber noch nicht verbunden – das passiert erst in startServer().


async function startServer() {
  await mongoClient.connect(); // Verbindung zur Datenbank herstellen ( await, damit erst startet wenn datenbank verbindung steht)
  server.listen(port, hostname, () => { // Server starten
    console.log(`Server running at http://${hostname}:${port}/`);
  });
}


const server = http.createServer(async(request, response) => {
   const notizCollection = mongoClient.db('NotizApp').collection('Notizen');
  if (request.method === 'GET') {
      // Informationen an den Client senden
      response.setHeader("Content-Type", "application/json");
      response.setHeader('Access-Control-Allow-Origin', '*'); // bei CORS Fehler
        let data = await notizCollection.find({}).toArray();
        console.log(data);
      response.end(JSON.stringify(data[0].Notizen));
  }
  if (request.method === 'POST') {
    // Daten vom Client empfangen
    let jsonString = '';
    request.on('data', (data) => {
      jsonString += data;
    });
    request.on('end', () => { //wird in datenbank geschrieben
      console.log(JSON.parse(jsonString));
      notizCollection.replaceOne({},{Notizen:JSON.parse(jsonString)},{upsert: true} );
    });
  }
});

startServer();
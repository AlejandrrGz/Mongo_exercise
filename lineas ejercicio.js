//Consultas / Buscar documentos
db.movies.find()

db.movies.find({writer: "Quentin Tarantino"})

db.movies.find({actors: "Brad Pitt"})

db.movies.find({franchise: "The Hobbit"})

db.movies.find({year:{$lte: 1999}})

db.movies.find( { year: { $gte : 2000 , $lte : 2010} })



//Actualizar Documentos
db.movies.updateOne({title: "The Hobbit: An Unexpected Journey"},{$set: {sinopsis: "A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home - and the gold within it - from the dragon Smaug." }})

db.movies.updateOne({title: "The Hobbit: The Desolation of Smaug" },{$set: {sinopsis:"The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring"}})

db.movies.updateOne({title: "Pulp Fiction" },{$set: {actors:"Samuel L. Jackson"}})


//Búsqueda por Texto / Text Search
db.movies.find({title : {$regex : "Hobbit"}})

db.movies.find({sinopsis : {$regex : "Gandalf"}})

db.movies.find({sinopsis : {$regex : "Bilbo",$not: {$regex: "Gandalf"}}})

db.movies.find({$or: [{sinopsis: {$regex: "dwarves"}}, {sinopsis: {$regex: "hobbit"}}]})

db.movies.find({$and: [{sinopsis: {$regex: "gold"}}, {sinopsis: {$regex: "dragon"}}]})


//Eliminar Documentos
db.movies.deleteOne({title: "Pee Wee Herman's Big Adventure"})

db.movies.deleteOne({title: "Avatar"})


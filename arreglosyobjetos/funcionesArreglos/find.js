const heroes = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];

//manipulacion de arreglos con find:
 const getById = (id) => {
     return heroes.find( (heroe) => heroe.id === id);
 }
 console.log(getById(3));

 //manipulacion con filter:
 const getByOwner = (owner) => heroes.filter( (heroe) => heroe.owner === owner );
 console.log(getByOwner("DC"));
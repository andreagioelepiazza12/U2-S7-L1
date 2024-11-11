//----------------------------------------Esercizio1-----------------------------


class User {
    constructor(firstName, lastName, age, location) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.location = location;
    }

    compareAge(otherUser) {
        if (this.age > otherUser.age) {
             console.log(this.firstName + " è più vecchio di " + otherUser.firstName);
        } else if (this.age < otherUser.age) {
            console.log(this.firstName + " è più giovane di " + otherUser.firstName);
        } else {
            console.log("Hanno la stessa età");
        }
    }
}


const user1 = new User("Andrea Gioele", "Piazza", 31,"Cagliari");

const user2 = new User("Mario", "Rossi", 20,"Cagliari");

const user3 = new User("Rosa","Verdi", 31,"Cagliari");


console.log(user1.compareAge(user2)); 

console.log(user2.compareAge(user1)); 

console.log(user1.compareAge(user3));





//-----------------------------------------------Esercizio2-------------------------------------------


class Pet {
    constructor(petName, ownerName, species, breed) {
        this.petName = petName;
        this.ownerName = ownerName;
        this.species = species;
        this.breed = breed;
    }

    hasSameOwner(otherPet) {
        return this.ownerName === otherPet.ownerName;
    }
}

const petList = [];

document.getElementById("petForm").addEventListener("submit", function(event) {
    event.preventDefault();

    
    const petName = document.getElementById("petName").value;
    const ownerName = document.getElementById("ownerName").value;
    const species = document.getElementById("species").value;
    const breed = document.getElementById("breed").value;

    
    const newPet = new Pet(petName, ownerName, species, breed);

    
    petList.push(newPet);

    
    displayPetList();

    
    document.getElementById("petForm").reset();
});

function displayPetList() {
    const petListContainer = document.getElementById("petList");
    petListContainer.innerHTML = ""; 

    petList.forEach((pet, index) => {
        const petItem = document.createElement("div");

        const petName = document.createElement("p");
        const petOwner = document.createElement("p");
        const petSpecie = document.createElement("p");
        const petBreed = document.createElement("p");

        petName.innerHTML = "Nome animale: " + pet.petName;
        petOwner.innerHTML = "Nome padrone: " + pet.ownerName;
        petSpecie.innerHTML = "Specie animale: " + pet.species;
        petBreed.innerHTML = "Razza animale: " + pet.petBreed;

        petItem.appendChild(petName);
        petItem.appendChild(petOwner);
        petItem.appendChild(petSpecie);
        petItem.appendChild(petBreed);

        petListContainer.appendChild(petItem);
    });
}
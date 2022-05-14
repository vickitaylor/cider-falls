// database created, arrays in the database are parks, services, guests, servicesInAreas, and guestsInAreas. The servicesInAreas array is a many to many relationship

const database = {
    parks: [
        {
            id: 1,
            name: "Chamfort River",
        }, 
        {
            id: 2,
            name: "Lost Wolf Hiking Trail",
        }, 
        {
            id: 3,
            name: "Lodge",
        }, 
        {
            id: 4,
            name: "Gander River",
        }, 
        {
            id: 5,
            name: "Campgrounds",
        }, 
        {
            id: 6,
            name: "Pine Bluffs Trails",
        },
    ],
    services: [
        {
            id: 1,
            name: "Rafting",
        },
        {
            id: 2,
            name: "Canoeing",
        },
        {
            id: 3,
            name: "Fishing",
        },
        {
            id: 4,
            name: "Hiking",
        },
        {
            id: 5,
            name: "Picnicking",
        },
        {
            id: 6,
            name: "Rock Climbing",
        },
        {
            id: 7,
            name: "Lodging",
        },
        {
            id: 8,
            name: "Parking",
        },
        {
            id: 9,
            name: "Information",
        },
        {
            id: 10,
            name: "Zip Lines",
        },             
    ],
    guests: [
        {
            id: 1,
            name: "Wanda Carroll",
            parkId: 1,
        },
        {
            id: 2,
            name: "Alexis Davis",
            parkId: 2,
        },
        {
            id: 3,
            name: "Peggy Barrett",
            parkId: 3,
        },
        {
            id: 4,
            name: "Cynthia Hogan",
            parkId: 4,
        },
        {
            id: 5,
            name: "Terri Malone",
            parkId: 5,
        },
        {
            id: 6,
            name: "Monica Moran",
            parkId: 6,
        },
        {
            id: 7,
            name: "Bryant Simpson",
            parkId: 1,
        },
        {
            id: 8,
            name: "Mario Grant",
            parkId: 2,
        },
        {
            id: 9,
            name: "Patrick Stewart",
            parkId: 3,
        },
        {
            id: 10,
            name: "Betty Fisher",
            parkId: 4,
        },
        {
            id: 11,
            name: "Teri Bates",
            parkId: 5,
        },
        {
            id: 12,
            name: "Samantha Kennedy",
            parkId: 6,
        },
        {
            id: 13,
            name: "Dominick Conner",
            parkId: 5,
        },
        {
            id: 14,
            name: "Alberto Reyes",
            parkId: 2,
        },
        {
            id: 15,
            name: "Martin Lynch",
            parkId: 4,
        },

    ],
    servicesInAreas: [
        {
            id: 1,
            parkId: 1,
            servicesId: 1
        },
        {
            id: 2,
            parkId: 1,
            servicesId: 2,
        },
        {
            id: 3,
            parkId: 1,
            servicesId: 3,
        },
        {
            id: 4,
            parkId: 2,
            servicesId: 4,
        },
        {
            id: 5,
            parkId: 2,
            servicesId: 5,
        },
        {
            id: 6,
            parkId: 2,
            servicesId: 6,
        },
        {
            id: 7,
            parkId: 3,
            servicesId: 7,
        },        
        {
            id: 8,
            parkId: 3,
            servicesId: 8,
        },        
        {
            id: 9,
            parkId: 3,
            servicesId: 9,
        },        
        {
            id: 10,
            parkId: 3,
            servicesId: 5,
        },        
        {
            id: 11,
            parkId: 4,
            servicesId: 3,
        },        
        {
            id: 12,
            parkId: 4,
            servicesId: 4,
        },        
        {
            id: 13,
            parkId: 5,
            servicesId: 9,
        },
        {
            id: 14,
            parkId: 5,
            servicesId: 7,
        },
        {
            id: 15,
            parkId: 5,
            servicesId: 8,
        },
        {
            id: 16,
            parkId: 6,
            servicesId: 4,
        },
        {
            id: 17,
            parkId: 6,
            servicesId: 5,
        },
        {
            id: 18,
            parkId: 6,
            servicesId: 10,
        },
    ], 

}

// exporting arrays to other modules
export const getParks = () => {
    return database.parks.map(park => ({...park}))
}
export const getServices = () => {
    return database.services.map(service => ({...service}))
}
export const getGuests = () => {
    return database.guests.map(guest => ({...guest}))
}
export const getAreaServices = () => {
    return database.servicesInAreas.map(areaServices => ({...areaServices}))
}
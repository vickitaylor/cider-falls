// import functions from the database 
import { getServices, getParks, getAreaServices } from "./database.js";

// invoking functions to get a copy of the state for use in this module. 
const servicesList = getServices()
const parkList = getParks()
const areaServices = getAreaServices()

// this module will have functions related to the services section of the database. It will create a string of the services the park provides. 

export const services = () => {
    let serviceHtml = ""
    for (const service of servicesList) {
        serviceHtml += `<div id="service--${service.id}"> ${service.name } </div>`
    }
    return serviceHtml
}


// adding an event listener to the service string.  when a service is clicked it will show what area it can be done in. it will read as ${} is available in ${} 
document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        // for the startsWith function used id of service for when anything with a service id is clicked the function will run
        if (itemClicked.id.startsWith("service")) {
            // declared new variable called serviceId
            const [, serviceId] = itemClicked.id.split("--")
            // iterating thru the services array  
            for (const service of servicesList) {
                // if statement to determine if the serviceId created from the itemClicked is equal to the service.id from the services array 
                if (service.id === parseInt(serviceId)) {
                    const filterPark = filterParks(service)
                    const parkName = filterParkString(filterPark)
                    window.alert(`${service.name} is available in: ${parkName}.`)
                }
            }
        }
    }

)

// function will be invoked in the service for loop, the parameter is the service created from the for loop. function returns an array that contains the information for the one id in the areaServices array
const filterParks = (service) => {
    let parkArr = []
    for (const area of areaServices) {
        if (service.id === area.servicesId) {
            parkArr.push(area)
        }
    }
    return parkArr
}

// function is invoked after the filterParks function. function takes the array created by that function in as the parameter, and will return the parks were the service called upon is offered. 
const filterParkString = (parkArr) => {
    let parkSerArr = []
    for (const location of parkArr) {
        for (const item of parkList) {
            if (location.parkId === item.id) {
                parkSerArr.push(item.name)
            }
        }
    }
    return parkSerArr.join(", ")
}
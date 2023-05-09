import { importWeekend, exportWeekend } from "../include/jsonreader.js";
import { Regatta, SignUp } from "../include/types.js";



//import
//export -> create
//form -> import -> select -> export

while (true) {
    console.log("ctrl + z, to interrupt execution.");


}

const r: Regatta = importWeekend("weekend7");
console.log("Drivers: ");
console.log(r.signUps.filter(s => s.canDrive).map(s => s.name));
console.log("Skippers: ");
console.log(r.signUps.filter(s => s.skipper).map(s => s.name));
console.log("Crews: ");
console.log(r.signUps.filter(s => s.crew).map(s => s.name));

const r2: Regatta = {
    id: "weekend8",
    name: "Central 2FR",
    date: "03-26-2023",
    twoDays: false,
    location: "MassMaritime",
    signUps: [
        {
            name: "Kate Myler",
            skipper: true,
            crew: false,
            canDrive: false,
            bothDays: true,
        },
        {
            name: "Ari S.",
            skipper: false,
            crew: true,
            canDrive: true,
            bothDays: true
        },
        {
            name: "Andy G.",
            skipper: true,
            crew: true,
            canDrive: true,
            bothDays: true
        },
        {
            name: "Ozel Y.",
            skipper: true,
            crew: true,
            canDrive: true,
            bothDays: true
        }
    ]
};

exportWeekend(r2);

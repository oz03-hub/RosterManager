import { SignUp, Regatta, TeamRoster } from "./types.js";
import fs from 'fs';

const dataPath = "./data/";
const rosterPath = "./rosters/";

export function importWeekend(weekendId: string): Regatta {
    const p = dataPath.concat(weekendId).concat('.json');
    if (!fs.existsSync(p)) {
        throw new Error(`${p} does not exist.`);
    }

    return JSON.parse(fs.readFileSync(p, "utf-8"));
}

export function exportWeekend(regatta: Regatta): void {
    exportBase(dataPath.concat(regatta.id).concat('.json'), regatta);
}

export function exportRoster(roster: TeamRoster): void {
    exportBase(rosterPath.concat(roster.regatta.id).concat('.json'), roster);
}

function exportBase(p: fs.PathOrFileDescriptor, obj: Regatta | TeamRoster): void {
    fs.writeFileSync(p, JSON.stringify(obj));
}

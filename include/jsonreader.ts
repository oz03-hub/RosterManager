import { SignUp, Regatta } from "./types.js";
import fs from 'fs';

const dataPath = "./include/data/";

export function importWeekend(weekendId: string): Regatta {
    const p = dataPath.concat(weekendId).concat('.json');
    if (!fs.existsSync(p)) {
        throw new Error(`${p} does not exist.`);
    }

    return JSON.parse(fs.readFileSync(p, "utf-8"));
}

export function exportWeekend(regatta: Regatta): void {
    fs.writeFileSync(dataPath.concat(regatta.id).concat('.json'), JSON.stringify(regatta));
}


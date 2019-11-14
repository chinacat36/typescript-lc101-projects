import {Astronaut} from './Astronaut';
import {Cargo} from './Cargo';
import {Payload} from './Payload';

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];
    constructor(name: string, totalCapacityKg: number){
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    sumMass(items: Payload[]): number {
        let total = 0;
        for(let i = 0; i<items.length; i++){
        total += items[i].massKg;
        }
        return total;
    }
    currentMassKg(): number {
        let astro = this.sumMass(this.astronauts);
        let cargo = this.sumMass(this.cargoItems);
        let total = astro + cargo;
    return total;
    }
    canAdd(item:Payload): boolean { 
        if((this.currentMassKg() + item.massKg) <= this.totalCapacityKg)
        return true;
    }
    addCargo(cargo: Cargo){
        if(this.canAdd(cargo) === true){
            this.cargoItems.push(cargo);
            return true;
        }else{
            return false;
        }
    }
    addAstronaut(astronaut: Astronaut){
        if(this.canAdd(astronaut) === true){
            this.astronauts.push(astronaut);
            return true;
        }else{
            return false;
        };
    };
};  
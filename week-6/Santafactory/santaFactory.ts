'use strict';

import { Toy } from "./toy";
import { Doll } from "./doll";
import { JumpingRope } from "./jumpingRope";
import { DottedBall } from "./dottedBall";

export class SantaFactory {
    balance : number;

    constructor(){
        this.balance = 200;
    }

    produce(name : string, color : string, size? : number) : Toy {
        let result : Toy;
        if(name === 'Doll' && this.balance >= 25){
            result = new Doll(color);
            this.balance -= result.cost;
            return result;
        }else if(name === 'JumpingRope' && this.balance >= 15){
            result = new JumpingRope(color,size);
            this.balance -= result.cost;
            return result;
        }else if(name === 'DottedBall' && this.balance >= 10){
            result = new DottedBall(color, size);
            this.balance -= result.cost;
            return result;
        }else{
            
        }
    }
}

let newsanta : SantaFactory = new SantaFactory();

console.log(newsanta.produce('Doll','haha',100))

console.log(newsanta)
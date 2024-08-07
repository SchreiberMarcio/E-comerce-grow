import { Base } from "./Base";

export class Product extends Base{

    public name:string;
    public value:number;

    constructor(name:string, value:number) {
        super();
        this.name = name;
        this.value = value;
    };

    public show():string{
        return""
    }
    
    private showDetails():string{
        return""
    }

                                // user = User 
    public comment(content:string, user: any):void{
    }

                            // user = User 
    public rate(rate:number, user:any):void{  
    }
}
class BasicCal{
    public result : number;

    constructor() {
        this.result = 0;
    }
    public  add(a:number,b:number):void{
        this.result = a+b;
        console.log(this.result);
    }
    public sub(a:number,b:number):void{
        this.result = a+b;
        console.log(this.result);
    }
}
class AdvCal extends BasicCal{
    constructor() {
        super();
    }
    // method overriding
    public add(a:number,b:number):void{
            this.result = a+b+a+b;
            console.log(this.result);
        }
    public mul(a:number,b:number):void{
        this.result = a*b;
        console.log(this.result);
    }

}
let basicCal:BasicCal = new BasicCal();
basicCal.add(10,20);
basicCal.sub(10,20);

let  advCal = new AdvCal();
advCal.add(30,40);
advCal.sub(30,40);
advCal.mul(30,40);



export class Thing {
    X: number;
    
    constructor(x: number) {
	this.X = x;
    }

    doIt() {
	console.log(this.X);
    }
}

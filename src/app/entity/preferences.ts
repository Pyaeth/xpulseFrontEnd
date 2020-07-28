export class Preferences {
    currencyCode:string;
    timeFrame:string;

    constructor(currencyCode:string, timeFrame:string) {
        this.currencyCode = currencyCode;
        this.timeFrame = timeFrame;
    }
}
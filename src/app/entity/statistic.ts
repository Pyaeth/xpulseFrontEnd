export class Statistic {
    noOfTransactions: number;
	noIncoming: number;
	noOutgoing: number;

	incoming: number;
	outgoing: number;
	
	balance: number;
	comparedToLast: number;
	
	statisticsInt: Map<string, number>;
	statisticsFlt: Map<string, number>;

    constructor(noOfTransactions: number,
        noIncoming: number,
        noOutgoing: number,
    
        incoming: number,
        outgoing: number,
        
        balance: number,
        comparedToLast: number,
        
        statisticsInt: Map<string, number>,
        statisticsFlt: Map<string, number>){
            this.noOfTransactions = noOfTransactions;
            this.noIncoming = noIncoming;
            this.noOutgoing = noOutgoing;

            this.incoming = incoming;
            this.outgoing = outgoing;
            
            this.balance = balance;
            this.comparedToLast = comparedToLast;
            
            this.statisticsInt = statisticsInt;
            this.statisticsFlt = statisticsFlt;
    }
}
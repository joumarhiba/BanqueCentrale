export interface Compte{
    id: number;
    enable : boolean;
    type: string;
    amount: number;
    numC: number;
    client:Object;
    agent: Object;
}

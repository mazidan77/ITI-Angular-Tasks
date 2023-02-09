class account{
    constructor(public accountNo=1 , public Balance=0){

    }
    debitAmount(){}
    creditAmount(){}
    getBalance(){}

}

interface Iaccount{
    Date_of_opening:number;
    addCustomer();
    removeCustomer();
}


class current_Account extends account implements Iaccount{
    interest_Rate:number;

    Date_of_opening:number;
    addCustomer(){};
    removeCustomer(){};

} 

class saving_Account extends account implements Iaccount{
    min_Balance:number;
    Date_of_opening:number;
    addCustomer(){};
    removeCustomer(){};

}
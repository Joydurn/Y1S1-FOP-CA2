//Class for creating Discount code objects, with 2 properties, code and percent
class Discount{
    constructor(code,percent){
        this.code=code;
        this.percent=percent;
    }
    //Method to display properties of discount code
    displayDiscount(){
        console.log("\t\t\tApplying discount code "+this.code+": "+this.percent+"% off.");
    }
}

//Array to store each discount code for main program to check against
var discountArray=[];

//Creating discount objects, key in these codes in the checkout to use
var NEW10=new Discount("NEW10",10);
var OFF80=new Discount("OFF80",80);
var IREALLYLIKENICEMEAL=new Discount("IREALLYLIKENICEMEAL",30);
var POGGIES=new Discount("POGGIES",35);

//Add each code into discount array
discountArray.push(NEW10,OFF80,IREALLYLIKENICEMEAL,POGGIES);

//Export the discount array
module.exports= discountArray;


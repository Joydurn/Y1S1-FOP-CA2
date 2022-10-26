//initalise input variable for user input in program
var input=require('readline-sync');


//initialise variable for use in cart
var addNotes;
//initialise array used to push items into for cart
var cartArray= [];

//Import delay function, Item class, and discount code Array from external files
const delay=require("./delay.js");
const Item = require('./offering.js');
const discountArray= require('./discountCodes.js');

//initalise input variable for user input in program
var input=require('readline-sync');

//help function from root menu to help unfamiliar users
function help(){
    console.log("\n\tTo navigate menus, use your keyboard and press the number that you want to continue with. Then press enter :)");
    delay(1000);
    console.log("\n\tFor contact information, visit www.nicemeal.com");
    delay(1000);
    console.log("\n\tHave a good day! Returning to root menu...\n\n");
    delay(1000);
    rootMenu();

}


//Primary menu functions
//Root menu: First menu that is executed at start of program, directs users to menu, cart, help menu or terminate program
function rootMenu(){
    console.log("===========================================================================")
    console.log("\nWelcome to Nicemeal!\n\n");
    delay(600);
    console.log("Root Menu\n");
    console.log("1. View Menu");
    console.log("2. View Cart");
    console.log("3. Help");
    console.log("0. Quit");
    //get input from user
    var answer=input.questionInt("Please enter number to navgiate menus: ");
    delay(600);
    //direct user to respective menus/terminate program
    switch(answer){
        case 0:
            console.log("Program terminating, have a good day!")
            delay(1500);
            process.exit(1);
        break;

        case 1:mainMenu();
        break;

        case 2:cart();
        break;

        case 3:help();
        break;

        default:console.log("\nInvalid input!\nReturning to root menu...\n\n");
                delay(1500);
                rootMenu();
    }
}

//Main menu function: Simply directs users to the sub menu functions (eg. side dish main dish etc)
function mainMenu(){
    console.log("===========================================================================")
    delay(500);
    console.log("\n\n\tMain Menu\n");
    console.log("\t1. Main Dishes");
    console.log("\t2. Side Dishes");
    console.log("\t3. Beverages");
    console.log("\t0. Return to root menu\n");
    //get user input
    var answer=input.questionInt("\tPlease enter number to navgiate menus: ");
    delay(600);
    //direct user to respective sub-menu functions
    switch(answer){
        case 0: rootMenu();
        break;

        case 1: mainDish();
        break;

        case 2: sideDish();
        break;

        case 3: drinks();
        break;

        //invalid input
        default: console.log("\nInvalid input!\nReturning to main menu...\n\n");
                 delay(1500);
                 mainMenu();
    }
}


//Sub menu functions
function mainDish(){
    console.log("\n\n\t\tMain Dishes\n");
    delay(600);
    console.log("\t\t1. Wanton Noodles");
    console.log("\t\t2. Char Siew Rice");
    console.log("\t\t3. Chicken Rice");
    console.log("\t\t0. Return to main menu\n");
    //get user input
    var answer=input.questionInt("\t\tPlease enter number to navgiate menus: ");
    delay(600);
    //process user input
    switch(answer){
        case 0: mainMenu();
        break;

        case 1: console.log("\n\t\t\tWanton Noodle: Choose type\n");
                delay(600);
                console.log("\t\t\t1. Soup");
                console.log("\t\t\t2. Dry");
                console.log("\t\t\t0. Return\n");
                //get input
                var answer2=input.questionInt("\t\t\tPlease enter number to navigate menus: ");
                delay(600);
                switch(answer2){
                    case 0: mainDish();
                    break;

                    case 1: 
                            //ask how many want
                            console.log("\n\t\t\t\tWanton Noodle: Soup $3\n");
                            var noOfWanton=input.questionInt("\t\t\t\tHow many to add to cart? 0 to return: ");
                            delay(600);
                            //cant order more than 50 per item
                            if (noOfWanton==0){mainDish()}
                            else if(noOfWanton>=1&&noOfWanton<=50){
                                //initialise instance of item class and push into cart
                                var wantonSoupObject=new Item(noOfWanton,3,"Wanton Noodle","Soup");
                                console.log("\nAdded:");
                                cartArray.push(wantonSoupObject);
                                wantonSoupObject.displayItem();
                                delay(600);
                                mainMenu();
                            }
                            else{
                                //when user inputs out of range number (more than 50 or negative number)
                                console.log("\n\t\t\t\tError: Please enter number between 0 and 50 inclusive!")
                                delay(1500);
                                mainDish();
                            }
                    break;

                    case 2:
                            console.log("\n\t\t\t\tWanton Noodle: Dry $3\n");
                            var noOfWanton=input.questionInt("\t\t\t\tHow many to add to cart? 0 to return: ");
                            if (noOfWanton==0){mainDish()}
                            else if(noOfWanton>=1&&noOfWanton<=50){
                                var wantonDryObject=new Item(noOfWanton,3,"Wanton Noodle","Dry");
                                console.log("\nAdded:");
                                cartArray.push(wantonDryObject);
                                wantonDryObject.displayItem();
                                delay(600);
                                mainMenu();
                            }
                             else{
                                console.log("\n\t\t\t\tError: Please enter number between 0 and 50 inclusive!")
                                delay(1500);
                                mainDish();
                            }
                    break;

                    default: console.log("\n\t\t\t\tError: Please enter number between 0 and 50 inclusive!");
                    delay(1500);
                    mainDish();
                }
        break;

        case 2:delay(600);
               console.log("\n\t\t\tChar Siew Rice $3\n");
               var noOfCharSiew=input.questionInt("\t\t\tHow many to add to cart? 0 to return: ");
               if (noOfCharSiew==0){mainDish()}
               else if(noOfCharSiew>=1&&noOfCharSiew<=50){
                   var CharSiewObject=new Item(noOfCharSiew,3,"Char Siew Rice","");
                   console.log("\nAdded:");
                   CharSiewObject.displayItem();
                   delay(600);
                   cartArray.push(CharSiewObject);
                   mainMenu();
               }
               else{
                   console.log("\n\t\t\t\tError: Please enter number between 0 and 50 inclusive!");
                   delay(1500);
                   console.log("\nInvalid input!\nReturning to menu...\n\n");
                   mainDish();
               }
        break;

        case 3:delay(600);
               console.log("\n\t\t\tChicken Rice: Choose type\n");
               console.log("\t\t\t1. Steamed");
               console.log("\t\t\t2. Roasted");
               console.log("\t\t\t0. Return\n");

               var answer2=input.questionInt("\t\t\tPlease enter number to navigate menus: ");
               delay(600);

               switch(answer2){
                   case 0: mainMenu();
                   break;

                   case 1:
                           console.log("\n\t\t\t\tSteamed Chicken Rice $3\n");
                           var noOfSChick=input.questionInt("\t\t\t\tHow many to add to cart? 0 to return: ");

                           if (noOfSChick==0){mainDish()}
                           else if(noOfSChick>=1&&noOfSChick<=50){
                               var SchickObject=new Item(noOfSChick,3,"Chicken Rice","Steamed");
                               console.log("\nAdded:");
                               cartArray.push(SchickObject);
                               SchickObject.displayItem();
                               delay(600);
                               mainMenu();
                           }
                           else{
                               console.log("\n\t\t\t\tError: Please enter number between 0 and 50 inclusive!");
                               delay(1500);
                               mainDish();
                           }
                   break;

                   case 2: 
                           console.log("\n\t\t\t\tRoasted Chicken Rice $3\n");
                           var noOfRChick=input.questionInt("\t\t\t\tHow many to add to cart? 0 to return: ");

                           if (noOfRChick==0){mainDish()}
                           else if(noOfRChick>=1&&noOfRChick<=50){
                               var RchickObject=new Item(noOfRChick,3,"Chicken Rice","Roasted");
                               console.log("\nAdded:");
                               cartArray.push(RchickObject);
                               RchickObject.displayItem();
                               delay(600);
                               mainMenu();
                           }
                            else{
                               console.log("\n\t\t\t\tError: Please enter number between 0 and 50 inclusive!")
                               delay(1500);
                               mainDish();
                           }
                    break;

                    default:console.log("\nInvalid input!\nReturning to menu...\n\n");
                            delay(1500);
                            mainDish();                   
               }
        break;

        default:console.log("\nInvalid input!\nReturning to menu...\n\n");
        delay(1500);
        rootMenu();;
    }
}



//Menu for side dishes. including all submenus for adding each dish to cart
function sideDish(){
    console.log("\n\t\tSide Dishes\n");
    delay(600);
    console.log("\t\t1. French Fries");
    console.log("\t\t2. Salad");
    console.log("\t\t3. Omelette");
    console.log("\t\t0. Return to main menu\n");

    var answer=input.questionInt("\t\tPlease enter number to navgiate menus: ")
    delay(600);

    switch(answer){
        case 0: mainMenu();
        break;

        case 1: console.log("\n\t\t\tFrench Fries $2\n");
                var noOfFries=input.questionInt("\t\t\tHow many to add to cart? 0 to return: ");
                delay(600);

                if (noOfFries==0){sideDish()} //returns to menu
                else if(noOfFries>=1&&noOfFries<=50){ //when user enters valid quantity
                    var FriesObject=new Item(noOfFries,2,"French Fries","");
                    console.log("\nAdded:");
                    cartArray.push(FriesObject);
                    FriesObject.displayItem(); //displays quantity and price
                    delay(600);
                    mainMenu();
                }
                else{ //when user enters out of range number
                    console.log("\n\t\t\tError: Please enter number between 0 and 50 inclusive!")
                    delay(1500);
                    sideDish();
                }
        break;

        case 2: console.log("\n\t\t\tSalad $2\n");
            var noOfSalad=input.questionInt("\t\t\tHow many to add to cart? 0 to return: ");
            delay(600);

            if (noOfSalad==0){sideDish()} //returns to menu
            else if(noOfSalad>=1&&noOfSalad<=50){ //when user enters valid quantity
                var SaladObject=new Item(noOfSalad,2,"Salad","");
                console.log("\nAdded:");
                cartArray.push(SaladObject);
                SaladObject.displayItem(); //displays quantity and price
                delay(1000);
                mainMenu();
            }
            else{ //when user enters out of range number
                console.log("\n\t\t\tError: Please enter number between 0 and 50 inclusive!");
                delay(1500);
                sideDish();
            }
        break;

        case 3: console.log("\n\t\t\tOmelette $2\n");
                var noOfOmelette=input.questionInt("\t\t\tHow many to add to cart? 0 to return: ");
                delay(600);

                if (noOfOmelette==0){sideDish()} //returns to menu
                else if(noOfOmelette>=1&&noOfOmelette<=50){ //when user enters valid quantity
                    var OmeletteObject=new Item(noOfOmelette,2,"Omelette","");
                    console.log("\nAdded:");
                    cartArray.push(OmeletteObject);
                    OmeletteObject.displayItem(); //displays quantity and price
                    delay(1000);
                    mainMenu();
                }
                else{ //when user enters out of range number
                    console.log("\n\t\t\tError: Please enter number between 0 and 50 inclusive!");
                    delay(1500);
                    sideDish();
                }
        break;

        default: console.log("\nInvalid input!\nReturning to menu...\n\n");
        delay(1500);
        sideDish();
    }
}


//Menu pouch for drink. including all submenus for adding each drink to cart
function drinks(){
    console.log("\n\t\tDrinks\n");
    delay(600);
    console.log("\t\t1. Hot");
    console.log("\t\t2. Cold");
    console.log("\t\t0. Return to main menu\n");

    var answer=input.questionInt("\t\tPlease enter number to navgiate menus: ")
    delay(600);

    switch(answer){
        case 0:
            console.log("Returning...");
            delay(600);
            mainMenu();
        break;

        case 1: 
            console.log("\n\t\t\tHot Drinks\n");
            console.log("\t\t\t1. Milo");
            console.log("\t\t\t2. Oolong Tea");
            console.log("\t\t\t3. Coffee");
            console.log("\t\t\t0. Return\n");
            var answer2=input.questionInt("\t\t\tPlease enter number to navgiate menus: ")
            delay(600);
                switch(answer2){
                    case 0: drinks();
                    break;

                    case 1: 
                        console.log("\n\t\t\t\tMilo $1\n");
                        var noOfHMilo=input.questionInt("\t\t\t\tHow many to add to cart? 0 to return: ");
                        delay(600);
                        if (noOfHMilo==0){drinks()} //returns to menu
                        else if(noOfHMilo>=1&&noOfHMilo<=50){ //when user enters valid quantity
                            var HMiloObject=new Item(noOfHMilo,1,"Hot Milo","");
                            console.log("\nAdded:");
                            cartArray.push(HMiloObject);
                            HMiloObject.displayItem(); //displays quantity and price
                            delay(1000);
                            mainMenu();
                        }
                        else{ //when user enters out of range number
                            console.log("\n\t\t\t\tError: Please enter number between 0 and 50 inclusive!")
                            delay(1500);
                            drinks();
                        }
                    break;

                    case 2:
                        console.log("\n\t\t\t\tOolong Tea $1\n");
                        var noOfTea=input.questionInt("\t\t\t\tHow many to add to cart? 0 to return: ");
                        delay(600);
                        if (noOfTea==0){drinks()} //returns to menu
                        else if(noOfTea>=1&&noOfTea<=50){ //when user enters valid quantity
                            var teaObject=new Item(noOfTea,1,"Oolong Tea","");
                            console.log("\nAdded:");
                            cartArray.push(teaObject);
                            teaObject.displayItem(); //displays quantity and price
                            delay(1000);
                            mainMenu();
                        }
                        else{ //when user enters out of range number
                            console.log("\n\t\t\t\tError: Please enter number between 0 and 50 inclusive!");
                            delay(1500);
                            drinks();
                        }
                    break;

                    case 3:
                        console.log("\n\t\t\t\tCoffee $1\n");
                        var noOfCoffee=input.questionInt("\t\t\t\tHow many to add to cart? 0 to return: ");
                        delay(600);
                        if (noOfCoffee==0){drinks()} //returns to menu
                        else if(noOfCoffee>=1&&noOfCoffee<=50){ //when user enters valid quantity
                            var coffeeObject=new Item(noOfCoffee,1,"Coffee","");
                            console.log("\nAdded:");
                            cartArray.push(coffeeObject);
                            coffeeObject.displayItem(); //displays quantity and price
                            delay(1000);
                            mainMenu();
                        }
                        else{ //when user enters out of range number
                            console.log("\n\t\t\t\tError: Please enter number between 0 and 50 inclusive!");
                            delay(1500);
                            drinks();
                        }
                    break;

                    default:console.log("\nInvalid input!\nReturning to root menu...\n\n");
                    delay(1500);
                    drinks();                
                }
        break;

        case 2: 
            console.log("\n\t\t\tCold Drinks\n");
            console.log("\t\t\t1. Coke");
            console.log("\t\t\t2. Sprite");
            console.log("\t\t\t3. Green Tea (Pokka)");
            console.log("\t\t\t0. Return\n");

            var answer2=input.questionInt("\t\t\tPlease enter number to navgiate menus: ")
            delay(600);

            switch(answer2){
                case 0: drinks();
                break;

                case 1: 
                    console.log("\n\t\t\t\tCoke $1\n");
                    var noOfCoke=input.questionInt("\t\t\t\tHow many to add to cart? 0 to return: ");
                    delay(600);
                    if (noOfCoke==0){drinks()} //returns to menu
                    else if(noOfCoke>=1&&noOfCoke<=50){ //when user enters valid quantity
                        var CokeObject=new Item(noOfCoke,1,"Coke","");
                        console.log("\nAdded:");
                        cartArray.push(CokeObject);
                        CokeObject.displayItem(); //displays quantity and price
                        delay(1000);
                        mainMenu();
                    }
                    else{ //when user enters out of range number
                        console.log("\n\t\t\t\tError: Please enter number between 0 and 50 inclusive!")
                        delay(1500);
                        drinks();
                    }
                break;

                case 2:
                    console.log("\n\t\t\t\tSprite $1\n");
                    var noOfSprite=input.questionInt("\t\t\t\tHow many to add to cart? 0 to return: ");
                    delay(600);
                    if (noOfSprite==0){drinks()} //returns to menu
                    else if(noOfSprite>=1&&noOfSprite<=50){ //when user enters valid quantity
                        var spriteObject=new Item(noOfSprite,1,"Sprite","");
                        console.log("\nAdded:");
                        cartArray.push(spriteObject);
                        spriteObject.displayItem(); //displays quantity and price
                        delay(1000);
                        mainMenu();
                    }
                    else{ //when user enters out of range number
                        console.log("\n\t\t\t\tError: Please enter number between 0 and 50 inclusive!");
                        delay(1500);
                        drinks();
                    }
                break;

                case 3:
                    console.log("\n\t\t\t\tGreen Tea (Pokka) $1\n");
                    var noOfGTea=input.questionInt("\t\t\t\tHow many to add to cart? 0 to return: ");
                    delay(600);
                    if (noOfGTea==0){drinks()} //returns to menu
                    else if(noOfGTea>=1&&noOfGTea<=50){ //when user enters valid quantity
                        var gteaObject=new Item(noOfGTea,1,"Green Tea","");
                        console.log("\nAdded:");
                        cartArray.push(gteaObject);
                        gteaObject.displayItem(); //displays quantity and price
                        delay(1000);
                        mainMenu();
                    }
                    else{ //when user enters out of range number
                        console.log("\n\t\t\t\tError: Please enter number between 0 and 50 inclusive!");
                        delay(1500);
                        drinks();
                    }
                break;

                default:console.log("\nInvalid input!\nReturning to menu...\n\n");
                delay(1500);
                drinks();                
            }
        break;

        default: console.log("\nInvalid input!\nReturning to menu...\n\n");
        delay(1500);
        drinks();   
    }
}


//Cart menu function, lists items in the cart with their properties. also includes all submenus for deleting items, adding notes for the restaurant to know, and checking out
function cart(){
    console.log("\n\n===========================================================================")
    console.log("Cart:");
    delay(600);
    //detect if there are items in the cart, if none, return
    var i=0;
    var grandTotal=0;
    if (cartArray.length==0){
        console.log("\t\nThere are no items in the cart, returning to root menu");
        delay(600);
        rootMenu();
    }else{
        //if have items in cart, print out cart items
        while(i<cartArray.length){
            process.stdout.write((i+1)+".   ");
            cartArray[i].displayItem();
            //compute grand total of all cart items
            grandTotal+=cartArray[i].totalPrice;
            i++;        
        }
        delay(1000);

        //Display grand total and additional notes
        console.log("\nGrand Total: $"+grandTotal);
        console.log("\nAdditional notes: "+addNotes);
        delay(1000);

        console.log("\n\n\tWhat would you like to do?\n");
        console.log("\t1. Checkout");
        console.log("\t2. Add additional notes");
        console.log("\t3. Delete an item");
        console.log("\t0. Return to root menu\n");

        //get user input
        var answer=input.questionInt("\tPlease enter number to navgiate menus: ");
        delay(600);

        switch(answer){
            case 0: rootMenu();
            break;

            case 1: 
            //checkout with discount codes (discount codes found in discountCodes.js)
                console.log("\n\t\tAre you sure you want to checkout? If you have a discount code, please enter it now\n");
                delay(600);
                console.log("\t\t1. Yes");
                console.log("\t\t0. No (return)");

                var answer3=input.question("\t\tPlease enter number or discount code: ");
                delay(600);

                switch(answer3){
                    case 0: cart();
                    break;
                    
                    case 1: console.log("\n\t\t\tYour order has been sent! Your NiceMeal will be delivered shortly!");
                            delay(600);
                            console.log("\t\t\tTerminating program, have a nice day!");
                            delay(1500);
                            process.exit(1);
                    break;

                    //if not 1 or 0, check if it is a discount code
                    default:var i=0;
                            while(i<discountArray.length){
                                if(discountArray[i].code==answer3){
                                    //if it is code, display properties of code
                                    discountArray[i].displayDiscount();
                                    delay(600);
                                    //compute new total after discount
                                    grandTotal=((100-discountArray[i].percent)/100)*grandTotal;
                                    //display new grand total
                                    console.log("\n\t\t\tNew grand total: $"+grandTotal);
                                    delay(600);
                                    console.log("\n\t\t\tYour order has been sent! Your NiceMeal will be delivered shortly!");
                                    delay(600);
                                    console.log("\t\t\tTerminating program, have a nice day!");
                                    delay(1500);
                                    //terminate
                                    process.exit(1);
                                }//increment i to check all codes in loop
                                else{i++}
                            }  
                            //if not a code, return to cart
                            console.log("\nInvalid input!, check that u entered the code correctly\nReturning to menu...\n\n");
                            delay(1500);
                            cart();   
                }
            break;

            case 2: //add additional notes
                addNotes=input.question("\n\t\tPlease enter any notes you have for your order (less rice, less ice etc): ");
                delay(600);
                console.log("\n\t\t\tDone! Returning to cart...");
                delay(600);
                cart();
            break;

            case 3: //delete items
                var answer3=input.questionInt("\n\t\tWhich item to delete? (enter the number as shown above in cart) ");
                delay(600);

                //check if input is matching one of the item numbers
                if (answer3>=1&&answer3<=cartArray.length){
                    //remove object from class
                    cartArray.splice((answer3-1),1);
                    console.log("Done! Item "+answer3+" has been deleted from the cart, returning to cart...");
                    delay(600);
                    cart();
                }else{
                    console.log("\nInvalid input!\nReturning to cart...\n\n");
                    delay(1500);
                    cart();   
                }
            break;

            default:console.log("\nInvalid input!\nReturning to cart...\n\n");
            delay(1500);
            cart();   
        }
    }
}


//Main program, just start into the root menu
rootMenu();



//Item class to create food/drink objects, later will be stored into cart array
class Item{
    constructor(qty,price,item,type){
        //properties: quantiy, price, item name, item type, and total price computed
        this.qty=qty;
        this.price=price;
        this.item=item;
        this.type=type;
        this.totalPrice=this.price*this.qty;
    }
    //method to display properties of item to user, used when item added to cart and when displaying items in cart
    displayItem(){
        console.log(this.qty+" x "+this.item+" "+this.type+" Price: $"+this.price+"   Total: $"+this.totalPrice);
    }
}

module.exports=Item;






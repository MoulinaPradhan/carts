import React from 'react';
import CartItem from './CartItem'

class Cart extends React.Component {
    constructor(){
        super();
        this.state={
           products:[
               {
                price:999,
                title:'Mobile',
                qty:1,
                img:'',
                id:1
               },
               {
                price:999,
                title:'Watch',
                qty:10,
                img:'',
                id:2
               },
               {
                price:9899,
                title:'Pen',
                qty:11,
                img:'',
                id:3
               },
           ]
        }
    }
    handleDelete=(id) =>{
        const {products} = this.state;

        const items= products.filter((item) => item.id !== id);
        //this will have the array of the products that the user wants//

        this.setState({
            products:items
        })
    }
    handleIncrease = (product) =>{
        console.log("hey",product);
        const{products} = this.state;
        const index =products.indexOf(product);

        products[index].qty +=1;
        this.setState({
            products:products
        })
    }

    handleDecrease = (product) =>{
        console.log("hey",product);
        const{products} = this.state;
        const index =products.indexOf(product);
if (products[index].qty ===0){
    return;
}

        products[index].qty -=1;
        this.setState({
            products:products
        })
    }
    
    render () {
       const {products} = this.state;
        return (
            <div className="cart">
{ products.map((product) => {
return  <CartItem 
product={product}
 key={product.id}
 onIncrease ={this.handleIncrease}
 onDecrease ={this.handleDecrease}
 onDelete={this.handleDelete}
 />
  })}
                 
                 </div>
        );
    
    }
}



export default Cart;
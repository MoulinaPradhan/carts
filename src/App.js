import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import * as firebase from 'firebase';

class App extends React.Component {

  constructor () {
    super();
    this.state = {
      products: [],
      loading:true
    };
    this.db = firebase.firestore();
  }
   
// componentDidMount() {
  //   firebase
  //     .firestore()
  //     .collection("products")
  //     .get()
  //     .then(snapshot => {
  //       const products = snapshot.docs.map(doc => {
  //         const data = doc.data();
  //         data["id"] = doc.id;
  //         return data;
  //       });
  //       this.setState({ products: products, loading: false });
  //     });
  // }

componentDidMount() {
 this.db
 .collection("products")
//.where('price','>',900)
    //.where("price", "==", "laptop")//
   //without refreshing the changes are applied//
   //.orderBy("price","desc")
   .onSnapshot(snapshot => {
     const products = snapshot.docs.map(doc => {
        const data = doc.data();
        data["id"] =doc.id;
        return data; 
     });
     this.setState({ products: products, loading:false});
   });
}



  handleIncreaseQuantity = (product) => {
const { products } = this.state;
    const index = products.indexOf(product);

    /*products[index].qty += 1;

    this.setState({
      products
    });*/
const docRef = this.db.collection("products").doc(products[index].id);
docRef
   .update({ qty: products[index].qty + 1 })
   .then( () => {
     console.log("document updated sucessfully");
   })
   .catch(error => {
     console.log(error);
   });

  };

  handleDecreaseQuantity = (product) => {
    
    const { products } = this.state;
    const index = products.indexOf(product);

  if (products[index].qty === 0) {
      return;
    }
    const docRef = this.db.collection("products").doc(products[index].id);
    docRef
       .update({ qty: products[index].qty - 1 })
       .then( () => {
         console.log("document reduced sucessfully");
       })
       .catch(error => {
         console.log(error);
       });

  };

  handleDeleteProduct = (id) => {
    const { products } = this.state;

    const docRef = this.db.collection("products").doc(id);

    docRef
      .delete()
      .then(() => {
        console.log("Deleted sucessfully");
      })
      .catch(err => {
        console.log(err);
      });


  
  };

  getcountOfCartItems = () => {
    const { products} = this.state;
    let count = 0;

    products.forEach(product => {
      count += product.qty;
    });
    return count;
  };

  getcartTotal = () => {
    const { products } = this.state;
    let cartTotal = 0;

    products.map(product => {
      if (product.qty > 0) {
        cartTotal = cartTotal + product.qty * product.price;
      }
      return "";
    });

    return cartTotal;
  
  };

  addProduct = () => {
    this.db
      .collection("products")
      .add({
        img: "",
        price: 900,
        qty: 3,
        title: "laptop"
      })
      .then(docRef => {
        docRef.get().then(snapshot => {
          console.log("Product has been added", snapshot.data());
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
 

  render () {
    const { products,loading} = this.state;
    return (
      <div className="App">
        <Navbar count={this.getcountOfCartItems()} />
        <button onClick={this.addProduct} style ={{ padding:20,fontSize:20 }}>
          Add a product
        </button>
        <Cart
          products={products}
          onIncrease={this.handleIncreaseQuantity}
          onDecrease={this.handleDecreaseQuantity}
          onDelete={this.handleDeleteProduct}
          products = {products}
        />
        {loading && <h1 style={styles.heading}>loading products....</h1>}
        <div style={{ padding:10, fontSize:20}}>
          Total:{this.getcartTotal()}
        </div>
      </div>
    );
  }
}

const styles ={
  heading:{
    fontSize:20,
    color:'red'
  }
}

export default App;

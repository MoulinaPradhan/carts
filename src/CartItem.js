import React from 'react';

const CartItem = (props) =>{
    const {price,title,qty} = props.product;
        const { product, onIncrease,onDecrease,onDelete} = props;
        return(
            <div className="cart-item">
                {this.props.jsx}
                <div className="left-block">
                    <img style={styles.image}/>
                </div>
<div className="right-block">
        <div style={{ fontSize:25}}>{title}</div>
        <div style={{ color:'#777'}}>{price}</div>
    <div style={{ color:'#777'}}>{qty}</div>
    <div className="cart-item-actions">
        {/* buttons*/}
        <img alt="increase" className="action-icons" src="https://t4.ftcdn.net/jpg/00/70/16/29/240_F_70162903_5mFpUbO3ZfRyD4gslH8j2c5VxjGMKU9G.jpg" onClick={() => onIncrease(product) } />
        <img alt="decrease" className="action-icons" src="https://as2.ftcdn.net/jpg/03/16/36/03/500_F_316360373_uWcj5rZxsUbmoAogMfow8EZhUOn7FTM0.jpg" onClick={() => onDecrease(product)}/>
        <img alt="delete" className="action-icons" src="https://as1.ftcdn.net/jpg/03/40/32/90/500_F_340329038_j7H8dA1F0vdbw4ltVYNdZe7b8zv1KWLu.jpg" onClick={() => onDelete(product.id)}/>
        
    </div>
</div>
            </div>
        );
    }

const styles = {
    image:{
        height:110,
        width:110,
        borderRadius:4,
        background:'#ccc'

    }
}

export default CartItem;
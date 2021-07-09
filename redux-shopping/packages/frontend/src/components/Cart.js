import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as cartActions from "../store/actions/cart.actions";

class Cart extends React.Component {
  componentDidMount() {
    const { getCartData } = this.props;
    getCartData();
  }
  changeCount = (e, id) => {
    const { updateCartData } = this.props;
    updateCartData({ cid: id, count: e.target.value });
  };
  render() {
    const { carts, deleteCartData } = this.props;
    return (
      <section className="container content-section">
        <h2 className="section-header">购物车</h2>
        <div className="cart-row">
          <span className="cart-item cart-header cart-column">商品</span>
          <span className="cart-price cart-header cart-column">价格</span>
          <span className="cart-quantity cart-header cart-column">数量</span>
        </div>
        <div className="cart-items">
          {carts.map((cart) => (
            <div className="cart-row" key={cart.id}>
              <div className="cart-item cart-column">
                <img
                  alt=""
                  className="cart-item-image"
                  src={`http://localhost:3005${cart.thumbnail}`}
                  width="100"
                  height="100"
                />
                <span className="cart-item-title">{cart.title}</span>
              </div>
              <span className="cart-price cart-column">
                ￥{cart.price * cart.count}
              </span>
              <div className="cart-quantity cart-column">
                <input
                  className="cart-quantity-input"
                  type="number"
                  value={cart.count}
                  onChange={(e) => this.changeCount(e, cart.id)}
                />
                <button
                  className="btn btn-danger"
                  type="button"
                  onClick={() => deleteCartData(cart.id)}
                >
                  删除
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="cart-total">
          <strong className="cart-total-title">总价</strong>
          <span className="cart-total-price">
            ￥
            {carts.reduce((acc, cur) => {
              return (acc += cur.price * cur.count);
            }, 0)}
          </span>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({ carts: state.cartReducer });
const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(cartActions, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(Cart);

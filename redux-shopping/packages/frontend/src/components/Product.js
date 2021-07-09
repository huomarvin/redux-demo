import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as cartActions from "../store/actions/cart.actions";
import * as productActions from "../store/actions/product.actions";

class Product extends React.Component {
  componentDidMount() {
    const { loadProducts } = this.props;
    loadProducts();
  }
  render() {
    const { products = [], addCartData } = this.props;
    return (
      <section className="container content-section">
        <h2 className="section-header">商品列表</h2>
        <div className="shop-items">
          {products.map((product) => (
            <div className="shop-item" key={product.id}>
              <img
                alt={""}
                className="shop-item-image"
                src={`http://localhost:3005${product.thumbnail}`}
              />
              <span className="shop-item-title">{product.title}</span>
              <div className="shop-item-details">
                <span className="shop-item-price">￥{product.price}</span>
                <button
                  className="btn btn-primary shop-item-button"
                  type="button"
                  onClick={() => addCartData(product.id)}
                >
                  加入购物车
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => state.productReducer;

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(productActions, dispatch),
  ...bindActionCreators(cartActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);

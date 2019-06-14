import React, { Component, Fragment } from 'react';
import ProductList from '../../components/ProductList/ProductList';
import ProductItem from '../../components/ProductItem/ProductItem';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { actFetchProductsRequest, actDeleteProductRequest } from '../../actions/index';

class ProductListPage extends Component {



    componentDidMount() {
        this.props.fetchAllProducts();
    }

    onDelete = (id) => {
        this.props.onDeleteProduct(id);
    }

    findIndex = (products, id) => {
        var result = -1;
        products.forEach((product, index) => {
            if(product.id === id) {
                result = index;
            }
        });
        return result;
    }


    render() {

        var { products } = this.props;
        return (
            <Fragment>

                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <NavLink to="/product/add" className="btn btn-info mt-10 mb-10">
                                Thêm sản phẩm
                            </NavLink>

                            <ProductList>
                                {this.showProducts(products)}
                            </ProductList>

                        </div>
                    </div>

                </div>

            </Fragment>


        );
    };

    showProducts = (products) => {
        var result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <ProductItem
                        key={index}
                        index={index}
                        product={product}
                        onDelete={this.onDelete}
                    />
                );
            });
        }

        return result;
    };


};


const mapStateToProps = state => {
    return {

        products: state.products

    }
}


const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllProducts : () => {
            dispatch(actFetchProductsRequest());
        },
        onDeleteProduct : (id) => {
            dispatch(actDeleteProductRequest(id));
        }
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);

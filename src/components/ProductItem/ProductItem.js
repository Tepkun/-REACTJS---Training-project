import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';

class ProductItem extends Component {

    onDelete = (id) => {
        if(window.confirm('Are u sure ?')) {
            this.props.onDelete(id);
        }

    }


    render() {

        var { index, product } = this.props;

        var statusName = product.status ? 'Còn Hàng' : 'Hết Hàng';
        var statusClass = product.status ? 'warning' : 'dark';


        return (
            <Fragment>

                <tr>
                    <th scope="row" >{ index + 1 }</th>
                    <td>{ product.id }</td>
                    <td>{ product.name }</td>
                    <td>{ product.price }</td>
                    <td>
                        <span className={ `badge badge-${ statusClass }` }>
                            { statusName }
                        </span>
                    </td>
                    <td>
                        <NavLink 
                            to={ `product/${ product.id }/edit` }
                            className="btn btn-success mr-10"
                        >
                            Sửa
                        </NavLink>

                        <button 
                            type="button" 
                            className="btn btn-danger"
                            onClick={ () => this.onDelete(product.id) }
                        >
                            Xóa
                        </button>
                    </td>
                </tr>


            </Fragment>


        );
    };
};


export default ProductItem;

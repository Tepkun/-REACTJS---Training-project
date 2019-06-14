import React, { Component, Fragment } from 'react';

class ProductList extends Component {
    render() {
        return (
            <Fragment>

                <div className="card">
                    <div className="card-header">
                        Danh sách sản phẩm
                    </div>
                    <div className="card-body">

                        <table className="table table-striped table-inverse table-hover">
                            <thead className="thead-inverse">
                                <tr>
                                    <th>STT</th>
                                    <th>Mã</th>
                                    <th>Tên</th>
                                    <th>Giá</th>
                                    <th>Trạng Thái</th>
                                    <th>Hành Động</th>
                                </tr>
                            </thead>
                            <tbody>
                                { this.props.children }
                            </tbody>
                        </table>

                    </div>

                </div>


            </Fragment>


        );
    };
};


export default ProductList;

import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { actAddProductRequest, actGetProductRequest, actUpdateProductRequest } from '../../actions/index';
import { connect } from 'react-redux';


class ProductActionPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            txtName: '',
            txtPrice: '',
            chkbStatus: ''
        };
    }

    componentDidMount() {
        var { match } = this.props;
        if (match) {
            var id = match.params.id;
            this.props.onEditProduct(id);
        }

    }

    componentWillReceiveProps(nextProps) {
        if(nextProps && nextProps.itemEditting) {
            var { itemEditting } = nextProps;
            this.setState({
                id: itemEditting.id,
                txtName: itemEditting.name,
                txtPrice: itemEditting.price,
                chkbStatus: itemEditting.status
            });

        }

    }


    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({
            [name]: value
        });

    }

    onSave = (event) => {
        event.preventDefault();
        var { id, txtName, txtPrice, chkbStatus } = this.state;
        var { history } = this.props;
        var product = {
            id: id,
            name: txtName,
            price: txtPrice,
            status: chkbStatus
        };

        if (id) {
            this.props.onUpdateProduct(product);
            history.goBack();
        } else {
            this.props.onAddProduct(product);
            history.goBack();
        }
    }

    render() {

        var { txtName, txtPrice, chkbStatus } = this.state;

        return (
            <Fragment>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">

                            <form onSubmit={this.onSave} >
                                <div className="form-group row">
                                    <label className="col-12 col-form-label">Tên sản phẩm</label>
                                    <div className="col-12">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="txtName"
                                            value={txtName}
                                            onChange={this.onChange}
                                        />
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label className="col-12 col-form-label">Giá</label>
                                    <div className="col-12">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="txtPrice"
                                            value={txtPrice}
                                            onChange={this.onChange}
                                        />
                                    </div>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            name="chkbStatus"
                                            value={chkbStatus}
                                            onChange={this.onChange}
                                            checked={chkbStatus}
                                        />
                                        Còn Hàng
                                    </label>
                                </div>

                                <div className="mt-10">
                                    <NavLink to="/product-list" className="btn btn-primary mr-10">Trở Lại</NavLink>
                                    <button type="submit" className="btn btn-primary">Lưu Lại</button>
                                </div>
                            </form>

                        </div>
                    </div>

                    {/* <div className="row">


                        <button type="button" className="btn btn-primary btn-lg mt-10 mb-10" data-toggle="modal" data-target="#modelId" >
                            Thêm sản phẩm
                        </button>


                        <div className="modal fade" id="modelId" tabIndex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                            <div className="modal-dialog modal-lg" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title">Thêm sản phẩm</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>

                                    <form>
                                        <div className="modal-body">
                                            <div className="form-group row">
                                                <label className="col-12 col-form-label">Tên sản phẩm</label>
                                                <div className="col-12">
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-12 col-form-label">Giá</label>
                                                <div className="col-12">
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="form-check">
                                                <label className="form-check-label">
                                                    <input type="checkbox" className="form-check-input" />
                                                    Còn Hàng
                                              </label>
                                            </div>

                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                            <button type="submit" className="btn btn-primary">Save</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div> */}


                </div>

            </Fragment>


        );
    };
};

const mapStateToProps = state => {
    return {
        itemEditting: state.itemEditting
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddProduct: product => {
            dispatch(actAddProductRequest(product));
        },
        onEditProduct: id => {
            dispatch(actGetProductRequest(id));
        },
        onUpdateProduct : product => {
            dispatch(actUpdateProductRequest(product));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);

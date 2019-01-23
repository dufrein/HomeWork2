import React  from "react";
import {Link} from "react-router-dom";
import THeader from "./Theader";
import Item from "./Item";
import SearchPlugin from './SearchPlugin';
import "../containers/app.css";
import createBrowserHistory from "history/createBrowserHistory";
import {productsBase} from '../containers/App';

const history = createBrowserHistory();

export default class TableProds extends React.Component {
	constructor (props) {
		super(props);	
		this.tableSearch =  this.tableSearch.bind(this);
		this.state = {productsList: productsBase,searchValue:''};
	}

	updateData = (value) => {
		this.setState({productsList:value});
		this.props.updateData(value);
	}

	tableSearch =(value) =>{
		this.setState({searchValue:value}); 
	}
	render () {
		const Items = this.state.productsList.map( function(item,i){ 
		if (item.name.toLowerCase().search(this.state.searchValue.toLowerCase())!==-1 || this.state.searchValue===''){

		 	return (
		 		<Item itemData={item} baseData={this.props.productsBase} key={item.id} 
		 		updateData={this.updateData}  parent={'TableProds'}/>
		 		)	
		 	 }
		 }.bind(this));	

		return (
		<React.Fragment>
			<SearchPlugin filter={this.tableSearch} />
			<table className = "tabProds" >
			<THeader />
			<tbody>
			{Items}
			</tbody>	
			</table>
			<div className="buttonsBasket"><Link to="/basket" className="buttonStyle" >Корзина</Link></div>
		</React.Fragment>
			)
		}
	}

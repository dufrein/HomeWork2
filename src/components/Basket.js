import React from "react";
import {Link} from "react-router-dom";
import Item from "./Item";
import THeader from "./Theader";
import "../containers/app.css";
import createBrowserHistory from "history/createBrowserHistory";
import {productsBase} from '../containers/App';
const history = createBrowserHistory();

export default class Basket extends React.Component {
	constructor (props) {
		super(props);
		this.state = {productsList: productsBase};
	}

	updateData = (value) => {
		this.setState({productsList:value});
		this.props.updateData(value);
	}
	clearBasket = () => {
		let productsBase = this.props.productsBase.map((item)=>{return {...item,count:0}}); 
		this.updateData(productsBase);	
	}
	
	render () {
		let Items = this.state.productsList.filter( function (item)	{
			return item.count>0
		});
		let totalCost = 0;
		Items = Items.map( function (item)	{
				totalCost = totalCost +item.count*item.price;
				return (			
					 <Item itemData = {item} baseData={this.props.productsBase} key={item.id} 
				updateData={this.updateData}  parent={'Basket'}/> 
					);
			}.bind(this));
		totalCost = <tr><td>Всего на: ${totalCost}</td></tr>;
		Items = (Items.length!=0)?Items:null;
		const emptyBasket =<tr><td></td><td><br/>Корзина пуста</td><td></td></tr>;	
	
		return ( 
 			<React.Fragment> 
			<table  className = "tabProds" >
			<THeader />
			<tbody>
			{Items||emptyBasket}
			</tbody>
			<tfoot>
			{totalCost}
			</tfoot>
			</table>	
			<div className="buttonsBasket"><Link to="/" className="buttonStyle" >	Перейти в список товаров</Link>
			<button  className="buttonClearBasket" onClick = {this.clearBasket}>Очистить корзину</button></div>
			</React.Fragment>
			)
	}
}
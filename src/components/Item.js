import React  from "react";

export default class Item extends React.Component {
	constructor (props) {
		super(props);
		this.buttonClickMinus = this.buttonClickMinus.bind(this);
		this.buttonClickPlus = this.buttonClickPlus.bind(this);
		this.buttonClickMinusAll = this.buttonClickMinusAll.bind(this);
	}
	buttonClickPlus () {
		let newBaseData = [...this.props.baseData];
		newBaseData[this.props.itemData.id-1].count++;
		this.props.updateData(newBaseData);
	}
	buttonClickMinus () {
		let newBaseData = [...this.props.baseData];
		newBaseData[this.props.itemData.id-1].count--;
		this.props.updateData(newBaseData);
	}
	buttonClickMinusAll () {
		let newBaseData = [...this.props.baseData];
		newBaseData[this.props.itemData.id-1].count=0;
		this.props.updateData(newBaseData);
	}
	render () {
		console.dir('nuu');
		let item = this.props.itemData;
		const buttonMinus = ( (parent)=> {
			if (parent==="Basket") {
				return (<td><button className ="buttonTableStyle" onClick={this.buttonClickMinus}>-</button>
				<button className ="buttonTableStyle" onClick={this.buttonClickMinusAll}>Удалить все</button></td>);
			}
			else {
				return (<td><button className ="buttonTableStyle" onClick={this.buttonClickPlus}>+</button></td>);
			}
		})(this.props.parent);
	
		return (
			<tr>
			<td> {item.name}</td>
			<td>{item.price}</td>
			<td>{item.count}</td>
			{buttonMinus}
			</tr>	
			)
	}

}
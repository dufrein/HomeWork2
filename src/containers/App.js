import React  from "react";
import {Router,Route, Link,Switch} from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import TableProds from '../components/TableProds';
import Basket from '../components/Basket';
import NotFound from '../components/NotFound'
import "./app.css";

const history = createBrowserHistory();

export let productsBase = [
{name:'apple', id:1,price:11, count:0},
{name:'pear', id:2,price:6, count:0},
{name:'mandarine', id:3,price:14, count:0},
{name:'orange', id:4,price:23, count:0},
{name:'pineapple', id:5,price:17, count:0}
];

export default class App extends React.PureComponent {
	constructor(props) {
		super(props);
	}

	updateData = (value) => {
		productsBase = value;
	}
	
	render() {
		return (
 			<Router history={history}>
				<Switch>
				<Route exact path='/' component={()=>(<TableProds productsBase={productsBase} updateData={this.updateData} searchValue={this.searchValue}/>)}/>  
				<Route path='/basket' component={()=>(<Basket productsBase={productsBase} updateData={this.updateData}/>)} />
				<Route path="*" component={NotFound} />
				</Switch>
			</Router>
		)
	}		
}


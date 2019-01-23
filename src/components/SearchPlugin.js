import React  from 'react';

export default class SearchPlugin extends React.Component{
             
    constructor(props){
        super(props);
        this.onTextChanged = this.onTextChanged.bind(this);
    }
             
    onTextChanged(e){
        let value = e.target.value.trim();   
        this.props.filter(value);  
    }
             
    render() {
        return <input  type="search" id="mySearch"  placeholder="Введите часть названия товара"  onChange={this.onTextChanged} />;
    }
}
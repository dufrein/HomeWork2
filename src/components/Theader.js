import React  from "react";


export default class THeader extends React.Component  {
	render () {
		return (	
			<thead>
				<tr>
					<th>Название</th>
					<th>Цена</th>
					<th>Количество</th>
				</tr>
			</thead>
		)
	}		
}
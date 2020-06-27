import React, {Component} from 'react'
import Table from './Table'
import { Container, Button } from 'react-bootstrap'
export default class Tableca extends Component {

    render(){
        return(
<table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">ФИО</th>
      <th scope="col">Дата рождения</th>
      <th scope="col">Паспортные данные</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>

        )
    }
}
import React, {Component} from 'react'
import { Container, Form, Button, FormControl, Tab, Tabs, Col, InputGroup} from 'react-bootstrap'
import DatePicker from 'react-date-picker';
import table from './Table'


export default class Home1 extends Component{
    state = {
        date: new Date(),
      }
     
      onChange = date => this.setState({ date })
    render(){
        return(
            <Container>
                <h1> Vashi dannie</h1>

                <Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example">
                
                    <Tab eventKey="home" title="Личные данные">
                    <Form.Row>
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label> Фамилия </Form.Label>
          <Form.Control type="secondname" placeholder="Введите свою фамилию"/>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>

        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Имя</Form.Label>
          <Form.Control type="firstname" placeholder="Введите свое имя"/>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label> Отчество </Form.Label>
          <Form.Control type="otchstvo" placeholder="Введите свое отчество"/>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        </Form.Row>
        
        <Form.Row>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label> Дата рождения </Form.Label>
          <DatePicker 
          onChange={this.onChange}
          value={this.state.date}
        />
        </Form.Group>

        <Form.Group as={Col} md="4" controlId="validationCustom02">  
          <Form.Label>  Полных лет </Form.Label>
          <Form.Control type="vozrast" placeholder=" " disabled/>
        </Form.Group>
        </Form.Row>
        
                    </Tab>




                    <Tab eventKey="profile" title="Паспортные данные"> 
                    
       <Form.Row>
        <Form.Group as={Col} md="2" controlId="validationCustom01">
          <Form.Label> Серия </Form.Label>
          <Form.Control type="seria"/>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>

        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Номер</Form.Label>
          <Form.Control type="nomer" />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        </Form.Row>
        
        <Form.Group controlId="validationCustom02">
          <Form.Label> Прописка </Form.Label>
          <Form.Control type="propiska" />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        

                    </Tab>

                    <Tab eventKey="contact" title="Образование" >
                    <Button type="add">Добавить</Button>
                    <Button type="delete">Удалить</Button>
                    </Tab>
                </Tabs>

                <Button type="submit">Отправить</Button>
            </Container>
            
        )
    }
}

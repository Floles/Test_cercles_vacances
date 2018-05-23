import React, { Component } from 'react';
import {ButtonToolbar, Button, ButtonGroup, Table} from 'react-bootstrap';
/*import axios from 'axios';*/

class Elevator extends Component {
    constructor(props){
        super(props);
        this.state = {
            elevators: [],
            bgColor: 'white',
            porte: 'ouverte',
            color: 'white',
            montée: 'montée'
        }
        this.handleClick9 = this.handleClick9.bind(this);
        this.handleClick8 = this.handleClick8.bind(this);
        /*this.handleState = this.handleState.bind(this);
        this.click = this.click.bind(this)*/
    }
    /*handleState(e){
        setTimeout(() => {
            this.state({
                bgColor: 'white',
                porte: 'ouverte',
                color: 'white',
            })
    }, 3000);
    }*/

    handleClick9(e){
        this.setState({
            bgColor9:'red',
            porte:'fermée',
            color9: 'green',
        })
        /*axios.get('http://localhost:3000')
        .then (response => {
            console.log(response)
        })
        .catch(error => console.log(error))*/
    }
    /*click(){
        this.handleClick8();
        this.handleState();
    }*/
    handleClick8(e){
        this.setState({
            bgColor8:'lightblue',
            porte:'fermée',
            color8: 'green',
        })
    }

    render() {
        return(
            <div>
                <div style={style}>
                    <ButtonToolbar>
                        <Button>0</Button>
                        <Button>1</Button>
                        <Button>2</Button>
                        <Button>3</Button>
                        <Button>4</Button>
                        <Button>5</Button>
                        <Button>6</Button>
                        <Button>7</Button>
                        <Button onClick={this.handleClick8} style={{backgroundColor:this.state.color8}}>8</Button>
                        <Button onClick={this.handleClick9} style={{backgroundColor:this.state.color9}}>9</Button>
                    </ButtonToolbar><br />
                    <ButtonToolbar>
                        <ButtonGroup bsSize="large">
                            <Button onClick={this.handleClick9} onClick={this.handleClick8}>{this.state.porte}</Button>
                        </ButtonGroup>
                    </ButtonToolbar><br />
                    <ButtonToolbar>
                        <ButtonGroup bsSize="large">
                            <Button>Monter / Descendre</Button>
                        </ButtonGroup>
                    </ButtonToolbar>
                </div>
                <div style={style2}>
                    <Table bordered condensed>
                        <thead>
                            <tr>
                            <th>Nom de l'étage</th>
                            <th>Voyant</th>
                            <th>Bouton d'appel</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>USA</td>
                                <td></td>
                                <td onClick={this.handleClick9} style={{backgroundColor:this.state.bgColor9}}>9</td>
                            </tr>
                            <tr>
                                <td>Canada</td>
                                <td></td>
                                <td onClick={this.handleClick8} style={{backgroundColor:this.state.bgColor8}}>8</td>
                            </tr>
                            <tr>
                                <td>Afrique</td>
                                <td></td>
                                <td>7</td>
                            </tr>
                            <tr>
                                <td>Oceanie</td>
                                <td></td>
                                <td>6</td>
                            </tr>
                            <tr>
                                <td>France</td>
                                <td></td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td>Asie</td>
                                <td></td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>New Zealand</td>
                                <td></td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td>Amerique Latine</td>
                                <td></td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>New York</td>
                                <td></td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>Paris</td>
                                <td></td>
                                <td>0</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        );
    }
}


const style = {
    marginLeft: 500,
}
const style2 = {
    display: 'inline-block',
    marginLeft: 500,
}

export default Elevator;
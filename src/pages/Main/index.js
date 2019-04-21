import React, { Component } from 'react';

import api from '../../services/api';

// import { Container } from './styles';
import "./styles.css";

import img from '../../assets/logo2x.png';


export default class Main extends Component {
    state = {
        newBox: '',
    };

    handleSubmit = async e => {
        e.preventDefault()

        const response = await api.post('boxes', {
            title: this.state.newBox,
        });

        this.props.history.push(`/box/${response.data._id}`);
    };

    handleInputChange = (e) => {
        this.setState({ newBox: e.target.value });
    }

  render() {
    return (
        <div id="main-container">
            <form onSubmit={this.handleSubmit}>
            <img id="img" src={img} alt="" />
                <input 
                placeholder="Criar Box"
                value={this.state.newBox}
                onChange={this.handleInputChange}
                />
                <button type="submit" >Criar Box</button>
            </form>
        </div>
    );
  }
}

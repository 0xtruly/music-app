import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';


const Formstyle = styled.form`
  margin-top:1.8em;
  input{
    height: 40px;
   
    border: 0;
    border-radius: var(--border-radius);
    font: inherit;
    padding: 10px;
    width: 100%;
  }
  button{
    display: inline-block;
    width: 100%;
    height: 40px;
    margin: 10px 0;
    background: var(--color-brand-1);
    border:none;
    border-radius: var(--border-radius);
    color: white;
    font: inherit;
    font-size: 18px;
    font-weight: bold;
    padding: 10px;
  }
  select{
    display: inline-block;
    width: 100px;
    border: none;
    padding: 8px;
    font-size:14px;
    font: inherit;
    color: white;
    background: var(--color-brand-1);
    border-radius: var(--border-radius);
  }
  @media(min-width: 720px) {
    input{
      width: 200px;
      margin: 0 5px;
    }
    button{
      width: auto;
      margin: 0 5px;
    }
  }
`;

class Form extends Component {
  constructor() {
    super();
    this.state = {
      // state initialization
      clickEvent: '',
      ready: '',
      input: '',
      SearchBy: '',
      select: '',
      song: [],
   
    };
    this.addInput = this.addInput.bind(this);
    this.search = this.search.bind(this);
    this.SearchBy = this.SearchBy.bind(this);
  }
  addInput(event) {
    this.setState({
      input: event.target.value,
    })
  }

  SearchBy(event) {
       const select = {
        album : document.getElementById('album').getAttribute('value'),
        artist : document.getElementById('artist').getAttribute('value'),
        track : document.getElementById('track').getAttribute('value')
       }
    this.setState({
      select: event.target.value,
    })
  }
 
  search(event) {
    event.preventDefault();
    const {input} = this.state;
    const {select} = this.state;
    this.setState({
      ready: 'Loading',
      input: '',
      select: '', 
    });
    axios({
      method: 'get',
      url: `https://api.deezer.com/search/${select}?q=${input}`,
      headers: {Authorization: `Bearer e9d874c859b7133d36df9b5bcd38512d`},
    })
    .then(({ data:{data} } ) =>{
        console.log(data);
        this.setState({
          song: data,
          ready: 'Loaded',
        })
    })
    .catch(err =>{
      console.log(error);
      this.setState({
        ready: 'error'
      })
    })
  }
  render() {
    // const{select}= this.state;
    return (
      <Formstyle onSubmit={this.search}>
      <input onChange={this.addInput} type="text" name="search" placeholder="search tracks, artist..." />
      
          <select id='selected' name="category" placeholder="category" onChange={this.SearchBy}>
            <option value="album" id="album">album</option>
            <option value="artist" id="artist">artist</option>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
            <option value="track" id="track">track</option>
          </select > 
     
       <button type="submit">Search</button>
      </Formstyle>
    );
  }
} 

export default Form;

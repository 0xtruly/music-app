import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const SearchBy = {
  option1: document.getElementById('album'),
  option2: document.getElementById('artist'),
  option3: document.getElementById('track')
}

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

      ready: '',
      input: '',
      // SearchBy: '',
      // select: '',

      Album: [],
      // Artist: [],
      // Track: [],
    };
    this.addInput = this.addInput.bind(this);
    this.search = this.search.bind(this);
    // this.SearchBy = this.SearchBy.bind(this);
    // this.searchByAlbum = this.searchByAlbum.bind(this);
    // this.searchByArtist = this.searchByArtist.bind(this);
    // this.searchByTracks = this.searchByTracks.bind(this);

  }
  addInput(event) {
    this.setState({
      input: event.target.value,
    })
  }

  SearchBy(event) {
    this.setState({
      select: event.target.id,
    })
  }
 
  search(event) {
    event.preventDefault();
    const {input} = this.state;
    this.setState({
      ready: 'Loading',
      input: '', 
    });
    axios({
      method: 'get',
      url: `https://api.deezer.com/search/${SearchBy}?q=${input}`,
      headers: {Authorization: `Bearer e9d874c859b7133d36df9b5bcd38512d`},
    })
    .then(({ data:{data} } ) =>{
        console.log(data);
        this.setState({
          Album: data,
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
  //search by Album using axios

  // searchByAlbum(event) {
  //    event.preventDefault();
  //    const {input} = this.state;
  //    this.setState({
  //      ready: 'Loading',
  //      input: ''
  //    });
  //    axios({
  //      method: 'get',
  //      url: `https://api.deezer.com/search/album?q=${input}`,
  //      headers: {Authorization: `Bearer e9d874c859b7133d36df9b5bcd38512d`},
  //    })
  //    .then( ({ data:{data} }) =>{
  //         console.log(data);
  //         this.setState({
  //           Album: data,
  //           ready: 'Loaded',
  //         })
  //    })
  //    .catch(err =>{
  //      console.log(error);
  //      this.setState({
  //        ready: 'error'
  //      })
  //    })
  // }

  //search by Artist 
  // searchByArtist(event) {
  //   event.preventDefault();
  //   const {input} = this.state;
  //   this.setState({
  //     ready: 'Loading',
  //     input: ''
  //   });
  //   axios({
  //     method: 'get',
  //      url: `https://api.deezer.com/search/artist?q=${input}`,
  //      headers: {Authorization: `Bearer e9d874c859b7133d36df9b5bcd38512d`},
  //   })
  //   .then( ({ data:{data} }) =>{
  //        console.log(data);
  //        this.setState({
  //          Artist: data,
  //          ready: 'Loaded',
  //        })
  //   })
  //   .catch(err =>{
  //     console.log(error);
  //     this.setState({
  //       ready: 'error'
  //     })
  //   })
  // }

  // //search by Tracks
  // searchByTracks(event) {
  //   event.preventDefault();
  //   const {input} = this.state;
  //   this.setState({
  //     ready: 'Loading',
  //     input: ''
  //   });
  //   axios({
  //     method: 'get',
  //      url: `https://api.deezer.com/search/track?q=${input}`,
  //      headers: {Authorization: `Bearer e9d874c859b7133d36df9b5bcd38512d`},
  //   })
  //   .then( ({ data:{data} }) =>{
  //     console.log(data);
  //     this.setState({
  //       Track: data,
  //       ready: 'Loaded',
  //     })
  //   })
  //   .catch(err =>{
  //     console.log(error);
  //     this.setState({
  //       ready: 'error'
  //     })
  //   })
  // }
  render() {
    return (
      <Formstyle onSubmit={this.search}>
        <input onChange={this.addInput} type="text" name="search" placeholder="search tracks, artist..." />
             <select name="category" placeholder="category" onSelect={this.SearchBy} key={SearchBy.id}>
               <option value="option1" id="album">album</option>
               <option value="option2" id="artist">artist</option>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
               <option value="option3" id="track">track</option>
             </select > 
          <button type="submit">Search</button>
      </Formstyle>
    );
  }
} 

export default Form;

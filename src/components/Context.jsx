import React, { Component } from 'react';
import axios from 'axios';

const Context = React.createContext();

const reducer = (state, action) => {
   switch(action.type) {
      case 'SEARCH':
         return {
            ...state,
            ready: 'loaded',
            song: action.payload,
            heading: 'Search Results'
         };
         default:
            return state;
   }
}

export class Provider extends Component {
   state = {
      song: [],
      ready: 'initial',
      heading: 'Soundio Recommends',
      dispatch: action => this.setState(state => reducer(state, action))
   }
   componentDidMount() {
      this.setState({
        ready: 'loading',
      });
      axios({
        mode: 'cors',	    
        method: 'get',	    
        url: 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/tracks&limit=24/?etag=true',
        headers: {Authorization: `Bearer e9d874c859b7133d36df9b5bcd38512d`},
      })
      
      .then(({ data:{data} } ) => {
      
        this.setState({                                                                                                                                                                                                                               
          ready: 'loaded',
          song: data,
        })
      })
   }
   render() {
      return (
         <Context.Provider value={this.state}>
            {this.props.children}
         </Context.Provider>
      )
   }
}

export const Consumer = Context.Consumer;

import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();

const reducer = (state, action) => {
   switch (action.type) {
      case "SEARCH":
         return {
            ...state,
            ready: "loaded",
            song: action.payload,
            heading: "Search Results",
         };
      default:
         return state;
   }
};

export class Provider extends Component {
   state = {
      song: [],
      ready: "initial",
      heading: "Recommended",
      dispatch: (action) => this.setState((state) => reducer(state, action)),
   };
   async componentDidMount() {
      this.setState({
         ready: "loading",
      });
      await axios({
         method: "get",
         url: "https://deezer-api.herokuapp.com/tracks",
         headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
         },
      })
         .then(({ data: { data } }) => {
            this.setState({
               ready: "loaded",
               song: data,
            });
         })
         .catch((err) => {
            this.setState({
               ready: "error",
            });
         });
   }
   render() {
      return (
         <Context.Provider value={this.state}>
            {this.props.children}
         </Context.Provider>
      );
   }
}
export const Consumer = Context.Consumer;

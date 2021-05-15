import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import { Consumer } from "./Context";

const Formstyle = styled.form`
   margin-bottom: 3.8em;
   bottom: 100%;
   @media (max-width: 425px) {
      top: 100%;
      margin-top: 0px;
   }
   input #searchInput {
      @media (max-width: 425px) {
         position: relative;
         margin-left: 250px;
      }
   }
   .header__label {
      position: relative;
      width: 31rem;
      height: 4rem;
   }
   .label {
      font-weight: 350px !important;
      color: var(--color-brand-1);
   }
   .header__search {
      width: 500px;
      height: 38px;
      margin-top: 2rem;
      padding: 0 4rem 0 1.4rem;
      border: solid thin #eee;
      border-radius: 5px;
      @media (max-width: 425px) {
         position: relative;
         margin-left: 58%;
         width: 144px;
      }
      ::placeholder {
         color: var(--color-brand-1);
         font-size: 16px;
         font-style: var(--font-brand-1);
         font-weight: 100;
         @media (max-width: 425px) {
            font-size: 13px;
            font-weight: 100;
         }
      }
   }
   .header__btn {
      position: absolute;
      top: 0rem;
      right: 1rem;
      width: 20px;
      height: 20px;
      background: transparent;
      border: 0;
      color: var(--color-brand-1);
      cursor: pointer;
      outline: none;
      svg {
         width: 1.1rem;
         height: 1.1rem;
         fill: var(--color-brand-1);
         outline: none;
         @media (max-width: 425px) {
            width: 0.8rem;
         }
      }
   }
   @media (min-width: 720px) {
      input {
         width: 200px;
         margin: 0 5px;
      }
      button {
         width: auto;
         margin: 0 5px;
      }
   }
`;

class Form extends Component {
   constructor(props) {
      super(props);
      this.state = {
         searchResult: "",
         // state initialization
         ready: "",
         input: "",
         song: [],
      };
      this.addInput = this.addInput.bind(this);
      this.search = this.search.bind(this);
   }
   addInput(event) {
      this.setState({
         input: event.target.value,
      });
   }

   async search(dispatch, event) {
      event.preventDefault();
      const { input } = this.state;
      this.setState({
         ready: "loading",
         input: "",
      });
      await axios({
         method: "post",
         url: "https://deezer-api.herokuapp.com/search",
         headers: {
            "Content-Type": "application/json",
         },
         data: { input },
      })
         .then(({ data: { data } }) => {
            dispatch({
               type: "SEARCH",
               payload: data,
            });
         })
         .catch((error) => {
            this.setState({
               ready: "error",
            });
         });
   }
   render() {
      return (
         <Consumer>
            {(value) => {
               const { dispatch } = value;
               return (
                  <Formstyle onSubmit={this.search.bind(this, dispatch)}>
                     <label htmlFor="search" className="header__label">
                        <input
                           onChange={this.addInput}
                           type="search"
                           id="searchInput"
                           className="header__search"
                           placeholder="Search"
                        />
                        <button className="header__btn">
                           <svg
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <path
                                 d="M2.3 20.3L6 16.6c-1.2-1.5-2-3.5-2-5.6 0-5 4-9 9-9s9 4 9 9-4 9-9 9c-2.1 0-4.1-.7-5.6-2l-3.7 3.7c-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4zM20 11c0-3.9-3.1-7-7-7s-7 3.1-7 7c0 1.9.8 3.7 2 4.9 1.3 1.3 3 2 4.9 2 4 .1 7.1-3 7.1-6.9z"
                                 fillRule="nonzero"
                              />
                           </svg>
                        </button>
                     </label>
                  </Formstyle>
               );
            }}
         </Consumer>
      );
   }
}
export default Form;

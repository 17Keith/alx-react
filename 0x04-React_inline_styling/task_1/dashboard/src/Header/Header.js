import React from "react";
import logo from "../assets/holberton-logo.jpg";
import { StyleSheet, css } from "aphrodite";

function Header() {
  return (
    <>
      <div className="App-header">
        <img src={logo} className={css(headerStyles.App-logo)} alt="logo" />
        <h1>School dashboard</h1>
      </div>
    </>
  );
}

const headerStyles = StyleSheet.create({
  h1: {
    marginLeft: '3rem'
  },
  appHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    color: '#E11D3F',
    borderBottom: '1px solid #E11D3F'
  },

});

export default Header;
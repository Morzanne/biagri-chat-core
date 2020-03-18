import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';

/* ADAPT THIS COMPONENT TO THE MAIN APP NAVBAR */
const NavbarChannelListButton = ({ onClick }) => {
  return (
    <button className="navbarChannelListButton" onClick={onClick}>
      <FontAwesomeIcon icon={faComments} color="black" />
    </button>
  );
};

export default NavbarChannelListButton;

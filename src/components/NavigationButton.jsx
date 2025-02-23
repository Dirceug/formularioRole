import React from 'react';
import PropTypes from 'prop-types';
import '../styles/NavigationBar.css';

const NavigationButton = ({ icon, label, onClick }) => {
  return (
    <button className="navigation-button" onClick={onClick}>
      <img src={icon} alt={label} className="icon" />
      <span>{label}</span>
    </button>
  );
};

NavigationButton.propTypes = {
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default NavigationButton;
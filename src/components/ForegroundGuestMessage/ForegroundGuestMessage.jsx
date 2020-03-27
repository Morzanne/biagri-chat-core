import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const ForegroundGuestMessage = ({ onClose }) => {
  return (
    <div className="foregroundGuestMessageWrapper">
      <div className="foreground"></div>
      <div className="closeForegroundButton">
        <div className="closeForegroundIcon">
          <button onClick={onClose}>
            <FontAwesomeIcon icon={faTimes} color="black" />
          </button>
        </div>
        <div className="label">
          Afin de pouvoir dialoguer avec les différents utilisateurs, merci de
          vous inscrire ou de vous connecter
        </div>
        <div>
          <a href="https://comparateuragricole.com/inscription">
            <button className="redirectionButton">
              <span>Connexion / Inscription</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ForegroundGuestMessage;

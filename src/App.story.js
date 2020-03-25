import React from 'react';
import App from './App';

export default {
  title: 'Full chat rendering',
  component: App
};

export const Basic = () => {
  return (
    <App
      apiKey={'6udgaavbs4pz'}
      secretKey={
        '7327ta9mp4a5yeq4fphqdwba6ubd84fahv22hdnz3v6twzx7xgec98azamxphm4w'
      }
      user={{
        id: '2154',
        token:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiMjE1NCJ9.0lSGYDf6wmhHSmBoBYooJbRh81qFE0NEGZtiJGhsACI'
      }}
    />
  );
};

export const withGuestUser = () => (
  <App
    apiKey={'6udgaavbs4pz'}
    secretKey={
      '7327ta9mp4a5yeq4fphqdwba6ubd84fahv22hdnz3v6twzx7xgec98azamxphm4w'
    }
    user={null}
  />
);

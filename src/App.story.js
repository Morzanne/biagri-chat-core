import React from 'react';
import App from './App';

export default {
  title: 'ChatClientProvider',
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
        id: '2150',
        token:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiMjE1MCJ9.cBMkZPngxIq2DPF_KEv2xtX5vrhol48z0aQOCRLCi50'
      }}
    />
  );
};

export const withBadCredentials = () => (
  <App
    apiKey={'6udgaavbs4pz'}
    secretKey={
      '7327ta9mp4a5yeq4fphqdwba6ubd84fahv22hdnz3v6twzx7xgec98azamxphm4w'
    }
  />
);

export const withGuestUser = () => (
  <App
    apiKey={'6udgaavbs4pz'}
    secretKey={
      '7327ta9mp4a5yeq4fphqdwba6ubd84fahv22hdnz3v6twzx7xgec98azamxphm4w'
    }
    user={null}
  />
);
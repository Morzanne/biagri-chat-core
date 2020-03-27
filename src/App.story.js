import React from 'react';
import App from './App';
import User from './data/Model/user';

export default {
  title: 'Full chat rendering',
  component: App
};

export const Basic = () => {
  const chatUser = new User({
    id: '2154',
    token:
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiMjE1NCJ9.10ObeQlA1AKIpqQtPcu29MTAKOL1NkdG-9qUte6u_2o'
  });
  return (
    <App
      apiKey={'y9yapa6fxuup'}
      secretKey={
        'npj8y2fj747dec65jajzpqgdtjjya2x47udeyzjgwuee8sw36vytze4y6pbc7px3'
      }
      user={chatUser}
    />
  );
};

export const withGuestUser = () => (
  <App
    apiKey={'y9yapa6fxuup'}
    secretKey={
      'npj8y2fj747dec65jajzpqgdtjjya2x47udeyzjgwuee8sw36vytze4y6pbc7px3'
    }
    user={null}
  />
);

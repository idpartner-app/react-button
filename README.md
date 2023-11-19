# React IDPartner Button

## Purpose

The React IDPartner Button library serves a dual purpose:

1. **Remember User's Preferred Bank**: The IDPartner Button allows users to select their preferred bank, and it remembers this choice.

2. **OIDC Authentication Flow**: It connects to the OIDC (OpenID Connect) backend client, initiating the authentication flow with the selected bank.

## Installation

You can easily install this library via npm or yarn:

```sh
# Using Yarn
yarn add @idpartner/react-button

# Using npm
npm install @idpartner/react-button

## Basic Usage

To incorporate the IDPartner Button into your React application, simply import it and include the desired clientId and any additional custom options:

```jsx
import React from 'react';
import IDPartnerButton from '@idpartner/react-button';

function App() {
  const options = {
    clientId: 'your-client-id', // Replace with your Client ID
  };

  return (
    <div>
      <IDPartnerButton options={options} />
    </div>
  );
}

export default App;
```

## Example

For a complete example, check out the [example directory](example/) within this repository. Refer to the example's README for instructions on running it.

## Obtaining a Client ID

To acquire a Client ID, you must first create an IDPartner account and then proceed to create a new application. Detailed instructions for obtaining a Client ID can be found in the [IDPartner documentation](https://docs.idpartner.com/documentation/relying-party-user-guide).

import React from 'react';

// Create an access variable for the React.createContext Method
const ScoreboardContent = React.createContext();

// Export the Provider and Consumer to be used in our app
export const Provider = ScoreboardContent.Provider;
export const Consumer = ScoreboardContent.Consumer;
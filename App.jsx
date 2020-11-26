import React from 'react';
import AppContainer from './src/routes';
import ErrorBoundaryClass from './src/ErrorBoundary';

export default function App() {
  return (
    <ErrorBoundaryClass>
      <AppContainer />
    </ErrorBoundaryClass>
  );
}

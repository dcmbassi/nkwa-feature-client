import React from 'react';
import { PointProvider } from './context/pointContext';
import Partial from './Partial';

export default function App() {
    return (
      <PointProvider>
        <Partial />
      </PointProvider>
    );
  }

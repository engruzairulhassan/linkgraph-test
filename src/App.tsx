import React from 'react';
import logo from './logo.svg';
import './App.css';
import PostButtonComponent from './components/PostButtonComponent';
import UserListComponent from './components/UserListComponent';
import AutocompleteComponent from './components/AutocompleteComponent';

const App: React.FC = () => {
  return (
    <div>
      <h1>React MobX Project</h1>
      <PostButtonComponent />
      <UserListComponent />
      <AutocompleteComponent />
    </div>
  );
};

export default App;

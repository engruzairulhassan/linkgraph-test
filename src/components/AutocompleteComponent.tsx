// src/components/AutocompleteComponent.tsx
import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { userStore } from '../store/UserStore';

const AutocompleteComponent: React.FC = observer(() => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  useEffect(() => {
    userStore.fetchUsers();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    if (value) {
      setSuggestions(
        userStore.users
          .filter(user => user.name.toLowerCase().includes(value.toLowerCase()))
          .map(user => user.name)
      );
    } else {
      setSuggestions([]);
    }
  };

  return (
    <div>
      <input type="text" value={query} onChange={handleInputChange} placeholder="Search for a user" />
      <div>
        {suggestions.map((name, index) => (
          <div key={index}>{name}</div>
        ))}
      </div>
    </div>
  );
});

export default AutocompleteComponent;

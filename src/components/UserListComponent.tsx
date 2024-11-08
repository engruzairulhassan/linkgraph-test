// src/components/UserListComponent.tsx
import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { userStore } from '../store/UserStore';

const UserListComponent: React.FC = observer(() => {
  useEffect(() => {
    userStore.fetchUsers();
  }, []);

  return (
    <div style={{display: 'flex', flexWrap: 'wrap', gap: 10}}>
      {userStore.users.map(user => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>Street: {user.address.street}</p>
          <p>Suite: {user.address.suite}</p>
          <iframe
            title={`map-${user.id}`}
            width="300"
            height="200"
            src={`https://maps.google.com/maps?q=${user.address.geo.lat},${user.address.geo.lng}&z=15&output=embed`}
          ></iframe>
        </div>
      ))}
    </div>
  );
});

export default UserListComponent;

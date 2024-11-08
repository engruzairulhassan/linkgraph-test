// src/components/PostButtonComponent.tsx
import React, { useState } from 'react';
import axios from 'axios';
import {PostData} from '../types';


const PostButtonComponent: React.FC = () => {
  const developerName = "Hi Developer Enter your Name Here";
  const url = "http://mockbin.org/bin/08e5560b-befa-41f3-9397-9a774b8397a9/";

  const initialUserData: PostData = {
      position: '',
      devName: '',
  };
  const [userData, setUserData] = useState<PostData>(initialUserData);

  const handlePostRequest = async () => {

    try {
      const response = await axios.post(url, userData);
      console.log("Response:", response.data);
    } catch (error) {
        alert(error)
      console.error("Error:", error);
    }
  };

  return (
    <div>
        <div>
            Dev Name: <input value={userData.devName} onChange={(e) => setUserData(data => ({...data, devName: e.target.value}))}/>
        </div>
        <div>
            Position: <input value={userData.position} onChange={(e) => setUserData(data => ({...data, position: e.target.value}))}/>
        </div>
      <button onClick={handlePostRequest}>Send POST Request</button>
    </div>
  );
};

export default PostButtonComponent;

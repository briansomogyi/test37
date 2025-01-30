import React, { useEffect, useState } from 'react';
import fetchInstagramData from './services/fetchInstagramData';
import Navbar from './components/Navbar';
import Post from './components/Post';

const App = () => {
  const [posts, setPosts] = useState([]);
  const accessToken = 'YOUR_ACCESS_TOKEN'; // Replace with your actual access token

  useEffect(() => {
    const getData = async () => {
      const data = await fetchInstagramData(accessToken);
      setPosts(data);
    };

    getData();
  }, [accessToken]);

  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <div className="row">
          {posts.map((post) => (
            <div className="col-md-4 mb-4" key={post.id}>
              <Post post={post} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;

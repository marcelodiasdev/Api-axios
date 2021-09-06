import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';

function App() {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    axios.get("https://alemdocodigo.herokuapp.com/list_posts")
      .then((response) => {
        setPosts( response.data.posts );
        setLoading(false);
      })

  }, [])

    if(loading) {
      return (
        <div className="loading">
          <div class="loadingio-spinner-dual-ring-dt7rexhgcmj"><div class="ldio-o0sa2hn6xw">
          <div></div><div><div></div></div>
          </div></div>
        </div>

     
      )
    }


  return (
    <div className="App">

      <div className="cards">

        {posts.map((post, key) => {
          return (
            <div className="card" key={key}>
                <div className="card-body">
                       <h1> {post.title}</h1> 
                       <div className="line"> </div>
                       <h2> {post.content} </h2>
                </div>
            </div>
          )
        })}



      </div>

    </div>
  );
}

export default App;


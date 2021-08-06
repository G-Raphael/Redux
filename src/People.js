import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'



export default function People(props) {
  
  const {id} = useParams();
  const url = `https://swapi.dev/api/people/${id}`
  const [lists, setLists] = useState(null);

  let content = null;

  useEffect(() => {
      axios.get(url)
          .then(response =>{
        setLists(response.data)
               
      });
      
  },[url]);
  console.log(lists.results[0].name)
  if(lists){
    content =
      <div> 
        <h1>The List are...</h1> 
      </div>
      }

  return (
    <div>
      {content}
    </div>
  );
};
































































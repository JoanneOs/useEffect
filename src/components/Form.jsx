
// import React from 'react'

// export default function Form(props){
//     // The component must return some JSX
//     return <h1>The Form Component</h1>;

//     <div>
//     <form>
//       <input type="text" />
//       <input type="submit" value="submit" />
//     </form>
//   </div>
//   };



import {useState, useEffect} from "react";

export default function MovieDisplay({ movie }){
  // Function to return loaded JSX
  const loaded = () => {
    return (
      <>
        <h1>{movie.Title}</h1>
        <h2>{movie.Genre}</h2>
        <img src={movie.Poster} alt={movie.Title} />
        <h2>{movie.Year}</h2>
      </>
    );
  };

  // Function to return loading JSX
  const loading = () => {
    return <h1>No Movie to Display</h1>;
  };

  // Ternary operator will determine which functions JSX we will return
  return movie ? loaded() : loading();
}
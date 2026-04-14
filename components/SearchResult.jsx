import React from 'react'
import { useGlobalContext } from '../context/GlobalContext'
const SearchResult = () => {
  const {searchedPrompt} = useGlobalContext();
  return (
    <div>
      {searchedPrompt.map((prompt)=>{
        return(
          <div key={prompt._id}>
            <p>{prompt.title}</p>
            <p>{prompt.description}</p>
          </div>
        )
      })}
    </div>
  )
}

export default SearchResult
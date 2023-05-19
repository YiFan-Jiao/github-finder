import React from 'react'

function Search() {
  return (
    <main>
        <div className='container'>
            <div className='search-bar grid'>
                <h1>Github Finder</h1>
                <div className='search-eare grid'>
                    <input placeholder='Profile'></input>
                    <div className='btn grid'>SEARCH</div>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Search
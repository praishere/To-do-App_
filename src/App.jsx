import { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css' // Import Bootstrap CSS
import './App.css' // Import custom CSS
import Card from './components/Card' // Import Card component
import './components/Card.css' // Import custom Card component CSS

function App() {

  return (
    <>
    <div className="bg-image"> {/* Background image container */}
    
    <header>
    <h2>To-Do App</h2> {/* Application header */}
    </header>

     <main>
     <div className="container">
      
     <Card/> {/* Render the Card component inside the main container */}

     </div>
     </main>
    
    <footer>To-do App-By Prabhat(2024)</footer> {/* Footer section */}
    </div> 
    </>
  )
}

export default App

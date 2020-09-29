import React from 'react';
import "./bootstrap-lite.css"
function App() {
  return (
   <div>
     <nav>
       <ul>
         <li>
           <a href="#">Home</a>
          </li>
         <li>
           <a href="#">Documentation (make selected)</a>
          </li>
         <li>
           <a href="#">Examples</a>
           
          </li>
       </ul>       
     </nav>
     <div>
      <div>
        <ul>
          <li>
            <a href="#">Badge</a>
            </li>
            <li>
            <a href="#">Buttons</a>
            </li>
            <li>
            <a href="#">Cards</a>
            </li>
            <li>
            <a href="#">Media Object</a>
            </li>
            <li>
            <a href="#">Navbar</a>
            </li>
        </ul>
        <p>This will be a scrollable thing on left side of screen</p>
      </div>
      <div>
        <p>This will be main content pane with examples of components</p>
        
        <div>
          <h1>Badge</h1>
          <h4>Description of component</h4>
          <h3>How it works</h3>
          <p>Some info on how to use</p>
          <p>example</p>
          <code>Code used to create above example</code>
        </div>

        <div>
          <h1>Buttons</h1>
          <h4>Description of component</h4>
          <h3>How it works</h3>
          <p>Some info on how to use</p>
          <p>example</p>
          <code>Code used to create above example</code>
        </div>

        <div>
          <h1>Cards</h1>
          <h4>Description of component</h4>
          <h3>How it works</h3>
          <p>Some info on how to use</p>
          <p>example</p>
          <div className = "card">
            <p>Some sample text in card</p>
          </div>
          <code>Code used to create above example</code>
        </div>

        <div>
          <h1>Media Object</h1>
          <h4>Description of component</h4>
          <h3>How it works</h3>
          <p>Some info on how to use</p>
          <p>example</p>
          <code>Code used to create above example</code>
        </div>

        <div>
          <h1>Navbar</h1>
          <h4>Description of component</h4>
          <h3>How it works</h3>
          <p>Some info on how to use</p>
          <p>example</p>
          <code>Code used to create above example</code>
        </div>
      </div>
     </div>
   </div>
  );
}

export default App;

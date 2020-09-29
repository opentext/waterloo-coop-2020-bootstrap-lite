import React from 'react';
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
          <h1>Badge <span className = "badge">new</span></h1>
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
          <button className="button">
            submit
          </button>
          <button className="button1">
            submit
          </button>
          <button className="button2">
            submit
          </button>
          <button className="button3">
            submit
          </button>
          <button className="button4">
            submit
          </button>
          <p>
            <code>
  background-color: #4caf40;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
</code>
          </p>
          
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

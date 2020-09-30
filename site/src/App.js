import React from 'react';
function App() {
  return (
   <div clssname = "main">
     <nav className = "navbar navbar-fixed navbar-light">
       <a className = "navbar-brand">
          <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/768px-Bootstrap_logo.svg.png"/>
       </a>
        <a href="#">Home</a>
        <a href="#">Documentation (make selected)</a>
        <a href="#">Examples</a>       
     </nav>
     <div className="content">
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
          <h1>Badge <span className = "badge badge-primary">new</span></h1>
          <h4>Description of component</h4>
          <h3>How it works</h3>
          <p>Some info on how to use</p>
          <p>example</p>
          <span className = "badge badge-primary">primary</span>
          <span className = "badge badge-success">success</span>
          <span className = "badge badge-warning">warning</span>
          <pre>
            <code>Code used to create above example</code>
          </pre>
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
            <div className = "card-header">
              Header
            </div>
            <img src = "..." className = "card-img" alt="react logo"/>
            <div className = "card-body">
              <p className= "card-title">Some sample text in card</p>
              <p className = "card-subtitle">Subttile</p>
              <p className = "card-text">Some text</p>
              <p className = "card-text">More text</p>
            </div>
            <div className = "card-footer">
              Footer
            </div>
          </div>
          <pre>
            <code>Code used to create above example</code>
          </pre>
        </div>

        <div>
          <h1>Media Object</h1>
          <h4>Description of component</h4>
          <h3>How it works</h3>
          <p>Some info on how to use</p>
          <p>example</p>
          <pre>
            <code>Code used to create above example</code>
          </pre>
        </div>

        <div>
          <h1>Navbar</h1>
          <h4>Description of component</h4>
          <h3>How it works</h3>
          <p>Some info on how to use</p>
          <p>example</p>
          <pre>
            <code>Code used to create above example</code>
          </pre>
        </div>
      </div>
     </div>
   </div>
  );
}

export default App;

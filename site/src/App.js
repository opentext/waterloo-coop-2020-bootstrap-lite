import React from 'react';
import Highlight from 'react-highlight.js'

function App() {
  // badge
  let badge_code = `<span className = "badge badge-primary">primary</span>
<span className = "badge badge-success">success</span>
<span className = "badge badge-warning">warning</span>`
  let badge_code_text = 
  `<h3>Example <span className = "badge badge-dark">New</span></h3>
<h4>Example <span className = "badge badge-dark">New</span></h4>
<h5>Example <span className = "badge badge-dark">New</span></h5>
<h6>Example <span className = "badge badge-dark">New</span></h6>`
  let badge_notifications = `<button class = "button-primary">
  Notifications <span className = "badge badge-warning">4</span>
</button>`

// buttons
  let buttons_code = `<button className="button-primary">
  Primary
</button>
<button className="button-warning">
  Warning
</button>
<button className="button-success">
  Success
</button>
<button className="button-info">
  Info
</button>`
  let card_code = `<div className = "card" style="width: 36rem">
  <div className = "card-header"> Header </div>
  <img src = "smallPic.png" className = "card-img" alt="ring" style= "height: "auto", width: 256 + "px"}}/>
  <div className = "card-body">
    <h3 className= "card-title">Empty Circle</h3>
    <p className = "card-subtitle">Ring</p>
    <p className = "card-text">Some text</p>
    <p className = "card-text">More text</p>
  </div>
  <ul className = "list-group list-group-flush">
    <li className = "list-group-item">Item 1</li>
    <li className = "list-group-item">Item 2</li>
    <li className = "list-group-item">Item 3</li>
    <li className = "list-group-item">Item 4</li>
  </ul>
  <div className = "card-footer"> Footer </div>
</div>`
  let media_object_code = `<h1>REPLACE ME WITH CODE</h1>`
  //Navbar
  let navbar_code = `<nav class = "navbar navbar-light">
  <a className = "navbar-brand">
    Nav Light
  </a>
  <div>
    <a href="#">Home</a>
    <a href="#"><b>Documentation</b></a>
    <a href="#">Examples</a>     
  </div> 
</nav>
<nav class = "navbar navbar-dark">
  <a className = "navbar-brand">
    Nav Dark
  </a>
  <div>
    <a href="#">Home</a>
    <a href="#"><b>Documentation</b></a>
    <a href="#">Examples</a>     
  </div> 
</nav>
<nav class = "navbar navbar-primary">
  <a className = "navbar-brand">
    Nav Primary
  </a>
  <div>
    <a href="#">Home</a>
    <a href="#"><b>Documentation</b></a>
    <a href="#">Examples</a>     
  </div> 
</nav>
<nav class = "navbar navbar-transparent">
  <a className = "navbar-brand">
    Nav Transparent
  </a>
  <div>
    <a href="#">Home</a>
    <a href="#"><b>Documentation</b></a>
    <a href="#">Examples</a>     
  </div> 
</nav>`
  let navbar_img = `<nav class = "navbar navbar-light">
  <img src="/favicon.ico"/>
  <div>
    <a href="#">Home</a>
    <a href="#"><b>Documentation</b></a>
    <a href="#">Examples</a>     
  </div> 
</nav>`
  return (
    
  <div>
     
    <nav className = "navbar navbar-fixed navbar-light" style={{"z-index": "1010"}}>
       <a className = "navbar-brand">
          BootStrap Lite
       </a>
        <div>
          <a href="#">Home</a>
          <a href="#"><b>Documentation</b></a>
          <a href="#">Examples</a>     
        </div>   
    </nav>
      
    <div className = "container">
      <div class = "side-bar con-content" style={{"z-index": "1010"}}>
          <a href="#Badge">Badge</a>
          <a href="#Buttons">Buttons</a>
          <a href="#Badge">Card</a>
          <a href="#Badge">Media Object</a>
          <a href="#Badge">Navbar</a>
        </div>
      <div className = "main-content con-content" >
        
        <div id="Badge">
          <h1><b>Badge</b></h1>
          <h4>Description of component</h4>
          <p>Badges display additional information next to a button or any other element. Its clear and consice.
            It may also be used to add highlighed information to text making them stand out
          </p>
          <h3>How its used</h3>
          <p>Here is what you need to know in order to implement badges:</p>
          <ul>
            <li>Badges require a wrapping <code>.badge</code></li>
            <li>Different scenerios call for different styling. Three types of badges 
              can be accesed using the class modifiers: <code>.badge-primary .badge-success
                .badge-warning
              </code>
            </li>
          </ul>
          <h3>Example</h3>
          
          <div className = "outline">
          <p>They scale to the immediate parent element</p>
            <h3>Example <span className = "badge badge-dark">New</span></h3>
            <h4>Example <span className = "badge badge-dark">New</span></h4>
            <h5>Example <span className = "badge badge-dark">New</span></h5>
            <h6>Example <span className = "badge badge-dark">New</span></h6>
            <Highlight>
            {badge_code_text}
            </Highlight>
          </div>
          <br />
          <div className = "outline">
            <p>They can also be used as notification counters</p>
            <div className = "outline-row">
            <button class = "button-primary">
              Notifications <span className = "badge badge-warning">4</span>
            </button>
            </div>
            <Highlight>
            {badge_notifications}
          </Highlight>
          </div>
          <br />
          
          <div className="outline">
          <p>Class modifiers can also be added to acheive unique appearances of the badges</p>
            <div classname="outline-row">
            <span className = "badge badge-primary">primary</span>
            <span className = "badge badge-success">success</span>
            <span className = "badge badge-warning">warning</span>
            </div>
            <Highlight>
            {badge_code}
          </Highlight>
          </div>
        </div>

        <div id="Buttons">
          <h1><b>Buttons</b></h1>
          <h4>Description of component</h4>
          <h3>How it works</h3>
          <p>Some info on how to use</p>
          <p>example</p>
          <div>
            <button className="button-primary">
              Primary
            </button>
            <button className="button-warning">
              Warning
            </button>
            <button className="button-success">
              Success
            </button>
            <button className="button-info">
              Info
            </button>
          </div>
          <Highlight>
            {buttons_code}
          </Highlight>
        </div>

        <div id="Card">
          <h1><b>Card</b></h1>
          <h4>A content container with multiple options and wide variety of uses</h4>
          <h3>How it works</h3>
          <p>Some info on how to use</p>
          <p>example</p>
          <div class="hover-card">
  <div class="hovered">
    
  <div class="hovered-card">
  <h>This is empty!</h>
  </div>
    <div class="unhovered-card">
      

    
          <div className = "card">
            <div className = "card-header"> Header </div>
            <div className ="cardimg">
            <img src = "./profile_pic.png" />
            </div>
            <div className = "card-body">
              <h3 className= "card-title">Profile</h3>
              <p className = "card-subtitle">content</p>
              <p className = "card-text">Some text</p>
              <p className = "card-text">More text</p>
            </div>
            <ul className = "list-group list-group-flush">
              <li className = "list-group-item">Item 1</li>
              <li className = "list-group-item">Item 2</li>
              <li className = "list-group-item">Item 3</li>
              <li className = "list-group-item">Item 4</li>
            </ul>
            <div className = "card-footer"> Footer </div>
          </div>
          </div>
          </div>
          </div>
          <h4>Code</h4>
          <Highlight language = {"html"}>
            {card_code}
          </Highlight>
        </div>              
        
        <div id = "Media-Object">
          <h1>Media Object</h1>
          <h4>Description of component</h4>
          <h3>How it works</h3>
          <p>Some info on how to use</p>
          <p>example</p>
          <div className="outline">        
          <div class="block">
  <img src="./profile_pic.png" alt=""/>
  <h2>Henry</h2>
  <p>I like this comment</p>
</div>
<div class="block1">
  <img src="./pro_file_re.png" alt=""/>
  <h2>John</h2>
  <p>me too!</p>
</div>          
</div>          
          <Highlight>
            {media_object_code}
          </Highlight>
        </div>

        <div id="Navbar">
          <h1><b>Navbar</b></h1>
          <h3>Description of component</h3>
          <p>A navbar or a navigation bar is exactly that. An important part of almost any
            website these days. Its a section of the website that aids its visitors in accessing
            information. 
          </p>
          <h3>How it works</h3>
          <p>Here is what you need to know inorder to use the navbar: </p>
          <ul>
            <li>It requires a <code>.navbar wrapping</code>. If its to be fixed towards the upper area
              of the page use <code>.navbar-fixed</code>. Otherwise the implementation will be positioned 
              relative to other content in the page.
            </li>
            <li>The Navbar is responsive by default</li>
            <li>It comes with various colour schemes which are accessed using
              class modifies: <code>.navbar-primary .navbar-light .navbar-dark
              .navbar-transparent</code>. There implementationis detailed below</li>
            <li>The navbar is hidden when printing by default.</li>
          </ul>
          <h3>Example</h3>
          <div className ="outline">
            <nav class = "navbar navbar-light">
              <a className = "navbar-brand">
                Nav Light
              </a>
              <div>
                <a href="#">Home</a>
                <a href="#"><b>Documentation</b></a>
                <a href="#">Examples</a>     
              </div> 
            </nav>
            <nav class = "navbar navbar-dark">
              <a className = "navbar-brand">
                Nav Dark
              </a>
              <div>
                <a href="#">Home</a>
                <a href="#"><b>Documentation</b></a>
                <a href="#">Examples</a>     
              </div> 
            </nav>
            <nav class = "navbar navbar-primary">
              <a className = "navbar-brand">
                Nav Primary
              </a>
              <div>
                <a href="#">Home</a>
                <a href="#"><b>Documentation</b></a>
                <a href="#">Examples</a>     
              </div> 
            </nav>
            <nav class = "navbar navbar-transparent">
              <a className = "navbar-brand">
                Nav Transparent
              </a>
              <div>
                <a href="#">Home</a>
                <a href="#"><b>Documentation</b></a>
                <a href="#">Examples</a>     
              </div> 
            </nav>
            <Highlight>
              {navbar_code}
            </Highlight>
            <br/>
            <p>Adding images to the navbar will require the following changes to its 
              implementation
            </p>
            <nav class = "navbar navbar-light">
              <img src="/favicon.ico"/>
              <div>
                <a href="#">Home</a>
                <a href="#"><b>Documentation</b></a>
                <a href="#">Examples</a>     
              </div> 
            </nav>
            <Highlight>
              {navbar_img}
            </Highlight>
          </div>
         
        </div>
      
      </div>
    </div>
  </div>
  );
}

export default App;

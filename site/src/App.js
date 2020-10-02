import React from 'react';
import Highlight from 'react-highlight.js'

function App() {
  
  let badge_code = `<span className = "badge badge-primary">primary</span>
<span className = "badge badge-success">success</span>
<span className = "badge badge-warning">warning</span>`
  let badge_code_text = 
  `<h3>Example <span className = "badge badge-dark">New</span></h3>
<h4>Example <span className = "badge badge-dark">New</span></h4>
<h5>Example <span className = "badge badge-dark">New</span></h5>
<h6>Example <span className = "badge badge-dark">New</span></h6>`
  let buttons_code = `<button className="button">
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
  let navbar_code = `<h1>REPLACE ME WITH CODE</h1>`

  return (
    
  <div>
     
    <nav className = "navbar navbar-fixed navbar-light">
       <a className = "navbar-brand">
          BootStrap Lite
       </a>
        <div class = "navbar-links">
          <a href="#">Home</a>
          <a href="#"><b>Documentation</b></a>
          <a href="#">Examples</a>     
        </div>     
     </nav>

    <div className = "container">
      <div className = "row">
        <div className = "col-2 sidebar">
          <ul>
            <li>
              <a href="#Badge">Badge</a>
              </li>
              <li>
              <a href="#Buttons">Buttons</a>
              </li>
              <li>
              <a href="#Card">Card</a>
              </li>
              <li>
              <a href="#Media-Object">Media Object</a>
              </li>
              <li>
              <a href="#Navbar">Navbar</a>
              </li>
          </ul>
        </div>

        <div className = "col-9" >
          
          <div id="Badge">
            <h1>Badge</h1>
            <h4>Description of component</h4>
            <p>Badges display additional information next to a button or any other element. Its clear and consice.
              It may also be used to add highlighed information to text making them stand out
            </p>
            <h3>How its used</h3>

            <div className="outline">
            <p>After installing our bootstrap lite library, developers can easily access badge styling by calling 
              the badge class. Different scenerios call for different styling and this can be acheived by adding
              class modifers which are as follows:</p>
              <Highlight>
              {badge_code_text}
              </Highlight>
              <p>The following section provides more detail about how badges might be used</p>
            </div>
            
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
              {badge_code}
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
            <h1>Buttons</h1>
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
            <h1>Card</h1>
            <h4>A content container with multiple options and wide variety of uses</h4>
            <h3>How it works</h3>
            <p>Some info on how to use</p>
            <p>example</p>

            <div className = "card" style={{width: 36 + 'rem'}}>
              <div className = "card-header"> Header </div>
              <img src = "smallPic.png" className = "card-img" alt="ring" style= {{height: "auto", width: 256 + "px"}}/>
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
              
            <div class="block">
  <img src="https://api.adorable.io/avatars/285/abott@adorable.io.png" alt=""/>
  <h2>Sandy Sandwiches</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
</div>
            
            
            <Highlight>
              {media_object_code}
            </Highlight>
          </div>

          <div id="Navbar">
            <h1>Navbar</h1>
            <h4>Description of component</h4>
            <h3>How it works</h3>
            <p>Some info on how to use</p>
            <p>example</p>
            <Highlight>
              {navbar_code}
            </Highlight>
          </div>
        </div>
        
      </div>
    </div>
  </div>
  );
}

export default App;

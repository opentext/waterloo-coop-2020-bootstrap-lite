import React from 'react';
import Highlight from 'react-highlight.js'

function App() {
  
  let badge_code = `<h1>Badge <span className = "badge badge-warning">New</span></h1>`
  let buttons_code = `<h1>REPLACE ME WITH CODE</h1>`
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
      <div className = "container">
        <div className = "row">
          <div className = "col-2 sidebar" style={{"background-color": "azure"}}>
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

          <div className = "col" style={{"background-color": "beige"}}>
            
            <div id="Badge">
              <h1>Badge <span className = "badge badge-warning">New</span></h1>
              <h4>Description of component</h4>
              <h3>How it works</h3>
              <p>Some info on how to use</p>
              <p>example</p>
              <Highlight>
                {badge_code}
              </Highlight>
            </div>

            <div id="Buttons">
              <h1>Buttons</h1>
              <h4>Description of component</h4>
              <h3>How it works</h3>
              <p>Some info on how to use</p>
              <p>example</p>
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
  </div>
  );
}

export default App;

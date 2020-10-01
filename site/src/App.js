import React from 'react';
import Highlight from 'react-highlight.js'

function App() {
  
  let badge_code = `<span className = "badge badge-primary">primary</span>
<span className = "badge badge-success">success</span>
<span className = "badge badge-warning">warning</span>`
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
              <span className = "badge badge-primary">primary</span>
              <span className = "badge badge-success">success</span>
              <span className = "badge badge-warning">warning</span>
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
              <div>
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
              <div class="header">
            
            <h1>Profile</h1>
            <img src = "/profile_pic.jpg" width ="100px" height = "150px"  alt="react logo"/>
          </div>

<div class="row">
<div class="col-3 col-s-3 menu">
    <ul>
      <li>Name: John</li> 
      <li>Email: xxxxx@gmail.com</li>
      <li>Tel: xxx-xxx-xxxx</li>
  <li>post: postNum</li>
    </ul>
  </div>

  <div class="col-6">
    <h1>Introduction</h1>
    <p>helloooo world</p>
  </div>

  <div>
    <div class="aside">
      <h2>Post one</h2>
      <p>dsfdajfokasnhofakdjkofahsoifkjeaeokfhaios</p>
      <h2>Post two</h2>
      <p>flkasjdlkasjflkadjskfjdfckjoasjfkeao</p>
      <h2>Post three</h2>
      <p>asdojhweifjoepajcfoapsjfpied</p>
    </div>
  </div>
</div>

<div class="footer">
  <p>This is footer</p>
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

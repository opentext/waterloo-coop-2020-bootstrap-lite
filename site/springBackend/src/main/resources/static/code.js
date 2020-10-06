import React from 'react';
import Highlight from 'react-highlight.js'
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
  let card_code = `<div class="hover-card">
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
</div>`
  let media_object_code = `<div className="outline">        
  <div className="block">
    <img src="./profile_pic.png" alt=""/>
    <h2>Henry</h2>
    <p>I like this comment</p>
  </div>
  <div className="block1">
    <img src="./pro_file_re.png" alt=""/>
    <h2>John</h2>
    <p>me too!</p>
  </div>          
</div> `
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
</nav>
<nav class = "navbar navbar-light">
  <img src="https://i2.wp.com/www.deep-analysis.net/wp-content/uploads/2019/05/opentext-logo.png?fit=3515%2C1132&ssl=1"/>
  <div>
    <a href="#">Products and Solutions</a>
    <a href="#"><b>Industries</b></a>
    <a href="#">Services</a>     
  </div> 
</nav>`
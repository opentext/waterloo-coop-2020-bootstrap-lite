import React from 'react';
import Highlight from 'react-highlight.js'

function App() {
  // Variables
  var Notifications = 391;
  // methods
  function changeNavbar(arg){
    document.getElementById("navbarid").className = arg; 
 }

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
  
  return (
  <div>
     
    <nav id="navbarid" className = "navbar navbar-fixed navbar-light" style={{"z-index": "1010"}}>
       <a className = "navbar-brand">
          BootStrap Lite
       </a>
        <div>
          <a href="#">Home</a>
          <a href="#"><b>Documentation</b></a>
          <a href="#">Examples</a>
          <a href="#Downloads">Download</a>     
        </div>   
     </nav>

    <div className = "container" style = {{top: 90 + 'px'}}>

      <div className = "side-bar sticky">
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
      
      <div className = "main-content con-content" >
        
        <div className = "header-link" id="Badge">
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
            <p>They can also be used as notification counters. Click the Notifications button.</p>
            <div className = "outline-row">
            <button className = "button-primary">
              Notifications <span className = "badge badge-warning">{Notifications}</span>
            </button>
            </div>
            <Highlight>
            {badge_notifications}
          </Highlight>
          </div>
          <br />
          
          <div className="outline">
          <p>Class modifiers can also be added to acheive unique appearances of the badges</p>
            <div className="outline-row">
            <span className = "badge badge-primary">primary</span>
            <span className = "badge badge-success">success</span>
            <span className = "badge badge-warning">warning</span>
            </div>
            <Highlight>
            {badge_code}
          </Highlight>
          </div>
        </div>

        <div className = "header-link" id="Buttons">
          <h1><b>Buttons</b></h1>
          <h4>Description of component</h4>
          <p>Buttons provide the platform that allows users interact with web application such as login, register, submit a form.</p>
          <h3>How it works</h3>
          <p>Here is what you need to know in order to implement button:</p>
          <ul>          
            <li>Different scenerios call for different styling. Three types of buttons can be accesed using the class modifiers: <code>.button-primary .button-success .buton-warning .button-info</code></li>
          <li>Buttons require a wrapping <code>.button</code></li></ul>

 
          <h4>Example</h4>
          <div>
            <button className="button-primary"> Primary </button>
            <button className="button-warning"> Warning </button>
            <button className="button-success"> Success </button>
            <button className="button-info"> Info </button>
            <button className="button-dark"> Dark </button>
            <button className="button-light"> Light </button>
          </div>
          <Highlight>
            {buttons_code}
          </Highlight>
        </div>

        <div className = "header-link" id="Card">
          <h1><b>Card</b></h1>
          <h4>Description of component</h4>
          <p>Card concentrates the infomation in the contents of business, personal information, promotions, advertisement</p>
          <h3>How it works</h3>
          <p>Here is what you need to know in order to implement card:</p>
          <ul>
            <li>Card contains different sub-classes of its elements: <code>.card-body .card-titile .card-subtitile .card-header .card-footer</code></li>
            <li>Card allows flipping when it is hovered by using the classes of <code>.hover-card .hovered .hover-card:hover .hovered .unhovered-card .hovered-card</code></li>
          </ul>
          <h4>Example</h4>
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
        
        <div className = "header-link" id = "Media-Object">
          <h1><b>Media Object</b></h1>
          <h4>Description of component</h4>
          <p>Media Object demonstrates the users' comment, username, and profile picture, which creates a platform for users interacting with each other.</p>
          <h3>How it works</h3>
          <p>Here is what you need to know inorder to use the Media Object:</p>
          <ul>
            <li>Media Object uses class of <code>.block</code> to implement a contianer for users' username and comments.</li>
            <li>The class <code>.block img</code> allows users to setup their own profile picture</li>
          </ul>

          <h4>Example</h4>
        <div className="outline">        
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
        </div>          
          <Highlight>
            {media_object_code}
          </Highlight>
        </div>

        <div className = "header-link" id="Navbar">
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
          <div className ="outline" style= {{'z-index': '900'}}>
            <nav class = "navbar navbar-light" >
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
            <p>Click the following buttons to see how a main navbar would look with these styles:</p>
            <div className = "outline-row">
            <button onClick={() => changeNavbar("navbar navbar-transparent navbar-fixed")} className="button button-primary">Transparent</button>
            <button onClick={() => changeNavbar("navbar navbar-primary navbar-fixed")} className="button button-primary">Primary</button>
            <button onClick={() => changeNavbar("navbar navbar-dark navbar-fixed")} className="button button-dark">Dark</button>
            <button onClick={() => changeNavbar("navbar navbar-light navbar-fixed")} className="button button-light">Light</button>
            </div>
            <Highlight>
              {navbar_code}
            </Highlight>
            <br/>
            <p>Adding images to the navbar will require the following changes to its 
              implementation
            </p>
            
            <nav class = "navbar navbar-light">
              <img src="https://i2.wp.com/www.deep-analysis.net/wp-content/uploads/2019/05/opentext-logo.png?fit=3515%2C1132&ssl=1"/>
              <div>
                <a href="#">Products and Solutions</a>
                <a href="#"><b>Industries</b></a>
                <a href="#">Services</a>     
              </div> 
            </nav>
            <Highlight>
              {navbar_img}
            </Highlight>
          </div>
         
        </div>
        <br/>
        <hr/>
        <br/>
        <div id="Downloads">
          <h2 style = {{"margin":"0 auto 0 auto"}}><b>Download Bootstrap Lite</b></h2>
          <br/>
          <h3>Compiled CSS</h3>
          <p>The library is ready to use and can be dropped into an existing project. This 
            only includes the css files and no documentation, scss files or any JavaScript.
          </p>
          <button className = "button button-primary" style={{"margin-left":0}}>
            Download
          </button>
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;

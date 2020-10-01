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
              
            <div class="header"> <h1>Profile</h1> </div>
            <div class = ".aParent">
              <div className = "margin-left">
                <img src = "/profile_pic.jpg" width ="100px" height = "150px"  alt="react logo" />
              </div>

              <div>
                <div class="col-3 col-s-5 menu li">
                  <ul>
                    <li>Name: John</li> 
                    <li>Email: xxxxx@gmail.com</li>
                    <li>Tel: xxx-xxx-xxxx</li>
                <li>post: postNum</li>
                  </ul>
                </div>
              </div>
              <div className = "margin-left">
                <div class="aside">
                  <h2>Post one</h2>
                  <p>We've all seen them; we've even taken pictures of ourselves pretending to hold them up or to push them over.

              These are the precariously balanced rocks on a hill or a coastal cliff. It's as if the gentlest nudge would send them tumbling.

              In truth, the disturbance needed to unsettle the blocks is quite significant, and that got husband and wife geologists Drs Dylan and Anna Rood wondering about how these great stones could be used to decipher earthquake history.

              Think about it: if a precariously balanced rock has held its position for 10,000 years without tipping over, it means the land around the stone hasn't experienced shaking above a certain level in all that time.

              </p>
                  <h2>Post two</h2>
                  <p>In truth, the disturbance needed to unsettle the blocks is quite significant, and that got husband and wife geologists Drs Dylan and Anna Rood wondering about how these great stones could be used to decipher earthquake history.

              Think about it: if a precariously balanced rock has held its position for 10,000 years without tipping over, it means the land around the stone hasn't experienced shaking above a certain level in all that time.

              "The turn of phrase we're trying to coin is that these precariously balanced rocks, or PBRs, are an 'inverse seismometer'," explains Anna.

              "A normal seismometer records an event that has happened, whereas our PBR is still standing there, and so it records an earthquake that hasn't happened. Specifically, a large earthquake," the Imperial College London, UK, researcher tells BBC News.

              This is really useful information if you want to build a nuclear power station or waste repository; or maybe a major dam or bridge.</p>
                  <h2>Post three</h2>
                  <p>Knowing how robust that structure needs to be requires an understanding of the seismic hazards that could reasonably be foreseen during its lifetime.

              Can it expect a certain threshold of shaking once every 100 years, or every 1,000 years, or indeed only once every 10,000 years? The answer will bear directly on the cost of a safe construction as well as the insurance risk.

              Planners may be fortunate in that the location where they want to put up that new power station already has a detailed, instrumented record of seismic behaviour. But there will be places where that record is sparse - places where it's known large tremors can occur but where the history of the size and frequency of events is extremely patchy.

              </p>
                </div>
              </div>
            </div>
            <div className = "margin-left">
              <div class="footer">
                <p>SETTINGS</p>
              </div>
            </div>
            <div class="footer"> <p>This is footer</p> </div>
            
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

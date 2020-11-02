import React from 'react'



import './Form.scss'

const Form = () => {
return (
    <div className="ContainerC2">
    <div className="ContactTitleBox">
      <h2>Contact me</h2>
      <h3>For More Enquiries Please Fill Out This Form:</h3>
    </div>
  
    <div className="ContactBox">
      <div className="ContactBoxForm">
        
        <div className="FormBox">
          <div className="formFlex">
            <form
              className="formm"
              action="https://formspree.io/mpzypwdd"
              method="post"
            >

  
              <div className="form-group first">
                <label htmlFor="fname">Your Name : </label>
                <input
                  type="text"
                  id="fname"
                  name="Name"
                  placeholder="Your First name"
                  required
                />
              </div>
              <div className="form-group second">
                <label htmlFor="Email">Email</label>
                <input
                  type="text"
                  id="Email"
                  name="Email"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="form-group first">
                <label htmlFor="Country">Country</label>
                <input
                  type="text"
                  id="Country"
                  name="Country"
                  placeholder="From where you are from"
                />
              </div>
              <div className="form-group second">
                <label htmlFor="Subject">Subject</label>
                <input
                  type="text"
                  id="Subject"
                  name="Subject"
                  placeholder="Subject"
                />
              </div>
              <div className="form-group textareaa2">
                <label htmlFor="subjectext">Your message</label>
                <textarea
                  id="subjectext"
                  name="Message"
                  placeholder="Write something.."
                  required
                ></textarea>
              </div>
              <input type="submit" id="Sabutton" value="Send" />
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
    )
}

export default Form
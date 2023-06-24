import React from "react";
import Modal from './Modal.jsx'
import { useState } from "react";
import './Contact.css'


function Contact() { 
  const [count, setCount] = useState(false)

    return (
        <div className="Contact">
            <button className="btn" onClick={() => setCount(true)}>ShowModal</button>
            {count && (
                <Modal>
                  <h2>Login</h2>
                    <form>
                      <input type="text" className="int1" placeholder="Your name" />
                      <input type="email" className="int2" placeholder="Your email" />
                      <textarea name="message" placeholder="Message" id="" rows="6"></textarea>
                    </form>
                    <button className="btn2" onClick={() => setCount(false)}>Close</button>
                </Modal>
            )
            }
        </div>
    )
};

export default Contact;
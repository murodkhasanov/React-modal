import React from "react";
import Modal from './Modal.jsx'
import { useState } from "react";
import './Works.css'

function Works() {
  const [count, setCount] = useState(false)



  return (
    <div className="Works">
      <button className="btn" onClick={() => setCount(true)}>ShowModal</button>
      {count && (
        <Modal>
          <div className="dad">
            <h2>My works</h2>
            <div className="dada">
              <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolore
                perspiciatis libero <span>voluptas iste possimus totam autem odio.</span>
              </div>
              <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolore
                perspiciatis libero <span>voluptas iste possimus totam autem odio.</span>
              </div>
              <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolore
                perspiciatis libero <span>voluptas iste possimus totam autem odio.</span>
              </div>
            </div>
            <button className="btn2 nma" onClick={() => setCount(false)}>Close</button>
          </div>
        </Modal>
      )
      }
    </div>
  )
};

export default Works;
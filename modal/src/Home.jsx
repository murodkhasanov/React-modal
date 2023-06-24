import React from "react";
import Modal from './Modal.jsx'
import { useState } from "react";
import './Home.css'

function Home() { 
  const [count, setCount] = useState(false)



    return (
        <div className="Home">
            <img src="./src/software-developer-1.avif" alt="" /><h2>This page Home pages</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos repellat delectus, 
                eum sit sed iusto culpa sequi architecto mollitia <br /> accusamus, 
                aspernatur quae. Tempora, vero cupiditate. Consequatur rem cum dolorem ipsum.</p>
            <button className="btn" onClick={() => setCount(true)}>ShowModal</button>
            {count && (
                <Modal>
                    <h1 className="nm">Hi, my name is Murod I'm Front-End developer</h1>
                    <p className="nm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet minus mollitia consequatur beatae repellendus
                        dicta, aperiam officia ut doloremque quae delectus? Odit fugit eius quo odio, placeat velit quasi. Enim.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia laborum, ex repellendus vitae vel nobis 
                        ab maxime voluptatum nihil minus?
                    </p>
                    <button className="btn2" onClick={() => setCount(false)}>Close</button>
                </Modal>
            )
            }
        </div>
    )
};

export default Home;
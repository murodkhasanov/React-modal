import React from "react";
import Modal from './Modal.jsx'
import { useState } from "react";
import './Blogs.css'

function Blogs() {
    const [count, setCount] = useState(false)



    return (
        <div className="Blogs">
            <button className="btn" onClick={() => setCount(true)}>ShowModal</button>
            {count && (
                <Modal>
                    <div className="pag">
                        <h2>Web developers</h2>
                        <div className="imgs">
                            <img src="./src/canva-software-developer-working.webp" alt="" />
                            <img src="./src/image-4.webp" alt="" />
                            <img src="./src/mobile-developer-writes-program-code-computer-programmer-work-home-office_182615-1894.avif" alt="" />
                            <img src="./src/senior-developer-896x504.webp" alt="" />
                        </div>
                    </div>
                    <button className="btn2" onClick={() => setCount(false)}>Close</button>
                </Modal>
            )
            }
        </div>
    )
};

export default Blogs;
import React from "react";
import Header from './components/Header';
import './style.css'; // importar arquivo css

function Home () {
    return (
        <div>
            <header className="header">
                <div className="toolbar">
                    <div className="">
                        <span>Conecta Dev</span>
                    </div>
        

                    <div className="">
                        <button>Novo Post</button>
                        <span>Img1</span>
                        <span>Img2</span>
                    </div>
                </div>    
            </header>

           <main className="main">
                <div className="navbar">
                    navbar
                </div>

                <div className="feed">
                    feed
                </div>
           </main>
        </div>
    )
}

export default Home;
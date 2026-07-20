import React, { useState, useEffect } from 'react';
import './App.css';

/* Components */
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Main from './components/Main';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

function App() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 4000)
    }, [])

    return (
        <>
            {
                loading ?

                    <div className='loading-pag'>
                        <div className="loader">
                            <span>=(AbdelKarim)/</span>
                            <span>=(AbdelKarim)</span>
                        </div>
                    </div>

                    :

                    <>
                        <Header />
                        <Content />
                        <Main />
                        <Footer />
                        <ScrollToTop />
                    </>

            }
        </>
    )
}

export default App
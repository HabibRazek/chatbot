import React from 'react'
import NavBar from './Nav'
import Presentation from './Presentation'
import Activites from './Activites'
import Footer from './Footer'
import ContactForm from './ContactForm'
import Dons from './Dons'
import ChatComponent from './ChatComponent';

const Home = () => {
    return (
        <>
            <NavBar />
            <div className=" bg-[#fca955ef] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#ffbf8b]"></div>
            <div className="bg-[#ffccaa] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#ffccaa]"></div>
            <div id="presentation">
                <Presentation />
            </div>
            <div className="bg-[#ffccaa] mt-[600px] absolute top-[-1rem] -z-10 left-[-35rem] h-[15rem] w-[25rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#ffccaa]"></div>
            <div className="bg-[#ffccaa] mt-[1700px] absolute top-[-1rem] -z-10 left-[-35rem] h-[32rem] w-[25rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#ffccaa]">
            </div>
            <div id="activites">
                <Activites />
            </div>
            <div id="dons">
                <Dons />
            </div>
            <div id="contact">
                <ContactForm />
                <div className="bg-[#ffccaa] mt-[2900px] absolute top-[-1rem] -z-10 left-[-35rem] h-[5rem] w-[25rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#ffccaa]">

                </div>
            </div>
            <Footer />
            <div style={{ position: 'fixed', bottom: '10px', right: '10px' }}>
            <ChatComponent />
        </div>
        </>
    )
}

export default Home;





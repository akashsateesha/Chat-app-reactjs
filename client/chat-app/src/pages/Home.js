import React from 'react'
import "../styles/Home.css"
import { Link } from 'react-router-dom'
import urls from "../components/Urls"

const Home = () => {
    // console.log(urls)
    return (
        <div className='main'>
            <div className='main-caption'>
                A little about me, a little about you. Meet up and let’s chat 😉
            </div>
            <Link to={urls.CHAT} className='main-start button'>Let's Go</Link>
        </div>
    )
}

export default Home
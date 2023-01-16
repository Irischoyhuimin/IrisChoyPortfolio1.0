import{Link} from 'react-router-dom'
import Image from '../images/main__header.jpeg'

const MainHeader = () => {
    return(
        <header className="main_header">
            <div className="container main__header-container">
                <div className="main__header-left">
                    <h4>#AboutMe</h4>
                    <h1>Iris Choy Hui Min</h1>
                    <p>
                        "I am a software engineer with a passion for graphic design. With several years of experience in both fields, I have developed a unique skill set that allows me to combine my technical knowledge with my creative abilities. Whether it's designing a user interface for a new software application or creating visually stunning marketing materials, I am dedicated to delivering high-quality results that exceed expectations. I am constantly learning and growing, always seeking new challenges and opportunities to showcase my talents."
                    </p>
                    <Link to="/about" className='btn lg'>Get Started</Link>
                </div>
                <div className="main__header-right">
                    <div className="main__header-circle"></div>
                    <div className="main__header-image">
                        <img src={Image} alt="Main Header Image" />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default MainHeader
import { Image } from 'semantic-ui-react'

const Header = (props) => {

    // Get the time
    let currentTime = new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: false });

    return (
        <div>
            <ul className="headerList">
                <li><a href="/">PORTFOLIO</a></li>
                <li><a href="/">CALENDAR</a></li>
                <li><a href="/">CONTACT</a></li>
                <li style={{ marginLeft: 'auto' }}>{currentTime}</li>
            </ul>
        </div>
    )
}

export default Header
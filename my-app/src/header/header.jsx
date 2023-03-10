import "./header.css"
import { CgChevronDown } from "react-icons/cg";
import { BiUser } from "react-icons/bi";
import Logout from "../logout/logout";


const Header = () => {
    const userId = localStorage.getItem("userid");
    const userName = userId.split('@')[0]

    return (
        <>
            <div className='headercontainer'>
                <div className='userid'>USER ID: {userId}</div>
                <div className='dropdown'><BiUser /> {userName}<CgChevronDown />
                    <div className="dropdown-content">
                        <Logout />
                    </div>
                </div>
            </div>
            <div className="headerbtmline"></div>
        </>
    )
}
export default Header
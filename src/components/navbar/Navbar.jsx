import Sidebar from "../sidebar/Sidebar"
import "./navbar.scss"
import {motion} from "framer-motion"

const Navbar = () => {
    return (
        <div className="navbar">
            {/* Sidebar */}
            <Sidebar />
            <div className="wrapper">
                <motion.span
                    initial={{opacity:0, scale:0.5}}
                    animate={{opacity:1, scale:1}}
                    transition={{duration: 0.5}}
                >
                    <img src="2b1.png" alt="" />
                    TOBE TTK
                </motion.span>
            </div>
        </div>
    )
}

export default Navbar
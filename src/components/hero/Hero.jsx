import "./hero.scss"
import { motion } from "framer-motion"

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1
        }
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity
        }
    }
}

const sliderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-220%",
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 20,
        }
    },

}

const Hero = () => {
    return (
        <div className="hero">
            <div className="wrapper">
                <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
                    <motion.h1 variants={textVariants}>พวกเราคือแกนนำชมรม<br/><h2>TO BE NUMBER ONE</h2>โรงเรียน<span className="hlText1">เทศบาล</span><span className="hlText2">ท่าโขลง ๑</span></motion.h1>
                    <motion.div className="btn" variants={textVariants}>
                        <a href="/tobe_ttk_factsheet.pdf" download>
                            <motion.button variants={textVariants}>ดาวน์โหลด Factsheet</motion.button>
                        </a>
                        <a href="https://forms.gle/9qgjdHKLNQqMAT6L9" target="_blank">
                            <motion.button variants={textVariants}>สมัครสมาชิก</motion.button>
                        </a>
                    </motion.div>
                    <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" />
                </motion.div>
            </div>
            <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
                เป็นหนึ่งโดยไม่พึ่งยาเสพติด
            </motion.div>
            <div className="imageContainer">
                <img src="/hero.png" alt="To Be Number One TTK Logo" />
            </div>
        </div>
    )
}

export default Hero
import { useRef } from "react"
import "./services.scss"
import { motion, useInView } from "framer-motion"

const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.1
        }
    }
}

const Services = () => {
    const ref = useRef()

    const isInView = useInView(ref, {margin: "-100px"})

    return (
        <motion.div
            className="services"
            variants={variants}
            initial="initial"
            // animate="animate"
            // whileInView="animate"
            ref={ref}
            animate={"animate"}
        >
            <motion.div className="textContainer" variants={variants}>
                <p>เส้นทางการเดินทางเพื่อการพัฒนาคุณภาพชีวิต<br />โรงเรียน ชุมชน ร่วมใจกันแก้ไขปัญหาโดยไม่พึ่งยาเสพติด</p>
                <hr />
            </motion.div>
            <motion.div className="titleContainer" variants={variants}>
                <div className="title">
                    <img src="/people.jpg" alt="" />
                    <h1>เด็ก<motion.b whileHover={{color: "orange"}}>คิด</motion.b> เด็ก<motion.b whileHover={{color: "orange"}}>ทำ</motion.b></h1>
                </div>
                <div className="title">
                    <h1>เด็ก<motion.b whileHover={{color: "orange"}}>นำ</motion.b> ผู้ใหญ่<motion.b whileHover={{color: "orange"}}>หนุน</motion.b></h1>
                    <button>มีที่มาจากอะไร?</button>
                </div>
            </motion.div>

            <div className="about">
                <div className="aboutHeading">
                    <h1>การก่อตั้งชมรม TO BE NUMBER ONE โรงเรียนเทศบาลท่าโขลง ๑</h1>
                </div>
                <div className="aboutContainer">
                    <div className="aboutText">
                        <p>
                            สู่แนวคิดและหลักการของโครงการ TO BE NUMBER ONE ทูลกระหม่อมหญิงอุบลรัตนราชกัญญา สิริวัฒนาพรรณวดี ชมรม TO BE NUMBER ONE โรงเรียนเทศบาลท่าโขลง๑ ได้เริ่มทำกิจกรรมในลักษณะรณรงค์ต้านยาเสพติดให้กับสมาชิกเยาวชนเครือข่ายและชุมชนรอบๆ ตั้งแต่ปี พ.ศ. 2561 ซึ่งมีการจัดกิจกรรมอย่างต่อเนื่อง โดยเป็นชมรมที่มุ่งเน้นป้องกันและแก้ไขปัญหายาเสพติดในโรงเรียน ได้มีการจัดอบรมในโครงการ "เยาวชนแกนนำศูนย์เพื่อนใจ TO BE NUMBER ONE" โดยมีวิทยากรจากชมรม TO BE NUMBER ONE ชุมชนตำบลคลองห้าร่วมกับสาธารณสุขจังหวัดปทุมธานีมาเป็นผู้ให้ความรู้แก่สมาชิกที่เข้าอบรม หลังจากนั้น จึงได้มีการก่อตั้ง "ศูนย์เพื่อนใจ TO BE NUMBER ONE" ได้รับงบประมาณสนับสนุนจาก นายสุเทพ วงษ์แจ้ง และผู้ใหญ่ใจดีอีกหลายท่านจำนวน 150,000 บาท ต่อมาในปี พ.ศ.2562 ได้มีการพัฒนาศูนย์ฯ ของเราให้ตรงกับแนวคิดของกระทรวงสาธารณสุขในการสร้างศูนย์ฯ จึงทำให้ชมรมฯ มีกิจกรรมที่ให้เยาวชนมีเพื่อนที่ดีและมีทักษะในด้านการให้คำปรึกษาในวัยใกล้เคียงกันหรือวัยเดียวกัน
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Services
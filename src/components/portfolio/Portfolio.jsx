import { useRef } from "react"
import "./portfolio.scss"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"

const items = [
    {
        id: 1,
        title: "ก. กรรมการ",
        img: "/team.jpg",
        desc: "เรามีระเบียบปฏิบัติและข้อบังคับสำหรับกรรมการ จำนวน 15 คน ที่ได้มาจากการเลือกตั้ง พร้อมแกนนำอาสาสมัครอีก จำนวน 50 คน ที่ได้มาจากการคัดเลือกจากทุกระดับชั้น โดยทุกคนมีวาระการทำงาน 2 ปี สำหรับปีพ.ศ. 2567 เรามีการประชุมรวมทั้งหมด 12 ครั้ง",
    },
    {
        id: 2,
        title: "ก. กองทุน",
        img: "/ก2.png",
        desc: "มีคณะกรรมการฝ่ายจัดหาทุนเป็นผู้รับผิดชอบในด้านต่างๆเกี่ยวกับการเงิน มีแหล่งเงินทุน ดังนี้: | งบประมาณของโรงเรียนจำนวน 200,000 บาท | งบสนับสนุนจากนายสุเทพ วงศ์แจ้ง และผู้ใหญ่ใจดี จำนวนเงิน 125,000 บาท | การจำหน่ายสินค้าของชมรม กิจกรรมคอนเสิร์ตดี๊ดีทูบี 5 บาท การนำสินค้าไปจำหน่ายในตลาดนัดชุมชน และการจำหน่ายผักปลอดสารพิษของชมรม จำนวน 68,200 บาท",
    },
    {
        id: 3,
        title: "ก. กิจกรรม",
        img: "/ก3.png",
        desc: "เราได้มีการจัดกิจกรรมให้สมาชิกอย่างต่อเนื่องตลอดทั้งปีโดยดำเนินกิจกรรมภายใต้ 3 ยุทธศาสตร์หลักโดยใช้กระบวนการ PDCA (Plan Do Check Act) ดังนี้:",
    }
]

const Single = ({ item }) => {
    const ref = useRef()

    const {scrollYProgress} = useScroll({ target: ref, /* offset: ["start start", "end start"] */ })

    const y = useTransform(scrollYProgress, [0, 1], [-100, 100])

    return (
        <section>
            <div className="container">
                    <div className="wrapper">
                        <div className="imageContainer" ref={ref}>
                            <img src={item.img} alt="" />
                        </div>
                        
                        <motion.div className="textContainer" style={{y}}>
                            <h2>{item.title}</h2>
                            <p>{item.desc}</p>
                        </motion.div>
                    </div>
            </div>
        </section>
    )
}

const Portfolio = () => {

    const ref = useRef()

    const {scrollYProgress} = useScroll({ target: ref , offset:["end end", "start start"]})

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30
    })

    return <div className="portfolio" ref={ref}>
            <div className="progress">
                <h1>หลักการทำงาน 3 ก</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {items.map((item) => (
                <Single item={item} key={item.id} />
            ))}
        </div>
}

export default Portfolio
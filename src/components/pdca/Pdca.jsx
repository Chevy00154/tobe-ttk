import { useRef } from "react"
import "./pdca.scss"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"

const items = [
    {
        id: 1,
        title: "ยุทธศาสตร์ที่1 การรณรงค์ปลุกจิตสำนึกและสร้างกระแสนิยมที่เอื้อต่อการป้องกันและแก้ไขปัญหายาเสพติด",
        img: "/ย1.png",
        desc: "ใช้การรณรงค์และประชาสัมพันธ์ผ่านสื่อและกิจกรรมโดยเฉพาะกิจกรรมด้านดนตรี ศิลปะ กีฬา และอื่นๆที่เยาวชนวัยรุ่นชื่นชอบและสนใจ โดยผ่านรูปแบบที่หลากหลาย เช่น การสร้างกระแสชมรมผ่านสื่อโซเชียลมีเดีย กิจกรรสาระดี๊ดีทูบีท่าโขลง ฯลฯ",
    },
    {
        id: 2,
        title: "ยุทธศาสตร์ที่2 การเสริมสร้างภูมิคุ้มกันทางจิตใจ",
        img: "/ย2.png",
        desc: "เราได้จัดกิจกรรมที่หลากหลายเพื่อที่จะตอบสนองยุทธศาสตร์ที่สอง เช่น การส่งเสริมสมาชิกเข้าร่วมค่ายพัฒนาสมาชิก TO BE NUMBER ONE CAMP ในทุกๆปีการจัดกิจกรรมที่เกี่ยวข้องกับศาสนาเพื่อกล่อมเกลาจิตใจ กิจกรรมการอบรมให้ความรู้ของโทษภัยจากยาเสพติด การจัดศูนย์เพื่อนใจ หรือแม้กระทั่งโครงการใครติดยายกมือขึ้นเพื่อเสริมสร้างภูมิคุ้มกันให้กับสมาชิกและลดปัญหาที่เกิดขึ้นจากยาเสพติด",
    },
    {
        id: 3,
        title: "ยุทธศาสตร์ที่3 การเสริมสร้างและพัฒนาเครือข่ายเพื่อป้องกันและแก้ไขปัญหายาเสพติด",
        img: "/ย3.png",
        desc: "เราได้ดำเนินการสร้างและพัฒนาเครือข่ายอยู่เสมอไม่ว่าจะเป็นแลกเปลี่ยนเรียนรู้กับชมรมรุ่นพี่ เครือข่ายกับชมรมอื่นในจังหวัดปทุมธานีทั้งในรูปแบบชุมชนทัณฑสถาน และล่าสุดชมรมของเรายังได้แลกเปลี่ยนเรียนรู้กับชมรมรุ่นพี่อย่างชมรม TO BE NUMBER ONE โรงเรียนทีปังกรวิทยาพัฒน์ (มัธยมวัดหัตถสารเกษตร) ในพระราชูปถัมภ์ และชมรม TO BE NUMBER ONE ชุมชนตำบลคลองห้าอีกด้วย",
    }
]

const Single = ({ item }) => {
    const ref = useRef()

    const {scrollYProgress} = useScroll({ target: ref, /* offset: ["start start", "end start"] */ })

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300])

    return (<section>
        <div className="pdca-container">
                <div className="pdca-wrapper">
                    <motion.div className="pdca-textContainer" style={{y}}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                    </motion.div>

                    <div className="pdca-imageContainer" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                </div>
        </div>
    </section>
    )
}

const Pdca = () => {

    const ref = useRef()

    const {scrollYProgress} = useScroll({ target: ref , offset:["end end", "start start"]})

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30
    })

    return (
        <div className="pdca" ref={ref}>
            <div className="pdca-progress">
                <h1>หลักการทำงาน 3 ยุทธศาสตร์</h1>
                <motion.div style={{ scaleX }} className="pdca-progressBar"></motion.div>
            </div>
            {items.map((item) => (
                <Single item={item}  key={item.id} />
            ))}
        </div>
    )
}

export default Pdca
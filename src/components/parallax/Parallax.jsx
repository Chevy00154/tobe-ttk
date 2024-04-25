import { useRef } from "react"
import "./parallax.scss"
import { motion, useScroll, useTransform } from "framer-motion"

const Parallax = ({ type }) => {

  const ref = useRef()

  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })
  
  const yText = useTransform(scrollYProgress, [0,1], ["0%", "500%"])

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "เกี่ยวกับเรา"
            ? "linear-gradient(180deg, #d88080, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #830909)"
      }}
    >
      <motion.h1 style={{ y: yText }}>
        {type === "เกี่ยวกับเรา" ? "แนวคิดอะไรที่พวกเราก่อตั้งชมรมขึ้น?" : "พวกเรามีวิธีแก้ไขยังไงให้ดีขึ้น?"}
      </motion.h1>
      
    </div>
  )
}

export default Parallax
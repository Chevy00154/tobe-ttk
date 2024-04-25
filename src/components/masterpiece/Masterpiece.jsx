import { useRef } from "react"
import { ImageGallery } from "react-image-grid-gallery";
import "./masterpiece.scss"
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

const imagesArray = [
    {
        alt: "นางสาวนวธิดา เปรมสุขดี แกนนำชมรม ได้รับรางวัล นักเรียนรางวัลพระราชทานพระบาทสมเด็จพระเจ้าอยู่หัว",
        caption: "นางสาวนวธิดา เปรมสุขดี แกนนำชมรม ได้รับรางวัล นักเรียนรางวัลพระราชทานพระบาทสมเด็จพระเจ้าอยู่หัว",
        src: "/m1.jpeg",
    },
    {
        alt: "แกนนำชมรมได้รับรางวัลรองชนะเลิศอันดับ 2 ในการแข่งขันทักษะวิชาการด้านการบริหารธุรกิจระดับชาติ ครั้งที่ 1 ชิงถ้วยพระราชทานสมเด็จพระกนิษฐาธิราชเจ้า กรมสมเด็จพระเทพรัตนราชสุดา สยามบรมราชกุมารี",
        caption: "แกนนำชมรมได้รับรางวัลรองชนะเลิศอันดับ 2 ในการแข่งขันทักษะวิชาการด้านการบริหารธุรกิจระดับชาติ ครั้งที่ 1 ชิงถ้วยพระราชทานสมเด็จพระกนิษฐาธิราชเจ้า กรมสมเด็จพระเทพรัตนราชสุดา สยามบรมราชกุมารี",
        src: "/m2.jpeg",
    },
    {
        alt: "นายปุณวัฒน์ ก้าวหน้าชัยมงคล แกนนำชมรม ได้รับรางวัลรองชนะเลิศกีฬาเทเบิลเทนนิส นักเรียน นักศึกษาแห่งชาติ ครั้งที่ 43 กระบี่เกมส์",
        caption: "นายปุณวัฒน์ ก้าวหน้าชัยมงคล แกนนำชมรม ได้รับรางวัลรองชนะเลิศกีฬาเทเบิลเทนนิส นักเรียน นักศึกษาแห่งชาติ ครั้งที่ 43 กระบี่เกมส์",
        src: "/m4.jpeg",
    },
    {
        alt: "เด็กหญิง ณธิดา บุระมาศ อายุไม่เกิน 15 ปี การแข่งขันแบดมินตันรายการ PAPA GO International youth team 2021",
        caption: "เด็กหญิง ณธิดา บุระมาศ อายุไม่เกิน 15 ปี การแข่งขันแบดมินตันรายการ PAPA GO International youth team 2021",
        src: "/m3.jpg",
    },
    {
        alt: "แกนนำชมรม TO BE NUMBER ONE ชุมชนเทศบาลท่าโขลงเป็นตัวแทนจังหวัดปทุมธานีเข้าร่วมแข่งขันระดับประเทศ",
        caption: "แกนนำชมรม TO BE NUMBER ONE ชุมชนเทศบาลท่าโขลงเป็นตัวแทนจังหวัดปทุมธานีเข้าร่วมแข่งขันระดับประเทศ",
        src: "/m5.png",
    },
    {
        alt: "นายปรมี มาลี แกนนำชมรม ได้รับรองชนะเลิศอันดับ 3 ในการแข่งขันหุ่นยนต์ระดับอาเซียนชิงถ้วยพระราชทานสมเด็จพระกนิษฐาธิราชเจ้า กรมสมเด็จพระเทพรัตนราชสุดา สยามบรมราชกุมารี",
        caption: "นายปรมี มาลี แกนนำชมรม ได้รับรองชนะเลิศอันดับ 3 ในการแข่งขันหุ่นยนต์ระดับอาเซียนชิงถ้วยพระราชทานสมเด็จพระกนิษฐาธิราชเจ้า กรมสมเด็จพระเทพรัตนราชสุดา สยามบรมราชกุมารี",
        src: "/m6.jpeg",
    },
    {
        alt: "แกนนำชมรม TO BE NUMBER ONE เข้าร่วมค่ายพัฒนาสมาชิก TO BE NUMBER ONE สู่ความเป็นหนึ่ง รุ่นที่ 29 ณ เดอะไพน์ รีสอร์ท จังหวัดปทุมธานี",
        caption: "แกนนำชมรม TO BE NUMBER ONE เข้าร่วมค่ายพัฒนาสมาชิก TO BE NUMBER ONE สู่ความเป็นหนึ่ง รุ่นที่ 29 ณ เดอะไพน์ รีสอร์ท จังหวัดปทุมธานี",
        src: "/m7.jpeg",
    },
];

const Masterpiece = () => {
    const ref = useRef()

    const isInView = useInView(ref, {margin: "-100px"})

    return <section>
        <div className="container">
            <motion.div
                className="wrapper"
                variants={variants}
                initial="initial"
                // animate="animate"
                // whileInView="animate"
                ref={ref}
                animate={"animate"}
            >
                <h1>ผลงานความภาคภูมิใจ</h1>
                <div className="imgGallery">
                    <ImageGallery
                        imagesInfoArray={imagesArray}
                        columnWidth={255}
                        gapSize={30}
                    />
                </div>
            </motion.div>
        </div>
    </section>
    
}

export default Masterpiece
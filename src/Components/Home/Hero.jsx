import React from 'react'
import Typed from 'typed.js'
import Lesson from '../../Images/Lesson.gif'
import C__ from "../../Images/c-.png";
import C from "../../Images/c.png";
import css3 from "../../Images/css-3.png";
import html5 from "../../Images/html-5.png";
import js from "../../Images/js.png";
import python from "../../Images/python.png";
import nodejs from "../../Images/node-js.png";
import '../../CSS/Hero/Hero.css'
import { parallex } from '../../Function/Hero';



export default function Hero() {
    const el = React.useRef(null);
   
    const LanguageList = [
        '<span class="h2 text-primary" >React.js </span>',
        '<span class="h2 text-success" >Node.js </span>',
        '<span class="h2 text-danger" >C </span>',
        '<span class="h2 text-warning"> JavaScript </span>',
        '<span class="h2 text-primary" >HTML 5 </span>',
        '<span class="h2 text-primary" >CSS 3 </span>'
    ]

    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: LanguageList,
            typeSpeed: 50,
            loop: true,
            cursorChar: "<span class='cursor h2 text-danger'>|</span>"
        });
        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
        // eslint-disable-next-line
    }, []);

    parallex();
    return (
        <section className='m-3 rounded-3 shadow ' id='Hero-section'>
            <div className="container  px-4 py-5 d-flex align-items-center justify-content-between">
                <div className='container'>
                    <h4 className='mb-3 text-warning' >Welcome !</h4>
                    <h1 className='fw-bold text-primary'>Learn IT Online </h1>
                    <h1 className='fw-bold mb-5 '> with No Limits </h1>
                    <h3 className=' text-secondary'>
                        Hello, What Do You Want To Learn?
                    </h3>
                    <span ref={el}></span>
                    <div className='mt-5'>
                        <button className='btn btn-primary  btn-lg me-3'>Learn Document </button>
                        <button className='btn btn-warning btn-lg '>Course</button>
                    </div>
                </div>

                <div className='container position-relative'>
                    <img src={Lesson} className='' alt="Hero images" />
                    <div className=' hero_image_1 parallex_img position-absolute'>
                        <img src={C} className='float_image' alt="" />
                    </div>
                    <div className=' hero_image_2  parallex_img position-absolute'>
                        <img src={C__} className='float_image' alt="" />
                    </div >
                    <div className=' hero_image_3  parallex_img position-absolute'>
                        <img src={nodejs} className='float_image' alt="" />
                    </div >
                    <div className=' hero_image_4 parallex_img position-absolute'>
                        <img src={python} className='float_image' alt="" />
                    </div >
                    <div className=' hero_image_5  parallex_img position-absolute'>
                        <img src={js} className='float_image' alt="" />
                    </div >
                    <div className=' hero_image_6  parallex_img position-absolute'>
                        <img src={html5} className='float_image' alt="" />
                    </div >
                    <div className=' hero_image_7  parallex_img position-absolute'>
                        <img src={css3} className='float_image' alt="" />
                    </div >
                </div>
            </div>
        </section>
    )
}

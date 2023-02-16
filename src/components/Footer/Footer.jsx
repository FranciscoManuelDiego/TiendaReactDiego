import React from 'react'
import './Footer.css'

const Footer = () => {
return (
        <footer className='Footer'>
            <section className='SectionIcons'>
                <a href='https://twitter.com/coderhouse'>
            <i class="fa-brands fa-twitter circle-icon "></i>
                </a>
                <a href='https://www.instagram.com/coderhouse/'>
            <i class="fa-brands fa-instagram circle-icon"></i>
                </a>
                <a href='https://wa.me/5492215137609'>
            <i class="fa-brands fa-whatsapp circle-icon"></i>
                </a>
            </section>
            <section className='SectionText'>
                <p>TiendaReact- Prototipo</p>
                <a href='https://www.coderhouse.com/'>
                <p className='Coder'>@CoderHouse 2023</p>
                </a>
            </section>
        </footer>
    )
}

export default Footer
import React from 'react'
import cake from '../assets/cakelogo.png'

export default function Footer() {
  return (
    <div className=''>
        <footer className="footer bg-red-100 text-base-content p-10">
  <aside>
    <img src={cake} alt="cake"  className='w-48 h-40'/>
  </aside>
  <nav>
    <h6 className="footer-title text-red-400 text-xl">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title text-red-400 text-xl">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title text-red-400 text-xl">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
    </div>
  )
}

import React from 'react'
import "../assets/main.scss"
import Panelsvg from "../assets/svgs/pannel-svg.svg"
import FooterSvg from "../assets/svgs/footer-svg.svg"
import { FaMoneyBillTrendUp } from 'react-icons/fa6'
import { GiExpense, GiMoneyStack } from 'react-icons/gi'
import { Link } from 'react-router'
function Home() {
  return (<>
    <div className="home">
{/* Section 1 */}
<div className="main-1-container">
   
   <div className="block-1 animate__animated animate__slideInLeft">
   <div className="text-1">Your Smart <span className='unique'>Companion</span></div>
   <div className="text-1">for Smarter <span className='unique'>Spending</span></div>
   </div>
   <div className="block-2 animate__animated animate__slideInRight">
   <img src={Panelsvg} alt="svg" />
   </div>
</div>
{/* section 1 ends here */}


{/* Section 2 */}
<div className="main-2-container">
    <div className="heading">
        What We Offer
    </div>
<div className="container">
<div className="card">
  <div className="face face1">
    <div className="content">
      <span className="stars"></span>
      <h2 className="java">Smart Budgeting</h2>
      <p className="java">Track, manage, and optimize your spending with an intuitive platform that helps you make smarter financial decisions every day.</p>
    </div>
  </div>
  <div className="face face2">
    <h2><FaMoneyBillTrendUp/> </h2>
  </div>
</div>

<div className="card">
  <div className="face face1">
    <div className="content">
      <span className="stars"></span>
      <h2 className="python">Effortless Expense Tracking </h2>
      <p className="python">Easily organize your finances, set budgets, and monitor your expenses in real-time, giving you the tools to save more.</p>
    </div>
  </div>
  <div className="face face2">
    <h2><GiExpense/> </h2>
  </div>
</div>

<div className="card">
  <div className="face face1">
    <div className="content">
      <span className="stars"></span>
      <h2 className="cSharp">Your Financial Companion</h2>
      <p className="cSharp">Stay on top of your finances with personalized budgeting tools and insightful reports that help you spend wisely and save effectively.</p>
    </div>
  </div>
  <div className="face face2">
    <h2><GiMoneyStack/> </h2>
  </div>
</div>
</div>
</div>
{/* Section 2 ends here */}
{/* footer */}

    </div>
   
    <footer>
      <div className="background">
        <img className='svg' src={FooterSvg } alt="footersvg" />
      </div>

      <section>
        <ul className="socials">
          <li><a className="fa-brands fa-facebook"></a></li>
          <li><a className="fa-brands fa-twitter"></a></li>
          <li><a className="fa-brands fa-linkedin"></a></li>
          <li><a className="fa-brands fa-instagram"></a></li>
        </ul>
        <ul className="links-footer">
          <li> <Link to="/">Home</Link> </li>
          <li> <Link to="/linkedin  ">LinkedIn</Link> </li>
          <li> <Link to="/git">GitHub</Link> </li>
    
        </ul>
        <p className="legal">© 2023 All rights reserved</p>
      </section>
    </footer>
    </>
  )
}

export default Home

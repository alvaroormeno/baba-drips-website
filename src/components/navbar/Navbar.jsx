import React from 'react'

import styles from './Navbar.module.css'

//IMAGES
import logo from '../../assets/images/baba-logo-transparent.png'
import products from '../../assets/images/Products.png'
import about from '../../assets/images/About_Us.png'
import contactUs from '../../assets/images/contact_us.png'
import orders from '../../assets/images/orders.png'
import merch from '../../assets/images/merch.png'

const navbar = () => {
  return (
    // MAIN CONTAINER
    <div className={styles["main-navbar"]}>
      {/* Logo */}
      <div>
        <img src={logo} alt="logo" className={styles["navbar-logo"]} />
      </div>

      {/* Links */}
      <div>
        <ul className={styles["navbar-links"]}>
          <li>
            <img src={about} alt="" className={styles["navbar-about-image"]} />
          </li>
          <li>
          <img src={products} alt="" className={styles["navbar-products-image"]} />
          </li>
          <li>
          <img src={contactUs} alt="" className={styles["navbar-contactUs-image"]} />
          </li>
          <li>
          <img src={orders} alt="" className={styles["navbar-orders-image"]} />
          </li>
          <li>
          <img src={merch} alt="" className={styles["navbar-merch-image"]} />
          </li>
        </ul>
      </div>

    </div>
  )
}

export default navbar
import React from 'react';
import styles from './styles.module.css';
import { TiSocialInstagram } from 'react-icons/ti';
import {ImTwitter, ImLinkedin2 } from 'react-icons/im';
import { RiFacebookBoxFill } from 'react-icons/ri';


export default () => {
    return (
        <footer className={styles.footer}>
        <div className={styles.containerFooter}>
            <div className={styles.icons}>
                <RiFacebookBoxFill />
              <a id="footer_link" href='https://www.instagram.com/_abidkhann/'> <TiSocialInstagram /> </a> 
                <ImTwitter />
              <a  id="footer_link" href="https://www.linkedin.com/feed/"> <ImLinkedin2 /></a> 
            </div>
            <ul className={styles.details}>
                <li>Language and Subtitles</li>
                <li>Audio Description</li>
                <li>Help Center</li>
                <li>Prepaid Card</li>
                <li>Press</li>
                <li>Investor Relations</li>
                <li>Careers</li>
                <li>Terms of Use</li>
                <li>Privacy</li>
                <li>Legal Notices</li>
                <li>Cookie Preferences</li>
                <li>Corporate Information</li>
                <li>Contact Us</li>
            </ul>
            <div className={styles.security}>
             
                <span>© Cloned by Abid khan</span>
            </div>
        </div>
    </footer>
    
    )
}
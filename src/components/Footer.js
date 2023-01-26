import React from 'react';
import { ReactComponent as Insta } from '../assets/insta.svg';
export default function Footer() {
    return (
    <div className='footer pb-1'>
        <a href='https://www.instagram.com/new.nj.flag/' target='_blank' rel="noreferrer">
           <Insta/>
        </a>
    </div>
      
    )
}
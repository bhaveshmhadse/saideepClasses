import React from 'react';

import MhadseSir from '../Courses/Images/MhadseSir.jpg';
import HemantSir from '../Courses/Images/HemantSir.jpg';
import GaneshSir from '../Courses/Images/GaneshSIr.jpg';
import whatsApp from "../Courses/Images/whatsapp.png"
import DDM from './DDM';


import { useEffect } from "react"

const Owners = props => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }, [])


  let state = {
    first: [
      {
        name: 'Devanand Mhadse',
        image: MhadseSir,
        whatsappUrl: "https://wa.me/+918850326407",
        whatsapp: whatsApp,
        role: 'Chairman, Founder of SaiDeep',
        qualification: 'Devanand Mhadse/Mhadse Sir is very ambitious,and passionate person.He used to teach Students(8, 9, 10)std on Daily Basis while he was in 12th Standard. Later On with a aim to educate more students and follow his dreams he started Saideep Classes in late 1990\'s.He is specialised in Mathematics.With his Hardwork, and skills Saideep has reaced to great heights.Till date More than 25000! students has aced their carrer under guidance of Mhadse Sir',
      },
      {
        name: 'Hemant Bidwai',
        whatsappUrl: "https://wa.me/+918850326407",
        image: HemantSir,
        whatsapp: whatsApp,
        role: 'Stock Master',
        qualification: "sfjnf ll lkj  n rolkjgnsl   slib flsbf l  oihdfoih o ho hdlfjk dnfldfnlhi hl hdognd on loh po  pod hpdo fhfof jpfd poh po h ;on po p ohponf dpogdhfhpoh  hp po hgdspogh dof dh h puhfp oh oph hphdp ghsdgdhf doufdfhdfpo ophh ouph oppfoh po hgpodrg"
        // qualification: 'Devanand Mhadse/Mhadse Sir is very ambitious,and passionate person.He used to teach Students(8, 9, 10)std on Daily Basis while he was in 12th Standard. Later On with a aim to educate more students and follow his dreams he started Saideep Classes in late 1990\'s.He is specialised in Mathematics.With his Hardwork, and skills Saideep has reaced to great heights.Till date More than 25000! students has aced their carrer under guidance of Mhadse Sir',
      },
      {
        name: 'Ganesh Patil',
        whatsapp: whatsApp,
        whatsappUrl: "https://wa.me/+918850326407",
        image: GaneshSir,
        role: 'Stock Master',
        qualification: "sfjnf ll lkj  n rolkjgnsl   slib flsbf l  oihdfoih o ho hdlfjk dnfldfnlhi hl hdognd on loh po  pod hpdo fhfof jpfd poh po h ;on po p ohponf dpogdhfhpoh  hp po hgdspogh dof dh h puhfp oh oph hphdp ghsdgdhf doufdfhdfpo ophh ouph oppfoh po hgpodrg"
      },
    ],
  };

  return (
    <div className='main'>
      {state.first.map((obj, objindx) => (
        <DDM key={objindx} whatsapp={obj.whatsapp} whatsappLink={obj.whatsappUrl} name={obj.name} image={obj.image} role={obj.role} intro={obj.qualification} />
      ))}
    </div>
  );
};

export default Owners;

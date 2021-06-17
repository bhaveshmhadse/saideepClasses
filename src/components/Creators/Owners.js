import React from 'react';

import MhadseSir from '../Courses/Images/MhadseSir.jpg';
import HemantSir from '../Courses/Images/HemantSir.jpg';
import whatsApp from "../Courses/Images/whatsapp.png"
import DDM from './DDM';

const Owners = props => {
  let state = {
    first: [
      {
        name: 'Devanand Dattatray Mhadse',
        image: MhadseSir,
        whatsapp: whatsApp,
        role: 'Chairman, Founder of SaiDeep',
        qualification: 'Devanand Mhadse/Mhadse Sir is very ambitious,and passionate person.He used to teach Students(8, 9, 10)std on Daily Basis while he was in 12th Standard. Later On with a aim to educate more students and follow his dreams he started Saideep Classes in late 1990\'s.He is specialised in Mathematics.With his Hardwork, and skills Saideep has reaced to great heights.Till date More than 25000! students has aced their carrer under guidance of Mhadse Sir',
      },
      {
        name: 'Hemant Bidwai',
        image: HemantSir,
        whatsapp: whatsApp,
        role: 'Stock Master',
        qualification: 'Devanand Mhadse/Mhadse Sir is very ambitious,and passionate person.He used to teach Students(8, 9, 10)std on Daily Basis while he was in 12th Standard. Later On with a aim to educate more students and follow his dreams he started Saideep Classes in late 1990\'s.He is specialised in Mathematics.With his Hardwork, and skills Saideep has reaced to great heights.Till date More than 25000! students has aced their carrer under guidance of Mhadse Sir',
      },
      {
        name: 'Pranav Mhadse',
        whatsapp: whatsApp,
        image: MhadseSir,
        role: 'Stock Master',
        qualification: 'dfgdd',
      },
    ],
  };

  return (
    <div className='main'>
      {state.first.map((obj, objindx) => (
        <DDM key={objindx} whatsapp={obj.whatsapp} name={obj.name} image={obj.image} role={obj.role} intro={obj.qualification} />
      ))}
    </div>
  );
};

export default Owners;

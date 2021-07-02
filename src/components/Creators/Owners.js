import React from 'react';

import MhadseSir from '../Courses/Images/MhadseSir.jpg';
import HemantSir from '../Courses/Images/HemantSir.jpg';
import GaneshSir from '../Courses/Images/GaneshSIr.jpg';
import whatsApp from '../Courses/Images/whatsapp.png';
import DDM from './DDM';

import { useEffect } from 'react';

const Owners = props => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  let state = {
    first: [
      {
        name: 'Devanand Mhadse',
        image: MhadseSir,
        whatsappUrl: 'https://wa.me/+918850326407',
        whatsapp: whatsApp,
        role: 'Chairman, Founder of SaiDeep',
        qualification:
          "Devanand Mhadse/Mhadse Sir is very ambitious,and passionate person.He used to teach Students(8, 9, 10)std on Daily Basis while he was in 12th Standard. Later On with a aim to educate more students and follow his dreams he started Saideep Classes in late 1990's.He is specialised in Mathematics.With his Hardwork, and skills Saideep has reaced to great heights.Till date More than 25000! students has aced their carrer under guidance of Mhadse Sir",
      },
      {
        name: 'Hemant Bidwai',
        whatsappUrl: 'https://wa.me/+918850430042',
        image: HemantSir,
        whatsapp: whatsApp,
        role: 'Chairman, Founder of SaiDeep',
        qualification:
          'Hemant Bidwai has entered in education industry with an aim to build a bright fututre of students.His motive was not only to teach student and educate them but also to build future of students.He made each Parent realize that their Son/Daughter are capable and worthy to do anything in their life!.Across the span of 19 Years many students were developed under his hands.Heamant Sir now manages the flaws of Saideep.',
      },
      {
        name: 'Ganesh Patil',
        whatsapp: whatsApp,
        whatsappUrl: 'https://wa.me/+918850326407',
        image: GaneshSir,
        role: 'Admission Head',
        qualification:
          'Ganesh is lifelong friend of Mhadse Sir.He handles amrketing and counciling department of Saideep.With an experience of 18 Years he understands student psycology, and with his skills he motivates students.Many students has been guided by him!',
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

import React from 'react';

import './navigation-bar.css';

// The NavigationBar component goes here.  It should be the default export.

export default function NavigationBar(props){
    // const links = [{
    //     text: 'Courses',
    //     href: 'http://www.thinkful.com/courses/'
    // }, {
    //     text: 'Mentorship',
    //     href: 'http://www.thinkful.com/mentorship/'
    // }];
    
 
    const links = props.links.map(link => 
    <li>
        <a href={link.href}>
        {link.text}
        </a>
    </li>
    )
 return (
     <div className = "navigation-bar">
         <h1>{props.title}</h1>
   <nav>      
   <ul className = "navigation-bar-nav">
         {links}
         </ul>
   </nav>
     </div>
 )
}
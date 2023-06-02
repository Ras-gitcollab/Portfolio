import React from 'react';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <header style={{display:'flex', justifyContent:'space-around', alignItems:'center', backgroundColor : '#0047AB', color: "white"}}>
      <h1 style={{ fontSize: "2rem" }}>Rashika Jaggi</h1>
      <nav>
        <ul style={{display:'flex',listStyle:'none',margin: 0,padding:0, color:"white"}}>
          <li style={{ marginRight: '2rem',fontSize:'1.2rem'}}><Link to="/" style={{color:'white',textDecoration:"none"}}>About</Link></li>
          <li style={{ marginRight: '2rem',fontSize:'1.2rem' }}><Link to="/education" style={{color:'white',textDecoration:"none"}}>Education</Link></li>
          <li style={{ marginRight: '2rem',fontSize:'1.2rem' }}><Link to="/experience" style={{color:'white',textDecoration:"none"}}>Experience</Link></li>
          <li style={{ marginRight: '2rem',fontSize:'1.2rem' }}><Link to="/projects" style={{color:'white',textDecoration:"none"}}>Projects</Link></li>
          <li style={{ marginRight: '2rem',fontSize:'1.2rem' }}><Link to="/skills" style={{color:'white',textDecoration:"none"}}>Skills</Link></li>
          <li style={{ marginRight: '2rem',fontSize:'1.2rem' }}><a href='/resume.pdf' target='_blank' style={{ color: 'white', textDecoration: 'none' }}>Resume</a></li>
          <li style={{ marginRight: '2rem',fontSize:'1.2rem' }}><Link to="/contact" style={{color:'white',textDecoration:"none"}}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;

import './NavBar.css';
import { CgMusic } from 'react-icons/cg';

const NavBar = () => {
    return ( 
        <div className="navbar">
            {/* <div className="logo">
                <a href="/"><img alt="logo"  src={icon}  width="75px"/></a>
            </div> */}
            <div className="logo" style={{marginLeft:'12px'}}>
                <CgMusic style={{fontSize:'30px'}}/>
                <div style={{marginRight:'auto',marginLeft:10,fontSize:30,fontWeight:500}}>Music+</div>
            </div>
            
            <ul className="ul-list">
                <li><a href='/signup' className='nav-item-'>Register</a></li>
                <li><a href='/signin' className='nav-item-'>SignIn</a></li>
                <li><a href='/about' className='nav-item-'>About us</a></li>
            </ul>
            {/* <ul className="ul-list">
                <li><a href='/about' className='nav-item-'>About us</a></li>
                <li><a href='/help' className='nav-item-'>Help</a></li>
            </ul> */}
        </div>
     );
}
 
export default NavBar;
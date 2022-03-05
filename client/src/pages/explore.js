import ParticleBackground from '../components/ParticleBackground';
import './Explore.css';
import Sidebar from '../components/Sidebar';
import Profile from '../components/Profile';

const Explore = () => {
        return ( 
        <div className="body1">
            <ParticleBackground/>      
            <Sidebar />     
            <Profile /> 
        </div>
     );
}
 
export default Explore;
import ParticleBackground from '../components/ParticleBackground';
import './explore.css';
import Sidebar from '../components/sidebar';
import Profile from '../components/profile';

const Explore = () => {
        return ( 
        <div className="body">
            <ParticleBackground/>      
            <Sidebar />     
            <Profile /> 
        </div>
     );
}
 
export default Explore;
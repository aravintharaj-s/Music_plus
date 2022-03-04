import React from 'react';


import './sidebar.css';
import { CgMusic,CgHome,CgSearch,CgNotes,CgAddR,CgHeart,CgHeadset,CgCardHearts} from 'react-icons/cg';

function Sidebar() {
  return (
    <div className="sidebar">  
        <div className="logo" style={{margin:'52px',marginRight:'40px'}}>
            <CgMusic style={{fontSize:'40px',color:'white'}}/>
            <div style={{marginRight:'auto',marginLeft:10,fontSize:30,fontWeight:700,color:'white'}}>Music+</div>
        </div>
        <div className="content" style={{marginLeft:'12px'}}>
            <div className="item" style={{ display: 'contents',margin:'20px',marginTop:'30px' }}>
                <div className="s" style={{display: 'flex',margin: '20px',}}>
                    <CgHome style={{fontSize:'20px',color:'white'}}/>
                    <div style={{marginRight:'auto',marginLeft:10,fontSize:20,fontWeight:700,color:'white'}}><a href='' className='si'>Home</a></div>
                </div>
                <div className="s" style={{display: 'flex',margin: '20px'}}>
                    <CgSearch style={{fontSize:'20px',color:'white'}}/>
                    <div style={{marginRight:'auto',marginLeft:10,fontSize:20,fontWeight:700,color:'white'}}><a href=''  className='si'>Search</a></div>
                </div>
                <div className="s" style={{display: 'flex',margin: '20px'}}>
                    <CgHeadset style={{fontSize:'20px',color:'white'}}/>
                    <div style={{marginRight:'auto',marginLeft:10,fontSize:20,fontWeight:700,color:'white'}}><a href='' className='si'>Library</a></div>
                </div>
                <div className="s" style={{display: 'flex',margin: '20px',paddingTop:'30px'}}>
                    <CgAddR style={{fontSize:'20px',color:'white'}}/>
                    <div style={{marginRight:'auto',marginLeft:10,fontSize:20,fontWeight:700,color:'white'}}><a href='' className='si'>Create Playlist</a></div>
                </div>
                <div className="s" style={{display: 'flex',margin: '20px'}}>
                    <CgCardHearts style={{fontSize:'20px',color:'white'}}/>
                    <div style={{marginRight:'auto',marginLeft:10,fontSize:20,fontWeight:700,color:'white'}}><a href='' className='si'>Liked</a></div>
                </div>
            </div>
        </div>
        <hr style={{
            color: 'white',
            backgroundColor: 'white',
        }}/>
        <div className="playlist">
            My Playlist
        </div>
    </div>
  )
}

export default Sidebar
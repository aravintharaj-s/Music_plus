import React from 'react'
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import  errorAnimation from "../videos/404.json";
import ParticleBackground from '../components/ParticleBackground'

function Page404() {

  return (
    <>
        <ParticleBackground/>
        <div style={{maxWidth:'1400px',margin:'100px 100px'}}>
          <div class="container-fluid" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
              <div class="row" style={{display:'flex',justifyContent:'center',alignItems:'center',}}>
                  <div class="col col-md-4 col-sm-12" style={{marginRight:'70px'}}>
                    <Player
                        autoplay
                        loop
                        src="https://assets8.lottiefiles.com/packages/lf20_fa9hon4j.json"
                        style={{ height: '350px', width: '350px' }}
                        >
                    </Player>
                  </div>
                  <div class="col col-md-6 col-sm-12" style={{textAlign:'center',color:'white'}} >
                      <p style={{fontSize:'37px',width:'100%',color:'white'}} >Page Not Found</p>
                      <p style={{color:'white'}}>Check if there is a typo in <span style={{color:'violet'}}>{window.location.href}</span></p>
                  </div>
              </div>
          </div>
        </div>
    </>
  )
}

export default Page404
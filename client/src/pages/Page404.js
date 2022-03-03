import React from 'react'
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import ParticleBackground from '../components/ParticleBackground'
import './page404.css';
const Page404= ()=> {

  return (
    <>
        <ParticleBackground/>
        <div style={{maxWidth:'1400px',margin:'200px 40px'}}>
          <div class="container-fluid">
              <div class="row" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                  <div class="col col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <Player
                        autoplay
                        loop
                        src="https://assets8.lottiefiles.com/packages/lf20_fa9hon4j.json"
                        className="LottiePlayer"
                        style={{marginRight:'50px'}}
                        >
                    </Player>
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12" style={{textAlign:'center',color:'white'}} >
                      <p style={{fontSize:'24px',color:'white',width:'100%'}}>Page Not Found</p>
                      <p style={{color:'white',width:'100%'}}>Check if there is a typo in <span style={{color:'violet'}}>{window.location.href}</span></p>
                  </div>
              </div>
          </div>
        </div>
    </>
  )
}

export default Page404
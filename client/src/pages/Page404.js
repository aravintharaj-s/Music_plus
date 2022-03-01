import React from 'react'
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import  errorAnimation from "../videos/404.json";
import ParticleBackground from '../components/ParticleBackground'

function Page404() {

  return (
    <>
        <ParticleBackground/>
        <div style={{maxWidth:'1400px',margin:'100px 100px'}}>
          <div class="container-fluid" >
              <div class="row" style={{display:'flex',justifyContent:'center',alignItems:'center',margin:'auto'}}>
                  <div class="col col-md-4 col-sm-12" style={{marginRight:'50px'}}>
                    <Player
                        autoplay
                        loop
                        src="https://assets8.lottiefiles.com/packages/lf20_fa9hon4j.json"
                        style={{ height: '350px', width: '350px' }}
                        >
                    </Player>
                  </div>
                  <div class="col col-md-6 col-sm-12" style={{textAlign:'center',background:'red'}} >
                      <p style={{fontSize:'45px',width:'100%'}} >Page Not Found</p>
                      <p>Check if there is a typo</p>
                  </div>
              </div>
          </div>
        </div>
    </>
  )
}

export default Page404
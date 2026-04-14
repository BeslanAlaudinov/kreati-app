import LightRays from './components/LightRays'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import './index.css'
import styles from './App.module.css'

export default function App() {
  return (
    <div className={styles.root}>
      <div style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
        <LightRays
          raysOrigin="top-center"
          raysColor="#9c66ff"
          raysSpeed={1}
          lightSpread={1}
          rayLength={2}
          pulsating={false}
          fadeDistance={1}
          saturation={1}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0}
          distortion={0}
        />
      </div>
      <Navbar />
      <Hero />
    </div>
  )
}
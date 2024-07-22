import React from 'react'
import { CanvasRevealEffectDemo } from './Components/Hero/Hero1';
import { HeroScrollDemo } from './Components/Hero/Hero2';
import { FlipWordsDemo } from './Components/Hero/IntroHero';
import { GoogleGeminiEffectDemo } from './Components/Hero/GeminiEffect';
import { LampDemo} from './Components/Hero/LampHero';
import { StickyScrollRevealDemo } from './Components/Hero/ExpHero';
import { HeroParallaxDemo } from './Components/Hero/ParallaxTech';
import { VortexDemo } from './Components/Hero/VortexHero';
import { ProjectCardsDemo } from './Components/Hero/Projects';
import { AnimatedPinDemo } from './Components/Hero/ProfileHero';
import { TextGenerateEffectDemo } from './Components/Hero/AutoTextHero';

const App = () => {
  return (
    <>
    
    
    <HeroScrollDemo/>
    <GoogleGeminiEffectDemo/>
    <LampDemo/>
    
    <StickyScrollRevealDemo/>
    <HeroParallaxDemo/>
    <VortexDemo/>
    <ProjectCardsDemo/>
    <AnimatedPinDemo/>
    <TextGenerateEffectDemo/>
    </>
  )
}

export default App

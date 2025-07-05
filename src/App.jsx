import React from 'react'
import { HeroScrollDemo } from './Components/Hero/Hero2';
import { FlipWordsDemo } from './Components/Hero/IntroHero';
import { GoogleGeminiEffectDemo } from './Components/Hero/GeminiEffect';
import { LampDemo} from './Components/Hero/LampHero';
import { TracingBeamDemo } from './Components/Hero/ExpHero';
import { HeroParallaxDemo } from './Components/Hero/ParallaxTech';
import { VortexDemo } from './Components/Hero/VortexHero';
import { ProjectCardsDemo } from './Components/Hero/Projects';
import { AnimatedPinDemo } from './Components/Hero/ProfileHero';
import { TextGenerateEffectDemo } from './Components/Hero/AutoTextHero';
import {Feedback}  from './Components/Hero/QnA';
import AboutMeSection from './Components/Hero/Aboutme';

const App = () => {
  return (
    <>
    <HeroScrollDemo/>
    <GoogleGeminiEffectDemo/>
    <LampDemo/>
    <AboutMeSection/>
    <HeroParallaxDemo/>
    <VortexDemo/>
    <ProjectCardsDemo/>
    <AnimatedPinDemo/>
    <Feedback/>
    <TextGenerateEffectDemo/>
    </>
  )
}

export default App

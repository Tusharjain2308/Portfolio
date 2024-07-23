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
import { PlaceholdersAndVanishInputDemo } from './Components/Hero/QnA';

const App = () => {
  return (
    <>
    <HeroScrollDemo/>
    <GoogleGeminiEffectDemo/>
    <LampDemo/>
    <TracingBeamDemo/>
    <HeroParallaxDemo/>
    <VortexDemo/>
    <ProjectCardsDemo/>
    <AnimatedPinDemo/>
    <PlaceholdersAndVanishInputDemo/>
    <TextGenerateEffectDemo/>
    </>
  )
}

export default App

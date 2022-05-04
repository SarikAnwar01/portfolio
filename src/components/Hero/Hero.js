import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal PortFolio
      </SectionTitle>
      <SectionText center>
        I am a full-stack web developer with a passion for creating beautiful, responsive websites.
      </SectionText>
      <Button onClick={() => { window.location = "mailto:sarikanwar007@gmail.com" }}>Learn More</Button>
    </LeftSection>

  </Section>
);

export default Hero;
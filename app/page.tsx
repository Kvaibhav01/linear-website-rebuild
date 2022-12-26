import { Button, IconWrapper } from '../components/button';
import { Clients } from '../components/clients';
import { Container } from '../components/container';
import { Hero, HeroSubtitle, HeroTitle } from '../components/hero';
import { HeroImage } from '../components/hero-image';
import { ChevronIcon } from '../components/icons/chevron';

export default function Homepage() {
  return (
    <>
      <div className='overflow-hidden pb-[16.4rem] md:pb-[25.6rem]'>
        <Container className='pt-[6.4rem]'>
          <Hero>
            <Button
              className='animate-fade-in opacity-0 translate-y-[-1rem]'
              href='/'
              variant='secondary'
              size='small'
            >
              Linear 2022 Release - Built for scale <IconWrapper>→</IconWrapper>
            </Button>
            <HeroTitle className='translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]'>
              Linear is a better way
              <br className='hidden md:block' /> to build products
            </HeroTitle>
            <HeroSubtitle className='translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]'>
              Meet the new standard for modern software development.
              <br className='hidden md:block' /> Streamline issues, sprints, and
              product roadmaps.
            </HeroSubtitle>
            <Button
              className='translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]'
              href='/'
              variant='primary'
              size='large'
            >
              Get Started{' '}
              <IconWrapper>
                <ChevronIcon />
              </IconWrapper>
            </Button>
            <HeroImage />
          </Hero>
        </Container>
      </div>
      <Container>
        <Clients />
      </Container>
    </>
  );
}

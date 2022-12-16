export const HeroImage = () => {
  return (
    //TODO: Check for overflow hidden property here
    <div className='[perspective:2000px] overflow-hidden mt-[12.8rem]'>
      <div className='bg-hero-gradient bg-white bg-opacity-[0.01] rounded-lg [transform:rotateX(25deg)] border border-transparent-white'>
        <img src='/img/hero.webp' alt='Hero image' className='' />
      </div>
    </div>
  );
};

interface HeroProps {
  title: string;
  subtitle: string;
}

export const Hero = ({ title, subtitle }: HeroProps) => {
  return (
    <div>
      <h1 className='text-5xl'>{title}</h1>
      <p className='text-lg'>{subtitle}</p>
    </div>
  );
};

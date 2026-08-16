import SplitReveal from './SplitReveal';

type SectionHeaderProps = {
  kicker: string;
  title: string;
  as?: 'h1' | 'h2';
};

export default function SectionHeader({ kicker, title, as = 'h2' }: SectionHeaderProps) {
  return (
    <>
      <p className="font-mono text-xs uppercase tracking-[0.28em] text-signal">{kicker}</p>
      <SplitReveal
        as={as}
        text={title}
        className={`mt-3 max-w-2xl tracking-tight ${
          as === 'h1' ? 'text-4xl sm:text-5xl' : 'text-3xl sm:text-4xl'
        }`}
      />
    </>
  );
}

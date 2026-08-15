import SplitReveal from './SplitReveal';

type SectionHeaderProps = {
  kicker: string;
  title: string;
};

export default function SectionHeader({ kicker, title }: SectionHeaderProps) {
  return (
    <>
      <p className="font-mono text-xs uppercase tracking-[0.28em] text-signal">{kicker}</p>
      <SplitReveal
        as="h2"
        text={title}
        className="mt-3 max-w-2xl text-3xl tracking-tight sm:text-4xl"
      />
    </>
  );
}

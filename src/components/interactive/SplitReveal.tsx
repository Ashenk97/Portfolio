import { motion, useReducedMotion } from 'framer-motion';

type Tag = 'h1' | 'h2' | 'p';

type SplitRevealProps = {
  as?: Tag;
  text: string;
  className?: string;
  delay?: number;
};

export default function SplitReveal({
  as: Tag = 'h2',
  text,
  className = '',
  delay = 0,
}: SplitRevealProps) {
  const reduceMotion = useReducedMotion();
  const words = text.split(' ');

  return (
    <Tag className={className}>
      {words.map((word, index) => (
        <span key={`${word}-${index}`}>
          <span className="inline-block align-bottom">
            <motion.span
              className="inline-block"
      initial={reduceMotion ? false : { y: 18, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.55,
                delay: delay + index * 0.045,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {word}
            </motion.span>
          </span>
          {index < words.length - 1 ? ' ' : ''}
        </span>
      ))}
    </Tag>
  );
}

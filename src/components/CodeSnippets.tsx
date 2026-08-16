import { useState, type ReactNode } from 'react';
import { codeSnippets, type CodeSnippet } from '../data/content';

const TOKEN =
  /(\/\/.*$)|('(?:\\'|[^'])*'|`(?:\\`|[^`])*`)|(\b(?:import|from|export|const|async|await|function|return|class|extends|new|type|private|readonly|if|else|of)\b)|(\b(?:Page|Portfolio|string|number|boolean)\b)/g;

function highlightTs(line: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let last = 0;

  for (const match of line.matchAll(TOKEN)) {
    const index = match.index ?? 0;
    if (index > last) nodes.push(line.slice(last, index));

    const [full, comment, string, keyword, typeName] = match;
    if (comment) {
      nodes.push(
        <span key={index} className="text-mist/55">
          {comment}
        </span>,
      );
    } else if (string) {
      nodes.push(
        <span key={index} className="text-signal">
          {string}
        </span>,
      );
    } else if (keyword) {
      nodes.push(
        <span key={index} className="text-ember">
          {keyword}
        </span>,
      );
    } else if (typeName) {
      nodes.push(
        <span key={index} className="text-signal/80">
          {typeName}
        </span>,
      );
    } else {
      nodes.push(full);
    }

    last = index + full.length;
  }

  if (last < line.length) nodes.push(line.slice(last));
  return nodes;
}

function highlightYml(line: string): ReactNode {
  const trimmed = line.trimStart();
  if (trimmed.startsWith('#')) {
    return <span className="text-mist/55">{line}</span>;
  }

  const commentIndex = line.indexOf(' #');
  const code = commentIndex >= 0 ? line.slice(0, commentIndex) : line;
  const comment = commentIndex >= 0 ? line.slice(commentIndex) : '';
  const keyMatch = code.match(/^(\s*)([\w-]+)(:)(.*)$/);

  if (!keyMatch) {
    return (
      <>
        <span className="text-signal">{code}</span>
        {comment ? <span className="text-mist/55">{comment}</span> : null}
      </>
    );
  }

  return (
    <>
      {keyMatch[1]}
      <span className="text-ember">{keyMatch[2]}</span>
      <span className="text-mist">{keyMatch[3]}</span>
      <span className="text-signal">{keyMatch[4]}</span>
      {comment ? <span className="text-mist/55">{comment}</span> : null}
    </>
  );
}

function CodeBlock({ snippet }: { snippet: CodeSnippet }) {
  const lines = snippet.code.replace(/\n$/, '').split('\n');

  return (
    <pre className="overflow-x-auto bg-void p-4 font-mono text-[11px] leading-6 text-paper/90 sm:p-5">
      {lines.map((line, index) => (
        <div key={`${snippet.id}-${index}`}>
          <span className="me-4 select-none text-line">{String(index + 1).padStart(2, '0')}</span>
          {snippet.language === 'yml' ? highlightYml(line) : highlightTs(line)}
          {line.length === 0 ? ' ' : null}
        </div>
      ))}
    </pre>
  );
}

export default function CodeSnippets() {
  const [activeId, setActiveId] = useState(codeSnippets[0].id);
  const active = codeSnippets.find((snippet) => snippet.id === activeId) ?? codeSnippets[0];

  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-panel shadow-[0_0_0_1px_rgb(62_224_197_/_0.08)]">
      <div className="flex flex-wrap items-center gap-2 border-b border-line px-3 py-2 sm:px-4">
        {codeSnippets.map((snippet) => {
          const selected = snippet.id === active.id;
          return (
            <button
              key={snippet.id}
              type="button"
              onClick={() => setActiveId(snippet.id)}
              className={`rounded-full px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] transition ${
                selected
                  ? 'bg-signal/15 text-signal'
                  : 'text-mist hover:bg-ink hover:text-paper'
              }`}
            >
              {snippet.label}
            </button>
          );
        })}
        <p className="ms-auto hidden font-mono text-[11px] text-mist sm:block">{active.fileName}</p>
      </div>
      <CodeBlock snippet={active} />
      <p className="border-t border-line px-4 py-3 text-sm leading-relaxed text-mist">
        {active.caption}
      </p>
    </div>
  );
}

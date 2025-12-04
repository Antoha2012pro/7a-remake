import React from 'react';
import { createRoot } from 'react-dom/client';
import TextCursor from '../jsx/TextCursor.jsx';
import TextType from '../jsx/TextType.jsx';

const rootEl = document.getElementById('cursor-root');
const rootTextTypeEl = document.getElementById('texttype-root');
const heroRootTextTypeEl = document.getElementById('hero-title');

if (rootEl) {
  createRoot(rootEl).render(
    <TextCursor
      text="❄"
      delay={0.01}
      spacing={150}
      followMouseDirection
      randomFloat
      exitDuration={0.3}
      removalInterval={20}
      maxPoints={10}
    />
  );
}

// Если нужен отдельный тайпер где-то ещё — можно использовать rootTextTypeEl
// if (rootTextTypeEl) {
//   createRoot(rootTextTypeEl).render(
//     <TextType
//       text={['Some text', 'Another text']}
//       typingSpeed={75}
//       pauseDuration={1500}
//       showCursor={true}
//       cursorCharacter="|"
//     />
//   );
// }

if (heroRootTextTypeEl) {
  createRoot(heroRootTextTypeEl).render(
    <TextType
      text={[
        'Gemein\u00ADsam in der 7A',
        'Will\u00ADkom\u00ADmen in der Klasse 7A',
        'Die 7A stellt sich vor',
        'Willkommen bei uns, der 7A',
        'Lernen in der Klasse 7A',
        '7A an der Petrischule',
      ]}
      typingSpeed={150}
      pauseDuration={3000}
      showCursor={true}
      cursorCharacter="_"
      // 🔑 слово, которое нужно выделить спаном
      highlightWord="7A"
      highlightClassName="hero__title-span"
    />
  );
}

console.log('cursor-root:', !!rootEl, 'texttype-root:', !!rootTextTypeEl);

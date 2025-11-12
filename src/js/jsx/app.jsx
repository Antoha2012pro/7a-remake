import React from 'react';
import { createRoot } from 'react-dom/client';
import TextCursor from '../jsx/TextCursor.jsx';
import TextType from '../jsx/TextType.jsx';

const rootEl = document.getElementById('cursor-root');
const rootTextTypeEl = document.getElementById('texttype-root');

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

if (rootTextTypeEl) {
  createRoot(rootTextTypeEl).render(
      <TextType 
        text={["Text typing effect", "for your websites", "Happy coding!"]}
        typingSpeed={75}
        pauseDuration={1500}
        showCursor={true}
        cursorCharacter="|"
      />
  );
}

console.log('cursor-root:', !!rootEl, 'texttype-root:', !!rootTextTypeEl);

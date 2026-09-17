/**
 * letterFx.js - Reusable letter-based typography motion utility
 * Wraps individual letters in span elements and applies organic, randomized
 * micro-movement, skew, and subtle blur keyframe effects.
 */

export function wrapLetters(containerElement, className = 'fx-char') {
  if (!containerElement) return [];

  const text = containerElement.textContent || '';
  containerElement.innerHTML = '';
  const charSpans = [];

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const span = document.createElement('span');
    span.className = className;
    span.textContent = char;

    if (char === ' ') {
      span.style.display = 'inline';
      span.style.whiteSpace = 'pre';
    } else {
      span.style.display = 'inline-block';
      span.style.willChange = 'transform, filter, opacity';
    }

    containerElement.appendChild(span);
    charSpans.push(span);
  }

  return charSpans;
}

export function animateLetters(charElements, options = {}) {
  if (!charElements || !charElements.length) return () => {};

  const {
    duration = 4000,
    maxTranslate = 3,
    maxSkew = 4,
    maxBlur = 1,
    staggerDelay = 60,
  } = options;

  const animations = [];

  charElements.forEach((charEl, idx) => {
    if (charEl.textContent === ' ') return;

    const randomX1 = (Math.random() - 0.5) * maxTranslate * 2;
    const randomY1 = (Math.random() - 0.5) * maxTranslate * 2;
    const randomX2 = (Math.random() - 0.5) * maxTranslate * 2;
    const randomY2 = (Math.random() - 0.5) * maxTranslate * 2;
    const randomSkew = (Math.random() - 0.5) * maxSkew * 2;
    const randomDuration = duration + (Math.random() - 0.5) * 1500;

    const keyframes = [
      {
        transform: 'translate(0px, 0px) skew(0deg)',
        filter: 'blur(0px)',
      },
      {
        transform: `translate(${randomX1.toFixed(1)}px, ${randomY1.toFixed(1)}px) skew(${randomSkew.toFixed(1)}deg)`,
        filter: `blur(${(Math.random() * maxBlur).toFixed(1)}px)`,
        offset: 0.5,
      },
      {
        transform: `translate(${randomX2.toFixed(1)}px, ${randomY2.toFixed(1)}px) skew(${(-randomSkew).toFixed(1)}deg)`,
        filter: 'blur(0px)',
      },
    ];

    const animation = charEl.animate(keyframes, {
      duration: randomDuration,
      delay: idx * staggerDelay,
      iterations: Infinity,
      direction: 'alternate',
      easing: 'ease-in-out',
    });

    animations.push(animation);
  });

  return () => {
    animations.forEach((anim) => {
      try {
        anim.cancel();
      } catch {
        // Safe ignore on already destroyed element
      }
    });
  };
}

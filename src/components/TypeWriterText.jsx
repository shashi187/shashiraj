import React, { useEffect, useState } from 'react';

const TypewriterText = ({ words, typingSpeed = 150, deletingSpeed = 75, delay = 2000 }) => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];

    let typeTimeout;

    if (isDeleting) {
      typeTimeout = setTimeout(() => {
        setText((prev) => prev.slice(0, -1));
      }, deletingSpeed);
    } else {
      typeTimeout = setTimeout(() => {
        setText((prev) => currentWord.slice(0, prev.length + 1));
      }, typingSpeed);
    }

    if (!isDeleting && text === currentWord) {
      setTimeout(() => setIsDeleting(true), delay);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(typeTimeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, delay]);

  return (
    <span className="font-bold text-[10vw] md:text-[7vw] text-blue-600">
      {text}
      <span className="animate-blink">|</span>
    </span>
  );
};

export default TypewriterText;

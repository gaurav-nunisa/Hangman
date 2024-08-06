import React from 'react';
type HangmanWordProps = {
    guessedLetters: string[];
    wordToGuess: string
}

export function HangmanWord({guessedLetters, wordToGuess
}: HangmanWordProps) {

    return (
        <div className="flex gap-[1.5rem] text-[4rem] font-bold uppercase font-mono">
            {wordToGuess.split("").map((letter, index) => (
                <span key={index} className=" border-b-4 border-black">
                      <span className={`${guessedLetters.includes(letter) ? "visible" : "invisible"}`}>
                        {letter}
                    </span>
                </span>
            ))}
        </div>
    );
}

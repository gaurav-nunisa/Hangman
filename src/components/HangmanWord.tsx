import React from 'react';

export function HangmanWord() {
    const word = "test";
    const guessedLetters: string[] = ["t", 
        'e', "s", "t"
    ];

    return (
        <div className="flex gap-[1.5rem] text-[4rem] font-bold uppercase font-mono">
            {word.split("").map((letter, index) => (
                <span key={index} className=" border-b-4 border-black">
                      <span className={`${guessedLetters.includes(letter) ? "visible" : "invisible"}`}>
                        {letter}
                    </span>
                </span>
            ))}
        </div>
    );
}

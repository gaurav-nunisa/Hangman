import { useState } from 'react';
import './App.css';
import wordsList from "./actual_words.json";
import { HangmanDrawing } from './components/HangmanDrawing';
import { HangmanWord } from './components/HangmanWord';
import { KeyBoard } from './components/KeyBoard';

type WordList = string[];
function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return wordsList[Math.floor(Math.random() * wordsList.length)];
  });
  
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const incorrectLetters = guessedLetters.filter(letter => !wordToGuess.includes(letter));
  console.log('Current word to guess:', wordToGuess);
  
  return (
    <>
      <div className='mw-[800px] flex flex-col gap-[1rem] m-auto items-center text-center'>
        <div className=''>Win lose</div>
        <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
        <HangmanWord wordToGuess={wordToGuess} guessedLetters={guessedLetters} />
        <div className='self-stretch'>
          <KeyBoard />
        </div>
      </div>
    </>
  );
}

export default App;

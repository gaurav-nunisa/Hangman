import { useState } from 'react'
import './App.css'
import words from "./actual_words.json"
import { HangmanDrawing } from './components/HangmanDrawing'
import { HangmanWord } from './components/HangmanWord'
import { KeyBoard } from './components/KeyBoard'

type WordList = {
  [key: number]: string;
}

const wordsList: WordList = words;

function App() {
  const [wordToGuess, setWordToGuess] = useState(()=>{
    return wordsList[Math.floor(Math.random() * Object.keys(wordsList).length)];
  })
  const [gussedLetters, setGussedLetters] = useState<string[]>([])
  
  return (
    <>
    <div className='mw-[800px] flex flex-col gap-[1rem] m-auto items-center bg-red-500 text-center '>
      <div className='bg-pink-400'>Win lose</div>
      <HangmanDrawing />
      <HangmanWord/>
      <KeyBoard/>

    </div>
    </> 
  )
}
export default App

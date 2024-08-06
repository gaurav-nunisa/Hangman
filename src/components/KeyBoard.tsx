import React from 'react';
import styles from "./keyboard.module.css"
export function KeyBoard() {
  const KEYS: string[] = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", 
    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
  ];

  return (
    <div className="grid grid-cols-auto-fit-75px gap-[.5rem]">
      {KEYS.map((key) => (
        <button key={key} className={`${styles.btn} p-2 border rounded self-stretch` }>{key}</button>
      ))}
    </div>
  );
}


"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (timeLeft === 0) {
      setGameOver(true);
      return;
    }

    if (!gameOver) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [timeLeft, gameOver]);

  const handleClick = () => {
    if (!gameOver) {
      setScore(score + 1);
    }
  };

  const restartGame = () => {
    setScore(0);
    setTimeLeft(10);
    setGameOver(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-zinc-900 to-purple-900 text-white">
      <main className="bg-zinc-950 rounded-3xl p-10 w-full max-w-md text-center shadow-2xl border border-white/10">
        
        <h1 className="text-4xl font-extrabold mb-4">
          🎮 Click Master
        </h1>

        <p className="text-zinc-400 mb-6">
          Haz tantos clicks como puedas antes de que el tiempo termine
        </p>

        <div className="flex justify-between mb-6 text-lg">
          <span>⏱️ Tiempo: {timeLeft}</span>
          <span>⭐ Puntos: {score}</span>
        </div>

        {!gameOver ? (
          <button
            onClick={handleClick}
            className="w-full py-6 rounded-2xl text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105 transition-transform"
          >
            CLICK AQUÍ 💥
          </button>
        ) : (
          <div>
            <p className="text-2xl font-bold mb-4">
              🏆 Game Over
            </p>
            <p className="mb-6 text-zinc-300">
              Puntuación final: <span className="font-bold">{score}</span>
            </p>
            <button
              onClick={restartGame}
              className="px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-zinc-200"
            >
              Jugar otra vez 🔄
            </button>
          </div>
        )}
      </main>
    </div>
  );
}

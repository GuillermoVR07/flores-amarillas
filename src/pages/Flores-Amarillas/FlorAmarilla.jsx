import React from 'react'
import './FlorAmarilla.css'
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

const FlorAmarilla = () => {
  return (
    <>
      <Link to="/florcita"></Link>

      <div className="h-screen grid place-items-center bg-violet-500">
        <div className="text-3xl font-bold text-yellow-500 bg-amber-900 px-3 flex items-center justify-center">
          UNA FLOR AMARILLA PARA OTRA FLOR HERMOSA
          <Heart className="px-2 text-red-500 w-12 h-12 fill-current" />
        </div>


        <div className="relative w-96 h-96 bg-violet-500 grid place-items-center">
          <div className="w-12 h-12 animate-giro">
            {[...Array(16)].map((_, i) => (
              <div
                key={i}
                className={`absolute z-10 w-12 h-12 bg-yellow-500 rounded-[2px_50px] opacity-80 shadow-[inset_-5px_-5px_2px_rgba(0,0,0,0.051)]`}
                style={{ transform: `rotate(${i * 22.5}deg) translate(-35px, -35px) scale(2)` }}
              ></div>
            ))}
            <div className="absolute z-20 w-12 h-12 bg-amber-950 rounded-full animate-dot"></div>
          </div>
        </div>

      </div>
    </>
  );
};

export default FlorAmarilla;
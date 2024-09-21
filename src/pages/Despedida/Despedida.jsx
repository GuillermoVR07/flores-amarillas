import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

const Despedida = () => {
    return (
        <>
      <Link to="/despedida"></Link>
      <div className="p-6 mx-auto bg-white rounded-xl shadow-md space-y-4">
        <div className="text-xl font-bold text-gray-900">
          FELIZ PRIMAVERA MI DIOSA PERFECTA
          <Heart className="px-2 text-red-500 w-12 h-12 fill-current" />
        </div>
        <div className="text-sm text-gray-500">
          21 de Septiembre del 2024 - GUILLERMO VACA ROCA
        </div>
        <div className="text-base text-gray-700">
         Bueno, esto es lo ultimo para acabar con esto :C no me digas nada sobre lo que te dije y no debia decirtelo pero es la unica manera para decirte lo que tengo ganas de decirlo u.u
         en si espero te haya gustado :C quizas es diferente a lo de año pasado T.T y hasta la flor del año pasado estaba mas bonito aaaaa y hasta con musica y esta vez no T.T
         lo sientoooooo u.u trate de acabarlo aaaaa pero con que te guste estoy feliz :,D aunque tambien estoy feliz de haberte conocido, mirado, hablado, besado y compartido tambien, obiviamente tambien por ser mi bff jajaja
         eres increible mi chica lindo y no lo dejaras de serlo, tienes mis mas infinitos te quieros para tí nomas, eres todo lo perfecto del universo
         dame de nuevo un abrazo que lo necesito jajajajaja es lo mas lindo que recibo en el mes 
         cualquier cosa me mandas mensajito jeje ¿ esta bien mi reina ? o hay algo que no le gusto ? estoy dispuesto a lo que sea que me diga usted, escucho comentarios jiji
         te leo dentro de un par de horas mi vida, loviuuuuuu
        </div>
        <div className="text-sm text-gray-500">
          <br/>
          PD: TENGO SUEÑOOOOOOOOOOOOOOOOO YA SON 7:33am XD
        </div>
      </div>
    </>
  )
}
export default Despedida;

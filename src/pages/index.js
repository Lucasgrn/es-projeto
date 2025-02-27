import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Modifica.module.css"

export default function Home() {
  return (
   
 
    <div className="h-screen bg-gray-300">
        {/* NavBar - Componente - 1 */}
        <div className="  flex justify-between">
          <div >
            <div className="flex  ml-40 mt-8">
              <Image src="/icons.png" width={50} height={50} alt="Logo" />
              <h1 className="text-5xl text-gray-700 font-bold">
                LocateMe
              </h1>
            </div>
          </div>
          <div>
            <Image src="/circle.png" width={150} height={150} alt="Hero" />
          </div>
        </div>
        {/* /NavBar */}

        {/* Section */}
        <div className="container  md-auto ">
          <div className="flex space-x-28">
            {/* Image */}
            <div className="flex-shrink -mt-16">
              <Image
                src="/Ilustracao.png"
                width={500}
                height={500}
                alt="ilustração"
              />
            </div>

            {/* Text and checkout login */}
            <div className=" space-y-6">
              <h1 className="text-gray-700  font-bold text-4xl ">
              Não perca mais tempo<br/>  procurando, o LocateMe<br/>  está aqui para ajudar!
              </h1>
              <p className="text-gray-500  text-base">
              São Longuinho, São longuinho, se eu achar o que <br/> perdi prometo uma vela acender no seu caminho.
              </p>

              <div className="flex flex-col md:flex-row">
              <Link href="./authi/signInPage">
                <button className="inline-block mb-4 md:mb-0 md:mr-4 px-6 py-3 text-xl font-bold text-gray-700 border rounded-lg bg-blue-400 border-teal-600 hover:bg-gray-300 ">
                  Entrar
                </button>
              </Link>
              <Link href="./authi/signupPage">
                <button className="inline-block px-6 py-3 text-xl font-bold text-gray-700 border rounded-lg bg-blue-400 border-teal-600 hover:bg-gray-300 hover:bg-white">
                  Criar perfil
                </button>
              </Link>
            </div>
            </div>
          </div>
        </div>
        {/* /Section */}
      </div>
  );
}

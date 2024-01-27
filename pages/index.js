  import Image from "next/image";
  import { Inter } from "next/font/google";

  const inter = Inter({ subsets: ["latin"] });

  export default function Home() {
    return (
      <main>
        <div className="container">
        <h1 className="heading">Hello Rahul</h1>
        
        <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <br></br>
        <button className="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
        Lets GO
        </button>
        </div>
      </main>
    );
  }

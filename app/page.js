import Image from "next/image"
import notFoundImage from "@/public/img/Scarecrow.png"

export default function Home() {
  return (
    <main className="text-[#333333] h-screen flex flex-col justify-between pt-10 px-8 sm:px-20 pb-6">
      <header className="uppercase font-bold pb-10 lg:pb-0 flex justify-center lg:justify-start"> 
        <p>404 not found</p>
      </header>

      <article className="flex flex-col gap-4 lg:flex-row">
        <section className="flex justify-center lg:w-1/2">
          <Image
            src={notFoundImage}
            width={500}
            height={100}
            alt="404 image"
            className="lg:max-w-md "
          />
        </section>

        <section className="lg:w-1/2 flex flex-col lg:justify-around lg:items-start gap-y-7">
          <h1 className="font-bold text-2xl sm:text-4xl lg:text-6xl lg:max-w-xl"> I have bad news for you </h1>
          <p className="font-normal text-base sm:text-xl lg:text-2xl lg:max-w-sm"> The page you are looking for might be removed or is temporary unavailable </p>
          <button className="font-bold self-center lg:self-start text-[12px] sm:text-xs lg:text-sm uppercase bg-[#333333] text-white px-8 py-4 lg:px-11 lg:py-6"> back to homepage </button>
        </section>
      </article>

      <footer className="font-montserrat text-[12px] sm:text-base font-medium text-[#BDBDBD] text-center">
        <p>created by <span className="font-bold underline"> Erika</span> · devChallenges.io</p>
      </footer>
    </main>
  );
};
import Image from "next/image"

export default function Home() {

  let nombre = "Erika Quinteros"

  return (
    <>
      <header className="uppercase font-bold pt-10 pl-20"> 404 not found </header>

      <main className="flex flex-col lg:flex-row">
        <section className="w-1/2 flex justify-center">
          <Image
            src="/../public/img/Scarecrow.png"
            width={500}
            height={500}
            alt="404 image"
            className="lg:w-[500px] "
          />
        </section>

        <section className="w-1/2 flex flex-col justify-around items-start">
          <h1 className="font-bold text-6xl w-1/2"> I have bad news for you </h1>
          <p className="font-normal text-2xl w-1/2"> The page you are looking for might be removed or is temporary unavailable </p>
          <button className="font-bold text-sm uppercase bg-[#333333] text-white px-11 py-6"> back to homepage </button>
        </section>
      </main>

      <footer className="font-montserrat font-medium text-[#BDBDBD] text-center pb-6"> created by <span className="font-bold underline">Erika</span> · devChallenges.io </footer>
    </>
  );
};
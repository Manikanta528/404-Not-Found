import Scarecrow from "./assets/Scarecrow.png";

function App() {
  return (
    <div className="h-screen">
      <header className="font-Inconsolata font-bold text-2xl uppercase tracking-tighter ml-10 my-4 md:ml-20 md:my-10 ">
        404 Not Found
      </header>
      <div className="flex flex-wrap gap-8 justify-center md:flex md:flex-nowrap items-center sm:justify-center md:justify-between m-10 md:m-20">
        <img
          src={Scarecrow}
          className=" w-80 md:w-[540px] md:h-[440px] "
          alt="notFoundLogo"
        />
        <main className="flex flex-col items-center sm:items-start gap-8 md:p-12">
          <h1 className="font-SpaceMono font-bold text-xl text-center sm:text-start md:text-4xl w-52 md:w-96">
            I have bad news for you
          </h1>
          <p className="font-SpaceMono font-normal text-sm text-center sm:text-start md:text-2xl w-52 md:w-96">
            The page you are looking for might be removed or is temporarily
            unavailable
          </p>
          <div>
            <button className="uppercase px-4 py-3 md:px-12 md:py-6 bg-black text-white font-SpaceMono font-bold text-xs md:text-sm">
              Back to HomePage
            </button>
          </div>
        </main>
      </div>
      <footer className="fixed bottom-2 w-full ">
        <center className="text-[#BDBDBD] text-xs sm:text-sm ">
          created by{" "}
          <a href="https://github.com/Manikanta528" className="underline">
            Manikanta528
          </a>{" "}
          -{" "}
          <a href="https://devchallenges.io/" className="underline">
            devChallenges.io
          </a>
        </center>
      </footer>
    </div>
  );
}

export default App;

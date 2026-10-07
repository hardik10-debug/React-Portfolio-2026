import Button from "./Button";

const AIWelcome = ({ onEnter }) => {
  return (
    <div className="min-h-screen bg-[#09090B] text-[#A1A1AA] flex items-center justify-center px-6">

      <div className="w-full max-w-3xl text-center">

        {/* Logo */}
        <div className="inline-flex items-center justify-center font-bold text-3xl bg-[#18181B] text-[#22C55E] px-10 py-7 rounded-2xl border border-zinc-800 shadow-lg">
          &lt;HC /&gt;
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold mt-8 text-white">
          Hardik's Portfolio
        </h1>

        {/* Description */}
        <p className="text-lg mt-5 text-[#A1A1AA] max-w-xl mx-auto leading-relaxed">
          I know everything about Hardik's skills,
          projects, experience and achievements.
        </p>

        {/* Button */}
        <div className="flex justify-center mt-8">
          <Button
            onClick={onEnter}
            className="rounded-full bg-[#22C55E] text-[#09090B] hover:bg-green-400 px-8 py-4"
          >
            Let's Begin
          </Button>
        </div>

      </div>

    </div>
  );
};

export default AIWelcome;
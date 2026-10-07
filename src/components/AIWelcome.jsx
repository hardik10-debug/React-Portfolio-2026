import Button from './Button';

const AIWelcome = ({ onEnter }) => {
  return (
    <div className="h-screen bg-slate-900 text-slate-50 flex justify-center items-center flex-col gap-4">
      
      <div className="w-full max-w-150 text-center">

        <div className="font-bold text-3xl flex mx-auto w-fit bg-slate-900 text-blue-400 px-10 py-10">
           &lt;HC /&gt;
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mt-6 text-slate-50">
          Hardik's Portfolio
        </h1>

        {/* Description */}
        <p className="text-lg mt-5 text-slate-400 max-w-xl mx-auto">
          I know everything about Hardik's skills,
          projects, experience and achievements.
        </p>

        <div className="flex justify-center gap-4 mt-8">
          
          
<Button
  onClick={onEnter}
  className="rounded-full bg-blue-500 text-slate-950 hover:bg-cyan-500"
>
  Let's Begin
</Button>

          {/* <button
            onClick={onEnter}
            className="font-bold rounded-full bg-transparent border border-gray-400 px-8 py-5 cursor-pointer active:scale-95"
          >
            Skip
          </button> */}

        </div>

      </div>

    </div>
  );
};

export default AIWelcome;
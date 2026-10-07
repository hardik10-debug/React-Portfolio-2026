import React, { useEffect, useRef, useState } from "react";
import terminalCommands from "../data/terminalCommands";

const DeveloperCard = () => {
  const [history, setHistory] = useState([]);
  const [commandIndex, setCommandIndex] = useState(0);
  const [typedCommand, setTypedCommand] = useState("");

  const terminalRef = useRef(null);

 useEffect(() => {
  if (terminalRef.current) {
    terminalRef.current.scrollTo({
      top: terminalRef.current.scrollHeight,
      behavior: "smooth",
    });
  }
}, [history]);

  useEffect(() => {
    if (commandIndex >= terminalCommands.length) return;

    const currentCommand = terminalCommands[commandIndex].command;

    let index = 0;
    let typingTimer;
    let outputTimer;

    setTypedCommand("");

    typingTimer = setInterval(() => {
      setTypedCommand(currentCommand.slice(0, index + 1));

      index++;

      if (index === currentCommand.length) {
        clearInterval(typingTimer);

        outputTimer = setTimeout(() => {
          setHistory((prev) => [
            ...prev,
            terminalCommands[commandIndex],
          ]);

          setTypedCommand("");
          setCommandIndex((prev) => prev + 1);
        }, 1000);
      }
    }, 100);

    return () => {
      clearInterval(typingTimer);
      clearTimeout(outputTimer);
    };
  }, [commandIndex]);

  return (
    <div className="w-full max-w-full min-w-0 bg-slate-950 border border-slate-800 rounded-xl overflow-hidden shadow-xl">

      {/* Terminal Header */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-700">

        <span className="w-3 h-3 rounded-full bg-red-500"></span>

        <span className="w-3 h-3 rounded-full bg-yellow-500"></span>

        <span className="w-3 h-3 rounded-full bg-green-500"></span>

        <span className="ml-3 text-sm text-slate-400 font-mono truncate">
          hardik@portfolio:~
        </span>

      </div>

      {/* Terminal Body */}
      <div 
      ref={terminalRef}
      className="p-4 sm:p-6 font-mono text-xs sm:text-sm min-w-0 max-h-[420px] overflow-y-auto">
        
        {history.map((item) => (
          <div
            className="mb-5 min-w-0"
            key={item.command}
          >

            <p className="text-slate-300">

              <span className="text-green-400">
                hardik
              </span>

              <span className="text-slate-500">
                @portfolio
              </span>

              <span className="text-cyan-400">
                :~$
              </span>{" "}

              {item.command}

            </p>

            {/* Output */}
            <div className="mt-2 text-slate-400 whitespace-pre-wrap">

              {item.output.map((line, index) => (
                <p key={index}>
                  {line || "\u00A0"}
                </p>
              ))}

            </div>

          </div>
        ))}

        {/* Currently Typing Command */}
        {typedCommand && (
          <p className="text-slate-300">

            <span className="text-green-400">
              hardik
            </span>

            <span className="text-slate-500">
              @portfolio
            </span>

            <span className="text-cyan-400">
              :~$
            </span>{" "}

            {typedCommand}

            <span className="text-cyan-400 animate-pulse">
              ▌
            </span>

          </p>
        )}

        {/* Final Cursor */}
        {!typedCommand &&
          commandIndex >= terminalCommands.length && (
            <span className="text-cyan-400 animate-pulse">
              █
            </span>
          )}

      </div>
    </div>
  );
};

export default DeveloperCard;
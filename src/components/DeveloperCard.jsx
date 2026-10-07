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
    <div className="w-full max-w-full min-w-0 bg-[#18181B] border border-[#27272A] rounded-xl overflow-hidden shadow-2xl">

      {/* Terminal Header */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-[#27272A]">

        <span className="w-3 h-3 rounded-full bg-red-500"></span>

        <span className="w-3 h-3 rounded-full bg-yellow-500"></span>

        <span className="w-3 h-3 rounded-full bg-[#22C55E]"></span>

        <span className="ml-3 text-sm text-[#A1A1AA] font-mono truncate">
          hardik@portfolio:~
        </span>

      </div>

      {/* Terminal Body */}
      <div
        ref={terminalRef}
        className="p-4 sm:p-6 font-mono text-xs sm:text-sm min-w-0 max-h-[420px] overflow-hidden"
      >

        {history.map((item) => (
          <div
            className="mb-5 min-w-0"
            key={item.command}
          >

            {/* Command */}
            <p className="text-[#F4F4F5]">

              <span className="text-[#22C55E]">
                hardik
              </span>

              <span className="text-[#71717A]">
                @portfolio
              </span>

              <span className="text-[#22C55E]">
                :~$
              </span>{" "}

              {item.command}

            </p>

            {/* Output */}
            <div className="mt-2 text-[#A1A1AA] whitespace-pre-wrap">

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
          <p className="text-[#F4F4F5]">

            <span className="text-[#22C55E]">
              hardik
            </span>

            <span className="text-[#71717A]">
              @portfolio
            </span>

            <span className="text-[#22C55E]">
              :~$
            </span>{" "}

            {typedCommand}

            <span className="text-[#22C55E] animate-pulse">
              ▌
            </span>

          </p>
        )}

        {/* Final Cursor */}
        {!typedCommand &&
          commandIndex >= terminalCommands.length && (
            <span className="text-[#22C55E] animate-pulse">
              █
            </span>
          )}

      </div>
    </div>
  );
};

export default DeveloperCard;
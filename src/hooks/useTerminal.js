import { useEffect, useState } from "react";

const useTerminal = (commands) => {
  const [lines, setLines] = useState([]);
  const [currentCommand, setCurrentCommand] = useState(0);
  const [typedText, setTypedText] = useState("");

  const command = commands[currentCommand];

  useEffect(() => {
    if (!command) return;

    setTypedText("");

    let index = 0;

    const interval = setInterval(() => {
      setTypedText(command.command.slice(0, index + 1));

      index++;

      if (index === command.command.length) {
        clearInterval(interval);

        setLines((prev) => [
          ...prev,
          {
            command: command.command,
            output: command.output,
          },
        ]);

        if (currentCommand < commands.length - 1) {
          setTimeout(() => {
            setCurrentCommand((prev) => prev + 1);
          }, 1000);
        }
      }
    }, 150);

    return () => clearInterval(interval);
  }, [commands, currentCommand]);

  return {
    lines,
    typedText,
  };
};

export default useTerminal;
import { Speeker } from "./speeker/Speeker";

type TextListenButtonProps = {
  handleSpeak: () => void;
}

export function TextListenButton({ handleSpeak }: TextListenButtonProps) {
  return (
    <button
      onClick={handleSpeak}
      className='px-5 py-2 rounded-md bg-blue-500 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
    >
      <span className='flex justify-center gap-2 items-center'>Listen <Speeker/> </span>
    </button>
  )
}

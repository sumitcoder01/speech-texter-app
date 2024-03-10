import useClipboard from "react-use-clipboard";
import { useSpeechRecognition } from 'react-speech-recognition';

type CopyButtonProps = {
  transcript: string;
}

export function CopyButton({ transcript }: CopyButtonProps) {
  const { browserSupportsSpeechRecognition } = useSpeechRecognition();
  const [isCopied, setCopied] = useClipboard(transcript, { successDuration: 2000 });

  return (
    <button
      disabled={!browserSupportsSpeechRecognition}
      onClick={setCopied}
      className='px-5 py-2 rounded-md bg-green-600 hover:bg-green-800 text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50'
    >
      {isCopied ? "Copied" : "Copy"}
    </button>

  )
}

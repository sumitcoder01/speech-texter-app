import { useSpeechRecognition } from 'react-speech-recognition';

type ResetButtonProps = {
  resetTranscript: () => void
}
export function ResetButton({ resetTranscript }: ResetButtonProps) {
  const { browserSupportsSpeechRecognition } = useSpeechRecognition();
  return (
    <button
      disabled={!browserSupportsSpeechRecognition}
      onClick={resetTranscript}
      className='px-5 py-2 rounded-md text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50'
    >
      reset
    </button>
  )
}

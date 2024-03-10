import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { MicroPhone } from './microPhone/MicroPhone';


export function ListenButton() {
  const { listening, browserSupportsSpeechRecognition } = useSpeechRecognition();

  const startListen = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
  const stopListen = () => SpeechRecognition.stopListening();
  return (
    <button
      disabled={!browserSupportsSpeechRecognition}
      onClick={listening ? stopListen : startListen}
      className='px-5 py-2 rounded-md bg-blue-500 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
    >
      <span className='flex justify-center gap-2 items-center'>{listening ? "stop" : "start"} <MicroPhone listening={listening} /></span>
    </button>
  )
}

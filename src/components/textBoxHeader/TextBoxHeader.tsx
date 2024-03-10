import MicOn from '../../assets/microphone/microphone.svg';
import MicOff from '../../assets/microphoneoff/microphoneoff.svg';
import { useSpeechRecognition } from 'react-speech-recognition';

export function TextBoxHeader() {
    const { listening } = useSpeechRecognition();
    return (
        <div className="flex justify-center md:justify-start gap-2 items-center mb-10 mx-1 md:mx-0">
            <h2 className='text-xl font-bold'>Speech Texter - Speech To Text Converter</h2>
            <img src={listening ? MicOn : MicOff} alt="microphone" className="w-6 h-6 md:w-7 md:h-7 object-fill" />
        </div>
    )
}

import 'regenerator-runtime/runtime';
import { SpeechButtonGroup } from "../../components/speechButtons/speechButtonGroup/SpeechButtonGroup";
import { TextBox } from "../../components/textBox/TextBox";
import { TextListenControl } from "../../components/textListen/textListenControl/TextListenControl";
import { useSpeechRecognition } from 'react-speech-recognition';
import { TextBoxHeader } from '../../components/textBoxHeader/TextBoxHeader';

export default function Home() {
  const { transcript, resetTranscript } = useSpeechRecognition();
  return (
    <div className='container mx-auto mt-7 max-w-96 md:max-w-[68%]'>
      <TextBoxHeader/>
      <div className="mb-4 flex justify-center items-center"><TextBox transcript={transcript} /></div>
      <div className="mb-5"><SpeechButtonGroup resetTranscript={resetTranscript} transcript={transcript} /></div>
      <div className="mb-1"> <TextListenControl transcript={transcript} /></div>
    </div>
  )
}

import { useSpeechRecognition } from 'react-speech-recognition';

type TextBoxProps = {
  transcript: string;
}

export function TextBox({ transcript }: TextBoxProps) {
  const { browserSupportsSpeechRecognition } = useSpeechRecognition();
  return (
    <div className="min-h-80 w-full md:min-h-96  px-4 py-2 bg-white rounded-md mx-1 md:mx-0">
      {browserSupportsSpeechRecognition ? transcript : "Browser doesn't support speech recognition."}
    </div>
  )
}

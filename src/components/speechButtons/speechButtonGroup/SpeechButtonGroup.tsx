import { CopyButton } from "../../copyButton/CopyButton";
import { ListenButton } from "../ListenButton/ListenButton";
import { ResetButton } from "../resetButton/ResetButton";

type SpeechButtonGroupProps = {
  resetTranscript: () => void;
  transcript:string;
}

export function SpeechButtonGroup({ resetTranscript,transcript }:SpeechButtonGroupProps) {
  return (
    <div className='flex justify-between md:justify-end items-center gap-6 mx-1 md:mr-2 md:ml-0'>
      <CopyButton transcript={transcript} />
      <ListenButton />
      <ResetButton resetTranscript={resetTranscript} />
    </div>
  )
}

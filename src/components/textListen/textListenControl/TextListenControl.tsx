import { useEffect, useState } from "react";
import { SpeechVoices } from "../speechVoices/SpeechVoices";
import { TextListenButton } from "../TextListenButton/TextListenButton";

type TextListenControlProps = {
  transcript: string;
}

export function TextListenControl({ transcript }: TextListenControlProps) {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoice, setSelectedVoice] = useState<SpeechSynthesisVoice | null>(null);
  const [synthesis, setSynthesis] = useState<SpeechSynthesis | null>(null);

  useEffect(() => {
    const fetchVoices = () => {
      const voices = window.speechSynthesis.getVoices();
      setVoices(voices);
      setSelectedVoice(voices[0]);
    };
    fetchVoices();

    window.speechSynthesis.onvoiceschanged = fetchVoices;
    return () => {
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, []);

  const handleVoiceChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const voiceName = e.target.value;
    const selected = voices.find((voice) => voice.name === voiceName);
    if (selected)
      setSelectedVoice(selected);
  };

  const handleSpeak = (): void => {
    if (!synthesis) {
      const synth = window.speechSynthesis;
      setSynthesis(synth);
    }
    const utterance = new SpeechSynthesisUtterance(transcript);
    utterance.voice = selectedVoice;
    if (synthesis)
      synthesis.speak(utterance);
  };

  return (
    <div className="flex justify-center md:justify-start gap-2 mx-2 md:mx-1">
      <SpeechVoices voices={voices} handleVoiceChange={handleVoiceChange} />
      <TextListenButton handleSpeak={handleSpeak} />
    </div>
  )
}

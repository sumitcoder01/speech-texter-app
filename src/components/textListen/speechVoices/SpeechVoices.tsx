type SpeechVoicesProps = {
  voices: SpeechSynthesisVoice[];
  handleVoiceChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;

}
export function SpeechVoices({ voices, handleVoiceChange }: SpeechVoicesProps) {
  return (
    <div>
      <select onChange={handleVoiceChange} className="px-2 py-1 h-10 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-400 rounded-md">
        {voices.map((voice) => (
          <option key={voice.name} value={voice.name}>{voice.name}</option>
        ))}
      </select>
    </div>
  )
}

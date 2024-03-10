import { FaMicrophone, FaMicrophoneSlash } from "react-icons/fa";

type MicroPhoneProps = {
    listening: boolean;
}
export function MicroPhone({ listening }: MicroPhoneProps) {
    return (
        <span className='text-red-700'>
            {listening ? <FaMicrophone /> : <FaMicrophoneSlash />}
        </span>
    )
}

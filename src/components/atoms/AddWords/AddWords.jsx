import { useState } from "react";

export function AddWords ({ label, type, addWord }){
        const [word, setWord] = useState("");
        const handleOnClick = () => {
            addWord(word);
            setWord("");
        };
        return (
                <label htmlFor={label}>
                    {label}
                    <input
                        type={type}
                        name={label}
                        value={word}
                        onChange={(e) => setWord(e.target.value)}
                    />
                    <button type="button" onClick={handleOnClick}>
                    Add Word
                </button>
                </label>
        );    
}
import { useState } from "react";
export function TestPage() {
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    const [basewords, setBasewords] = useState([]);
    const [challengewords, setChallengewords] = useState([]);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Base Words</h2>
                <Input
                    label={"baseword"}
                    type={"text"}
                    addWord={(word) => setBasewords([...basewords, word])}
                />

                <h2> Challenge</h2>
                <Input
                    label={"challengeword"}
                    type={"text"}
                    addWord={(word) =>
                        setChallengewords([...challengewords, word])
                    }
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

function Input({ label, type, addWord }) {
    const [word, setWord] = useState("");
    const handleOnClick = () => {
        addWord(word);
        setWord("");
    };
    return (
        <>
            <label htmlFor={label}>
                {label}
                <input
                    type={type}
                    name={label}
                    value={word}
                    onChange={(e) => setWord(e.target.value)}
                />
            </label>
            <button type="button" onClick={handleOnClick}>
                Add Word
            </button>
        </>
    );
}

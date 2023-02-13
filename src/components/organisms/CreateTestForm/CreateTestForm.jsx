import { useState } from "react";
import { AddWords } from "../../";

export function CreateTestForm() {
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    const [basewords, setBasewords] = useState([]);
    const [challengewords, setChallengewords] = useState([]);

    return (
        <form onSubmit={handleSubmit}>
            <h2>Base Words</h2>
            <AddWords
                label={"baseword"}
                type={"text"}
                addWord={(word) => setBasewords([...basewords, word])}
            />

            <h2> Challenge</h2>
            <AddWords
                label={"challengeword"}
                type={"text"}
                addWord={(word) => setChallengewords([...challengewords, word])}
            />
            <button type="submit">Submit</button>
        </form>
    );
}

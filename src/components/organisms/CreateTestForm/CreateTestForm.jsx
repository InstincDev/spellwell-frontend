import { useState } from "react";
import { AddWords } from "../../";
/*
    TODO:
        refactor
        validate - base and challenge array length
*/
export function CreateTestForm() {
    const handleSubmit = (event) => {
        event.preventDefault();
    };
    /*
    Data structure for Base & Challenge
    [{word: "", sentence: ""}]
    */
    const [baseWordLists, setBaseWordLists] = useState([]);
    const [challengeWordLists, setChallengeWordLists] = useState([]);

    return (
        <form onSubmit={handleSubmit}>
            <h2>Base</h2>
            <BaseWordsInput />
            <h2>Challenge</h2>
            <ChallengeWordsInput />

            <button type="submit">Form Submit</button>
        </form>
    );
}

/* TODO:
    validation
*/
function BaseWordsInput() {
    const [word, setWord] = useState("");
    const [sentence, setSentence] = useState("");
    const [submittedWordInputError, setSubmittedWordInputError] =
        useState(null);
    const [submittedSentenceInputError, setSubmittedSentenceInputError] =
        useState(null);
    // no numbers or symbols - only alphas
    // != ""
    // convert .split("").filter(!=" ").join("").toLowerCase()
    const handleWordOnSubmit = () => {
        if (word === "" || sentence === "") {
            word === "" && setSubmittedWordInputError("Empty Word");
            sentence === "" && setSubmittedSentenceInputError("Empty Sentence");
            return;
        }

        {
            word.split("").forEach((e) => {
                console.log(e);
                if (Number.isInteger(parseInt(e)))
                    setSubmittedWordInputError("Cannot Contain Numbers");
            });

            sentence.split("").forEach((e) => {
                console.log(e);
                if (Number.isInteger(parseInt(e)))
                    setSubmittedSentenceInputError("Cannot Contain Numbers");
            });
        }

        // const cleanSentence = sentence.trim()
        // const cleanWord = word.split("").filter(e => e !== ' ').join("").toLowerCase()
    };

    const handleWordOnChange = (e) => {
        const value = e.target.value;
        setSubmittedWordInputError(null);
        setWord(value);
    };

    const handleSentenceOnChange = (e) => {
        const value = e.target.value;
        setSubmittedSentenceInputError(null);
        setSentence(value);
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <label htmlFor="word">
                {submittedWordInputError && (
                    <InputToolTip message={submittedWordInputError} />
                )}
                <input
                    type="text"
                    name="word"
                    id="word"
                    placeholder="Base Word"
                    value={word}
                    onChange={handleWordOnChange}
                />
            </label>
            <label htmlFor="sentence">
                {submittedSentenceInputError && (
                    <InputToolTip message={submittedSentenceInputError} />
                )}
                <input
                    type="text"
                    name="sentence"
                    id="sentence"
                    placeholder="Base Word Sentence"
                    value={sentence}
                    onChange={handleSentenceOnChange}
                />
            </label>
            <button type="button" onClick={handleWordOnSubmit}>
                Base Submit
            </button>
        </div>
    );
}

/*
    TODO:
        validation

*/

function ChallengeWordsInput() {
    const [challengeWord, setChallengeWord] = useState("");
    const [challengeSentence, setChallengeSentence] = useState("");
    const handleChallengeWordOnChange = (e) => {
        const value = e.target.value;
        setChallengeWord(value);
    };
    const handleChallengeSentenceOnChange = (e) => {
        const value = e.target.value;
        setChallengeSentence(value);
    };
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <label htmlFor="challengeWord">
                <input
                    type="text"
                    name="challengeWord"
                    id="challengeWord"
                    placeholder="challengeWord"
                    value={challengeWord}
                    onChange={handleChallengeWordOnChange}
                />
            </label>
            <label htmlFor="challengeSentence">
                <input
                    type="text"
                    name="challengeSentence"
                    id="challengeSentence"
                    placeholder="challengeSentence"
                    value={challengeSentence}
                    onChange={handleChallengeSentenceOnChange}
                />
            </label>
        </div>
    );
}

function InputToolTip({ message }) {
    return <span>{message}</span>;
}

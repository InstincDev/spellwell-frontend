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

    function addBaseWord(baseWordObj) {
        setBaseWordLists([...baseWordLists, baseWordObj]);
    }

    function addChallengeWord(challengeWordObj) {
        setChallengeWordLists([...challengeWordLists, challengeWordObj]);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Base</h2>
            <BaseWordsInput addBaseWord={addBaseWord} />
            <h2>Challenge</h2>
            <ChallengeWordsInput addChallengeWord={addChallengeWord} />

            <button type="submit">Form Submit</button>
        </form>
    );
}

/* TODO:
    validation
*/
function BaseWordsInput({ addBaseWord }) {
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
                if (Number.isInteger(parseInt(e)))
                    setSubmittedWordInputError("Cannot Contain Numbers");
            });

            sentence.split("").forEach((e) => {
                if (Number.isInteger(parseInt(e)))
                    setSubmittedSentenceInputError("Cannot Contain Numbers");
            });
        }
        if (
            submittedWordInputError !== null ||
            submittedSentenceInputError !== null
        )return;

        const cleanSentence = sentence.trim();
        const cleanWord = word
            .split("")
            .filter((e) => e !== " ")
            .join("")
            .toLowerCase();

        addBaseWord({ word: cleanWord, sentence: cleanSentence });
        setWord("");
        setSentence("");
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


function ChallengeWordsInput({ addChallengeWord }) {
    const [challengeWord, setChallengeWord] = useState("");
    const [challengeSentence, setChallengeSentence] = useState("");
    const [
        submittedChallengeWordInputError,
        setSubmittedChallengeWordInputError,
    ] = useState(null);
    const [
        submittedChallengeSentenceInputError,
        setSubmittedChallengeSentenceInputError,
    ] = useState(null);

    const handleChallengeWordOnSubmit = () => {
        if (challengeWord === "" || challengeSentence === "") {
            challengeWord === "" &&
                setSubmittedChallengeWordInputError("Empty Word");
            challengeSentence === "" &&
                setSubmittedChallengeSentenceInputError("Empty Sentence");
            return;
        }
        
        let splitChallengeWord = challengeWord.split("");
        let splitChallengeSentence = challengeSentence.split("");
        
        {
            for (let i = 0; i < splitChallengeWord.length; i++) {
                console.log(splitChallengeWord[i]);
                console.log(Number.isInteger(parseInt(splitChallengeWord[i])));
                if (Number.isInteger(parseInt(splitChallengeWord[i]))) {
                    setSubmittedChallengeWordInputError(
                        "Cannot Contain Numbers"
                    );
                    break;
                }
            }
            for (let i = 0; i < splitChallengeSentence.length; i++) {
                if (Number.isInteger(parseInt(splitChallengeSentence[i]))) {
                    console.log(splitChallengeSentence[i]);
                    setSubmittedChallengeSentenceInputError(
                        "Cannot Contain Numbers"
                    );
                    break;
                }
            }

            if (
                submittedChallengeWordInputError !== null ||
                submittedChallengeSentenceInputError !== null
            )
                return;
        }

        splitChallengeWord = splitChallengeWord
            .filter((e) => e != " ")
            .join("")
            .toLowerCase();

        splitChallengeSentence = splitChallengeSentence.join("").trim();

        addChallengeWord({
            challengeWord: splitChallengeWord,
            challengeSentence: splitChallengeSentence,
        });
        setChallengeWord("");
        setChallengeSentence("");
    };

    const handleChallengeWordOnChange = (e) => {
        const value = e.target.value;
        setSubmittedChallengeWordInputError(null);
        setChallengeWord(value);
    };
    const handleChallengeSentenceOnChange = (e) => {
        const value = e.target.value;
        setSubmittedChallengeSentenceInputError(null);
        setChallengeSentence(value);
    };
    
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <label htmlFor="challengeWord">
                {submittedChallengeWordInputError && (
                    <InputToolTip message={submittedChallengeWordInputError} />
                )}
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
                {submittedChallengeSentenceInputError && (
                    <InputToolTip
                        message={submittedChallengeSentenceInputError}
                    />
                )}
                <input
                    type="text"
                    name="challengeSentence"
                    id="challengeSentence"
                    placeholder="challengeSentence"
                    value={challengeSentence}
                    onChange={handleChallengeSentenceOnChange}
                />
            </label>
            <button type="button" onClick={handleChallengeWordOnSubmit}>
                {" "}
                Challenge Word
            </button>
        </div>
    );
}

function InputToolTip({ message }) {
    return <span>{message}</span>;
}

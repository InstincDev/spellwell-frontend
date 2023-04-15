import { useState } from "react";
import { InputToolTip } from "../../atoms";
import { WordList } from "../../molecules";

export function WordInput({ 
    title,
    formWordError,
    wordList,
    addWord,
    deleteWord
      }) {
    const [word, setWord] = useState("");
    const [sentence, setSentence] = useState("");
    const [wordInputError, setWordInputError] =
        useState(null);
    const [sentenceInputError, setSentenceInputError] =
        useState(null);
    // no numbers or symbols - only alphas
    // != ""
    // convert .split("").filter(!=" ").join("").toLowerCase()
    const handleWordOnSubmit = () => {
        if (word === "" || sentence === "") {
            word === "" && setWordInputError("Empty Word");
            sentence === "" && setSentenceInputError("Empty Sentence");
            return;
        }

        let splitWord = word.split("");
        let splitSentence = sentence.split("");

        {
            for (let i = 0; i < splitWord.length; i++) {
                if (Number.isInteger(parseInt(splitWord[i]))) {
                    setWordInputError(
                        "Cannot Contain Numbers"
                    );
                    break;
                }
            }
            for (let i = 0; i < splitSentence.length; i++) {
                if (Number.isInteger(parseInt(splitSentence[i]))) {
                    setSentenceInputError(
                        "Cannot Contain Numbers"
                    );
                    break;
                }
            } 

           if (
            wordInputError !== null ||
            sentenceInputError !== null
        )
            return;
        }

        splitWord = splitWord
        .filter((e) => e != " ")
        .join("")
        .toLowerCase();
        splitSentence = splitSentence.join("").trim();

        addWord({ word: splitWord, sentence: splitSentence });

        setWord("");
        setSentence("");
    };

    const handleWordOnChange = (e) => {
        const value = e.target.value;
        setWordInputError(null);
        setWord(value);
    };

    const handleSentenceOnChange = (e) => {
        const value = e.target.value;
        setSentenceInputError(null);
        setSentence(value);
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
             <h2>{title}</h2>
             {formWordError && (
                <InputToolTip message={formWordError} />
            )}
            <WordList wordList={wordList} deleteWord={deleteWord} />
            <label htmlFor="word">
                {wordInputError && (
                    <InputToolTip message={wordInputError} />
                )}
                <input
                    type="text"
                    name="word"
                    id="word"
                    placeholder={`${title} Word`}
                    value={word}
                    onChange={handleWordOnChange}
                />
            </label>
            <label htmlFor="sentence">
                {sentenceInputError && (
                    <InputToolTip message={sentenceInputError} />
                )}
                <input
                    type="text"
                    name="sentence"
                    id="sentence"
                    placeholder={`${title} Sentence`}
                    value={sentence}
                    onChange={handleSentenceOnChange}
                />
            </label>
            <button type="button" onClick={handleWordOnSubmit}>
            {`${title} Submit`}
            </button>
        </div>
    );
}

import { useState } from "react";
import { InputToolTip } from "../../atoms";
import { WordList } from "../../molecules";

/* 
    TODO:
        -Find where state logic is being changed but not updated in our handleSubmit function
        -Figure out weather there is a re-render or race condition, when setting state and updating, that might be caused by a race condition.
*/

export function WordInput({ 
    title,
    formWordError,
    wordList,
    addWord,
    deleteWord
      }) {
    
    // INPUT STATE
    const [word, setWord] = useState("");
    const [sentence, setSentence] = useState("");
    // INPUT ERROR STATE
    const [wordInputError, setWordInputError] = useState(null);
    const [sentenceInputError, setSentenceInputError] = useState(null);

    
    const handleWordOnSubmit = () => {
        let isError = false

        // Check word and sentence (inputs)
        // Set error state for either/both that have an error
        // Then short circuit if the above errored
        if (word === "" || sentence === ""){
            word === "" && setWordInputError("Empty Word");
            sentence === "" && setSentenceInputError("Empty Sentence");  
            return
        }
        
        // Make word and sentence an array of each char from their strings
        let splitWord = word.split("");
        let splitSentence = sentence.split("");
        
        // Loop both the arrays above and check for int chars
        // In each look if they find an int they will set an error then break the loop
        // If either error is not equal to their default value(null) then short circuit
        {
            // SPLIT WORD
            for (let i = 0; i < splitWord.length; i++) {
                if (Number.isInteger(parseInt(splitWord[i]))) {
                    setWordInputError("Cannot Contain Numbers");
                    isError = true
                    break;
                }
            }
            // SPLIT SENTENCE
            for (let i = 0; i < splitSentence.length; i++) {
                if (Number.isInteger(parseInt(splitSentence[i]))) {
                    setSentenceInputError("Cannot Contain Numbers");
                    isError = true
                    break;
                }
            } 
        }
        
        if (isError) return

        // Filter word empty strings, then join, then set to lowercase
        splitWord = splitWord
        .filter((e) => e != " ")
        .join("")
        .toLowerCase();
        
        // Join sentence and trim the front and end of empty strings
        splitSentence = splitSentence.join("").trim();

        // handleSubmit made it this far without a short circuit.
        // If all else fails and we cant get the short circuit to work
            // we can always throw a check statement here to only run this if errors are null.
     handleAddWord(splitWord, splitSentence)
    
    };
    
    const handleAddWord = (splitWord, splitSentence)=> {
        // Add word struct to word list/array
        // Then reset the work inputs to empty
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
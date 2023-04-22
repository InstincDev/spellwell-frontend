import { useState } from "react";
import { AddWords, WordInput } from "../../";

/*
    TODO:
         - refactor
         - validate - base and challenge array length
         - correct component name of InputToolTip
         - word or sentence allows numbers to be pushed to list but also shows error 
*/
const BASE_WORD_LENGTH = 2;
const CHALLENGE_WORD_LENGTH = 1;
export function CreateTestForm() {
    const [baseWordList, setBaseWordList] = useState([]);
    const [challengeWordList, setChallengeWordList] = useState([]);

    const [formBaseWordError, setFormBaseWordError] = useState(null);

    const [formChallengeWordError, setFormChallengeWordError] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        // check if baseWordList && challengeWordList are of correct length
        // if baseWordList is not of length -> show InputToolTip w/ message
        // if challengeWordList is not of length -> show InputToolTip w/ message

        // Check the base and challenege word list length and set error state string if either list length is wrong
        if (
            baseWordList.length !== BASE_WORD_LENGTH ||
            challengeWordList.length !== CHALLENGE_WORD_LENGTH
        ) {
            if (baseWordList.length > BASE_WORD_LENGTH) {
                setFormBaseWordError("Too Many Base Words");
            }
            if (baseWordList.length < BASE_WORD_LENGTH) {
                setFormBaseWordError("Too Few Base Words");
            }
            if (challengeWordList.length > CHALLENGE_WORD_LENGTH) {
                setFormChallengeWordError("Too Many Challenge Words");
            }
            if (challengeWordList.length < CHALLENGE_WORD_LENGTH) {
                setFormChallengeWordError("Too Few Challenge Words");
            }
        }
        // Short circut if any of the lists ha
        if (formBaseWordError || formChallengeWordError) {
            console.log("we have an ERROR");
            return;
        }
    }
  
    function addBaseWord(baseWordObj) {
        setBaseWordList([...baseWordList, baseWordObj]);
        setFormBaseWordError(null);
    }

    function addChallengeWord(challengeWordObj) {
        setChallengeWordList([...challengeWordList, challengeWordObj]);
        setFormChallengeWordError(null);
    }

    function deleteBaseWord(index) {
        let arr = [...baseWordList];
        arr.splice(index, 1);
        setBaseWordList(arr);
        setFormBaseWordError(null);
    }

    function deleteChallengeWord(index) {
        let arr = [...challengeWordList];
        arr.splice(index, 1);
        setChallengeWordList(arr);
        setFormChallengeWordError(null);
    }

    return (
        <form onSubmit={handleSubmit}>
            <WordInput
                title={"Base"}
                formWordError={formBaseWordError}
                wordList={baseWordList}
                addWord={addBaseWord}
                deleteWord={deleteBaseWord}
            />

            <WordInput
                title={"Challenge"}
                formWordError={formChallengeWordError}
                wordList={challengeWordList}
                addWord={addChallengeWord}
                deleteWord={deleteChallengeWord}
            />

            <button type="submit">Form Submit</button>
        </form>
    );
}

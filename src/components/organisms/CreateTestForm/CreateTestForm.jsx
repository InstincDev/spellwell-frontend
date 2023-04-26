import { useState } from "react";
import { AddWords, WordInput } from "../../";
import { postTest } from "../../../utils/serverRequest";

/*
    TODO:
         - Validate :)
            - Title string length
*/

const BASE_WORD_LENGTH = 2;
const CHALLENGE_WORD_LENGTH = 1;
const TEACHERID = "64441ddc819c4a0efbd2e075";

export function CreateTestForm() {
    // TITLE STATE
    const [testTitle, setTestTitle] = useState("");
    // WORD LIST STATE
    const [baseWordList, setBaseWordList] = useState([]);
    const [challengeWordList, setChallengeWordList] = useState([]);
    // ERROR STATE
    const [formBaseWordError, setFormBaseWordError] = useState(null);
    const [formChallengeWordError, setFormChallengeWordError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        // check if baseWordList && challengeWordList are of correct length
        // if baseWordList is not of length -> show InputToolTip w/ message
        // if challengeWordList is not of length -> show InputToolTip w/ message

        let isError = false;

        // Check the base and challenge word list length and set error state string if either list length is wrong
        if (
            baseWordList.length !== BASE_WORD_LENGTH ||
            challengeWordList.length !== CHALLENGE_WORD_LENGTH
        ) {
            isError = false;
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
        // Short circuit if any of the lists have an error
        if (isError) {
            console.log("we have an ERROR");
            return;
        }

        // Post request
        await postTest({
            title: testTitle,
            baseWords: baseWordList,
            challengeWords: challengeWordList,
            teacherId: TEACHERID,
        });
    };

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
            <label htmlFor="title">
                Test Title
                <input type="title" name="title" onChange={(e)=> setTestTitle(e.target.value)} value={testTitle}/>
            </label>
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

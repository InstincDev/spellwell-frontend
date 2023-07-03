import { useState } from "react";
import { BaseInput, WordList } from "../../";
import { postTest } from "../../../utils/serverRequest";
import{create_test_form, form_button} from "../../../styling/form.module.sass"

const BASE_WORD_LENGTH = 2;
const CHALLENGE_WORD_LENGTH = 1;
const TEACHERID = "64441ddc819c4a0efbd2e075";

export function CreateTestForm() {
  const [testTitle, setTestTitle] = useState("");

  // Word Inputs
  const [baseWordInput, setBaseWordInput] = useState("")
  const [challengeWordInput, setChallengeWordInput] = useState("")

  // Word Sentences
  const [baseWordSentenceInput, setBaseWordSentenceInput] = useState("")
  const [challengeWordSentenceInput, setChallengeWordSentenceInput] = useState("")

  // Word Lists
  const [baseWordList, setBaseWordList] = useState([]);
  const [challengeWordList, setChallengeWordList] = useState([]);

  const addBaseWord = () => {
    setBaseWordList([...baseWordList, {word:baseWordInput, sentence:baseWordSentenceInput}])
    setBaseWordInput("")
    setBaseWordSentenceInput("")
  }
  const deleteBaseWord = (wordIndex) => {
    if (baseWordList.length == 1) {
      setBaseWordList([])
      return
    } 
    setBaseWordList(...baseWordList.filter((_,index)=> index !== wordIndex))
  }

  const addChallengeWord = () => {
    setChallengeWordList([...challengeWordList, {word:challengeWordInput, sentence:challengeWordSentenceInput}])
    setChallengeWordInput("")
    setChallengeWordSentenceInput("")
  }
  const deleteChallengeWord = (wordIndex) => {
    if (challengeWordList.length == 1) {
      setChallengeWordList([])
      return
    }
    setChallengeWordList(...challengeWordList.filter((_,index)=> index !== wordIndex))
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isError()) return

    // Post request
    await postTest({
      title: testTitle,
      baseWords: baseWordList,
      challengeWords: challengeWordList,
      teacherId: TEACHERID,
    });
  };

  return (
    <form className={create_test_form} onSubmit={handleSubmit}>
      <BaseInput name="title" type="text" placeholder="Test Title Goes Here :)" value={testTitle} setValue={setTestTitle} />
      { /* Should this be componentized? */ }
      <div>
        <WordList list={baseWordList} deleteWord={deleteBaseWord}/>
        <BaseInput 
          name="baseWordInput" 
          type="text" 
          placeholder="New Word Goes Here :)" 
          value={baseWordInput} 
          setValue={setBaseWordInput}
        />
        <BaseInput 
          name="baseWordSentenceInput" 
          type="text" 
          placeholder="New Sentence Goes Here :)" 
          value={baseWordSentenceInput} 
          setValue={setBaseWordSentenceInput} 
        />
        <button type="button" onClick={addBaseWord} disabled={baseWordInput.length < 2 || baseWordSentenceInput.length < 2}>Add Word</button>
      </div>

      <div>
        <WordList list={challengeWordList} deleteWord={deleteChallengeWord}/>
        <BaseInput 
          name="challengeWordInput" 
          type="text"
          placeholder="New Word Goes Here :)"
          value={challengeWordInput}
          setValue={setChallengeWordInput}
        />
        <BaseInput
          name="challengeWordSentenceInput"
          type="text"
          placeholder="New Sentence Goes Here :)"
          value={challengeWordSentenceInput}
          setValue={setChallengeWordSentenceInput}
        />
        <button type="button" onClick={addChallengeWord} disabled={challengeWordInput.length < 2 || challengeWordSentenceInput.length < 2}>Add Word</button>
      </div>
      { /* */}
      <button className={form_button} type="submit" >Form Submit</button>
    </form>
  );
}

// TODO: Replace this with validation function you can pass into the onValidation check for inputs.
function isError(baseWordList, challengeWordList){
  let isError = false;
  let errorMessage = ""

  // Check the base and challenge word list length and set error state string if either list length is wrong
  if (
    baseWordList.length !== BASE_WORD_LENGTH ||
    challengeWordList.length !== CHALLENGE_WORD_LENGTH
  ) {
    if (baseWordList.length > BASE_WORD_LENGTH) errorMessage = "Too Many Base Words"
    if (baseWordList.length < BASE_WORD_LENGTH) errorMessage = "Too Few Base Words"
    if (challengeWordList.length > CHALLENGE_WORD_LENGTH) errorMessage = "Too Many Challenge Words"
    if (challengeWordList.length < CHALLENGE_WORD_LENGTH) errorMessage = "Too Few Challenge Words"
  }
  // Short circuit if any of the lists have an error
  if (isError) {
    console.log("we have an ERROR");
    return true
  }

  return false
}

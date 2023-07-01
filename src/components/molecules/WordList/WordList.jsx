import {word_list, delete_word} from "./WordList.module.sass"

export function WordList({ wordList, deleteWord }) {
    function handleOnClick(index) {
        deleteWord(index);
    }
    return (
        <ul className={word_list}>
            {wordList.map(({ word, sentence }, i) => (
                <li key={`wordList-${i}`}>
                    <p>Word: {word}</p>
                    <p>Sentence: {sentence}</p>
                    <button  className={delete_word} type="button" onClick={() => handleOnClick(i)}>
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
}

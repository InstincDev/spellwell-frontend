export function WordList({ wordList, deleteWord }) {
    function handleOnClick(index) {
        deleteWord(index);
    }
    return (
        <ul>
            {wordList.map(({ word, sentence }, i) => (
                <li key={`wordList-${i}`}>
                    <p>word:{word}</p>
                    <p>sentence:{sentence}</p>
                    <button type="button" onClick={() => handleOnClick(i)}>
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
}

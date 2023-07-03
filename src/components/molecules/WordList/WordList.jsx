import {word_list } from "./WordList.module.sass"
import { Word } from "../../";

export function WordList({list, deleteWord}) {
 
  return (
    <ul className={word_list}>
      {
        list?.map(({word, sentence}, index) => 
          <Word
            key={`Word-${index}`}
            word={word}
            sentence={sentence}
            deleteWord={()=> deleteWord(index)}
          />
        )
      }
    </ul>
  );
}


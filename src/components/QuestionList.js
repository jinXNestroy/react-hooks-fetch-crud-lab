import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({fetchedQuestions, updateApp}) {
  function onUpdate(updatedQuestion){
    updateApp(updatedQuestion)
  }

  const questionListElement = fetchedQuestions.map((element)=><QuestionItem question={element} onUpdate={onUpdate}/>)
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionListElement}</ul>
    </section>
  );
}

export default QuestionList;

import React, { useState } from "react";

function QuestionItem({ question, onUpdate }) {
  const { id, prompt, answers, correctIndex } = question;
  const [deletedId, setDeletedId] = useState("")

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));
  

  function handleClick() {
    fetch(`http://localhost:4000/questions/${question.id}`, {
      method: "DELETE",
    }).then((r) => r.json())
      .then(() => {setDeletedId(question.id)
      })
      
      
  }
  function handleCorrectAnswerChange(event) {
    const newCorrectIndex = parseInt(event.target.value);

    fetch(`http://localhost:4000/questions/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ correctIndex: newCorrectIndex }),
    })
      .then((r) => r.json())
      .then((updatedQuestion) => onUpdate(updatedQuestion));}
  
  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select value={correctIndex} onChange={handleCorrectAnswerChange}>{options}</select>
      </label>
      <button onClick={handleClick}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;

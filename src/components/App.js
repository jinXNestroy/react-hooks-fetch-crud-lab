import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [fetchedQuestions, setFetchedQuestions] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/questions').then((r) => r.json()).then((data) => setFetchedQuestions(data))
  }, [fetchedQuestions])
  function onSubmitQuestion(formData) {
    const updatedFormQuestion = [...fetchedQuestions, formData]
    setFetchedQuestions(updatedFormQuestion)
  }
  function updateApp(updatedQuestion) {
    const patchedQuestion= [...fetchedQuestions, updatedQuestion]
    setFetchedQuestions(patchedQuestion)
  }
  return (
    <main>
      <AdminNavBar onChangePage={setPage} fetchedQuestions={fetchedQuestions} />
      {page === "Form" ? <QuestionForm onSubmitQuestion={onSubmitQuestion} /> : <QuestionList fetchedQuestions={fetchedQuestions} updateApp={updateApp} />}
    </main>
  );
}

export default App;

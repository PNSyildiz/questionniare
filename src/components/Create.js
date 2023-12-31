import Sidebar from './Sidebar'
import QuestionAdd from './QuestionAdd'
import Questions from './Questions'
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const Create = () => {
  
  const [questions, setQuestions ]= useState([])

useEffect(() =>{
const getQuestions = async () =>{
  const questionsFromServer =await fetchQuestions()
  setQuestions(questionsFromServer)
}
  getQuestions(questions)
}, [])

//fetch questions from db
const fetchQuestions =async () =>{
  const res = await fetch('http://localhost:5000/questions')
  const data =await res.json()

  return data
}


const addQuestion = async (question) =>{
const res = await fetch(`http://localhost:5000/questions`,{
  method: 'POST',
  headers:{
    'content-type': 'application/json'
  },
  body: JSON.stringify(question)
})
const data = await res.json()

setQuestions([...questions, data])


  // const id = Math.floor(Math.random()*
  // 10000) + 1
  // const newQuestion = {id, ...question}
  // setQuestions([...questions, newQuestion])
}

//delete member
const deleteQuestion = async (id) => {
await fetch(`http://localhost:5000/questions/${id}`, {
  method: 'DELETE'
})
  // Use the filter method to create a new array without the question to be deleted
  const updatedQuestions = questions.filter((question) => question.id !== id);
  setQuestions(updatedQuestions);
};

  return (
    <div className='Create'>
      <Sidebar >
        <QuestionAdd onAdd={addQuestion}/>
        <Questions  questions={questions} onDelete={deleteQuestion}/>
        
        
      </Sidebar>
    </div>
  )
}



Create.propTypes = {
  onDelete: PropTypes.func
};




export default Create
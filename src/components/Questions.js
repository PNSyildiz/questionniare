import Aquestion from "./Aquestion"
const Questions = ({questions, onDelete}) => {

  return (
    
   <div className="quest">
   {questions.map((questions) =>{
     return (
       <Aquestion key={questions.questionId} question={questions.question} onDelete={onDelete} />)
   })}
   </div>
  )
}

export default Questions
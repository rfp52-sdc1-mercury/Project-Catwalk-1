import React from 'react';


const AddQuestion = (props) => {

  if (props.showAddQuestionForm) {
    return (
      <div className='answerModal'>
        <div className='answerModalContent'>
          <div className='right' onClick={props.closeQuestionModal}>X</div>
          <h3>Ask Your Question</h3>
          <h4>About the {props.product.name}</h4>
          <form>
            <div>
              <label>
                Your Question*
                <textarea onChange={props.answerModalValues} required type='text' name='questionBody' maxLength='1000'/>
              </label>
            </div>
            <div>
              <label>
                What is your nickname*
                <input onChange={props.answerModalValues} required type='text' placeholder='Example jackson11!' name='questionName' ></input>
                <p>For privacy reason, do not use your full name or email address</p>
              </label>
            </div>
            <div>
              <label>
                Your email*
                <input onChange={props.answerModalValues} required type='text' placeholder='Example jack@email.com' name='questionEmail' ></input>
                <p>For authentication reasons, you will not be emailed</p>
              </label>
            </div>
            <button onClick={props.submitQuestion}>Submit</button>
          </form>
        </div>
      </div>
    )
  } else {
    return null
  }
}

export default AddQuestion;
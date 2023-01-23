import React from 'react'

export default function About(props) {
  return (
    <>
      <div className='container' id='aboutPage'>
        <h3 className={` my-5 text-${props.mode === 'light' ? 'dark' : 'light'}`} style={{ fontSize: '2.5em' }}>About Page</h3>
        <div className='container my-5'>

          <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item" style={{ backgroundColor: props.mode === 'dark' ? '#3e3a3a' : 'whitesmoke' }}>
              <h2 className="accordion-header" id="flush-headingOne" >
                <button className={`accordion-button collapsed text-${props.mode === 'light' ? 'dark' : 'light'}`} type="button" style={{ backgroundColor: props.mode === 'dark' ? 'rgb(29 27 27)' : '#e7f1ff', border: '5px    solid white' }} data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                  <strong>  Convert To Upper Case</strong>
                </button>
              </h2>
              <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                <div className={`accordion-body text-${props.mode === 'light' ? 'dark' : 'light'}`}>Change Text Case is a handy web application that enables you to change the text case of any given text. Simply copy and paste the text into the text area And this button will,Convert text to all uppercase letters. Here is an example. The word hello becomes HELLO.</div>
              </div>
            </div>

            <div className="accordion-item" style={{ backgroundColor: props.mode === 'dark' ? '#3e3a3a' : 'whitesmoke' }}>
              <h2 className="accordion-header" id="flush-headingTwo">
                <button className={`accordion-button collapsed text-${props.mode === 'light' ? 'dark' : 'light'}`} style={{ backgroundColor: props.mode === 'dark' ? 'rgb(29 27 27)' : '#e7f1ff', border: '5px    solid white' }} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                  <strong> Convert To Lower Case</strong>
                </button>
              </h2>
              <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                <div className={`accordion-body text-${props.mode === 'light' ? 'dark' : 'light'}`}>Change Text Case is a handy web application that enables you to change the text case of any given text. Simply copy and paste the text into the text area.And this button will,Convert text to all lowercase letters.</div>
              </div>
            </div>

            <div className="accordion-item" style={{ backgroundColor: props.mode === 'dark' ? '#3e3a3a' : 'whitesmoke' }}>
              <h2 className="accordion-header" id="flush-headingThree">
                <button className={`accordion-button collapsed text-${props.mode === 'light' ? 'dark' : 'light'}`} type="button" style={{ backgroundColor: props.mode === 'dark' ? 'rgb(29 27 27)' : '#e7f1ff', border: '5px    solid white' }} data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                  <strong>  Clear Text</strong>
                </button>
              </h2>
              <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                <div className={`accordion-body text-${props.mode === 'light' ? 'dark' : 'light'}`}>The text in textarea will be clear by using this button</div>
              </div>
            </div>

            <div className="accordion-item" style={{ backgroundColor: props.mode === 'dark' ? '#3e3a3a' : 'whitesmoke' }}>
              <h2 className="accordion-header" id="flush-headingFour">
                <button className={`accordion-button collapsed text-${props.mode === 'light' ? 'dark' : 'light'}`} type="button" style={{ backgroundColor: props.mode === 'dark' ? 'rgb(29 27 27)' : '#e7f1ff', border: '5px    solid white' }} data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                  <strong>Copy Text</strong>
                </button>
              </h2>
              <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                <div className={`accordion-body text-${props.mode === 'light' ? 'dark' : 'light'}`}>By using this button whatever text is there in textarea is copied to clipboard</div>
              </div>
            </div>

            <div className="accordion-item" style={{ backgroundColor: props.mode === 'dark' ? '#3e3a3a' : 'whitesmoke' }}>
              <h2 className="accordion-header" id="flush-headingFive">
                <button className={`accordion-button collapsed text-${props.mode === 'light' ? 'dark' : 'light'}`} type="button" style={{ backgroundColor: props.mode === 'dark' ? 'rgb(29 27 27)' : '#e7f1ff', border: '5px    solid white' }} data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                  <strong> Remove Whitespaces</strong>
                </button>
              </h2>
              <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                <div className={`accordion-body text-${props.mode === 'light' ? 'dark' : 'light'}`}>This button helps to remove all the whitesapces between or around the text without change the text</div>
              </div>
            </div>

            <div className="accordion-item" style={{ backgroundColor: props.mode === 'dark' ? '#3e3a3a' : 'whitesmoke' }}>
              <h2 className="accordion-header" id="flush-headingSix">
                <button className={`accordion-button collapsed text-${props.mode === 'light' ? 'dark' : 'light'}`} type="button" style={{ backgroundColor: props.mode === 'dark' ? 'rgb(29 27 27)' : '#e7f1ff', border: '5px    solid white' }} data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                  <strong> Read Message </strong>
                </button>
              </h2>
              <div id="flush-collapseSix" className="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
                <div className={`accordion-body text-${props.mode === 'light' ? 'dark' : 'light'}`}>This button helps to read the message , whatever text is placed in textarea</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
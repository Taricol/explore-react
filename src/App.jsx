
import './App.css'

function App() {
  

  return (
    <>
      
      <h1>React Core Concepts</h1>
      <Student name="Tahmid" dept="SWE"></Student>
      <Student name="Sakib" dept="CSE"></Student>
      <Person></Person>
      <Developer name="Mozumder" tech="JS"></Developer>
      <Developer name="Rajon" tech="Phython"></Developer>
      <Developer name="Shabana" tech="Java"></Developer>

      

      
    </>
  )
}

function Developer(props){
  console.log(props);
  return(
    <div style={{
      border:'2px solid green',
      borderRadius:'20px'
    }}>
      <h3>Developer: {props.name} </h3>

      <p>Technology: {props.tech}</p>

    </div>
  )
}


function Person(){
  const age=17;
  const name='Jolil';

  const personStyle={
    color:'red',
    textAlign: 'right'
  }
  return(
    <p id='' title='tooltip' style={personStyle}>I am a person : {name} {age}</p>
  )
}

function Student(props){
  return(
    <div className='student'>
      <p>Name : {props.name} </p>
      <p>Dept : {props.dept} </p>
    </div>
  )
}

function Pet(){
  return(
    <p>Cat</p>
  )
}

function Sports(){
  return(
    <div>
      <h3>Cricket</h3>
      <ul>
        <li>Kola</li>
        <li>Komola</li>
      </ul>
      <p>Playing and loosing</p>
    </div>
  )
}
export default App

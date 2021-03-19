import logo from './logo.svg';
import './App.css';
import Customer from './componenets/Customer';



const student = {
  'name' : 'jini',
  'age' : '3',
  'addr' : 'seoul',
}




function App() {
  return (
    <Customer name={student.name} age= {student.age} />
  );
}

export default App;

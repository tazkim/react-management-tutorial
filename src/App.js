import logo from './logo.svg';
import './App.css';
import Customer from './componenets/Customer';



const student = [{
  'id': 1,
  'image' : 'https://placeimg.com/64/64/any',
  'name' : 'jini1',
  'age' : '1',
  'addr' : 'seoul1',
},
{
  'id': 2,
  'image' : 'https://placeimg.com/64/64/any',
  'name' : 'jini2',
  'age' : '2',
  'addr' : 'seoul2',
},
{
  'id': 3,
  'image' : 'https://placeimg.com/64/64/any',
  'name' : 'jini3',
  'age' : '3',
  'addr' : 'seoul3',
}];




function App() {
  return (
    <div>
      {
        student.map( (c,i)=>{ 
          return (<Customer key={c.id} name={c.name} age= {c.age} image={c.image}/>);
        })
      }      
    </div>
  );
}

export default App;

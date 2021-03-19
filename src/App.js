import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './componenets/Customer';
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from  '@material-ui/core/TableBody';
import TableRow from  '@material-ui/core/TableRow';
import TableCell from  '@material-ui/core/TableCell';
import { makeStyles  } from '@material-ui/core/styles';



const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const student = [{
  'id': 1,
  'image' : 'https://placeimg.com/64/64/any',
  'name' : 'jini1',
  'age' : '11',
  'addr' : 'seoul1',
},
{
  'id': 2,
  'image' : 'https://placeimg.com/64/64/any',
  'name' : 'jini2',
  'age' : '22',
  'addr' : 'seoul2',
},
{
  'id': 3,
  'image' : 'https://placeimg.com/64/64/any',
  'name' : 'jini3',
  'age' : '33',
  'addr' : 'seoul3',
}];




class App extends Component{
  render(){
    const {classes} = this.props;
    return (
      <Paper >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>id </TableCell>
              <TableCell>사진 </TableCell>
              <TableCell>나이 </TableCell>
              <TableCell>주소 </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            { student.map( (c,i)=>{ return (<Customer key={c.id} id={c.id} name={c.name} age= {c.age} image={c.image} addr={c.addr}  />);}) }
          </TableBody>
        </Table>
      </Paper>
    );
    }
}

export default App;

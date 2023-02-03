import { Profile } from './componets/Profile'
import { useState,useEffect } from 'react';
import { ListInfo } from './componets/ListInfo';
import './App.css'



function App() {
  const [datos, setData] = useState([])
  let [filteData, setFilteData] = useState([]);
  const [last, setLast] = useState();
  const data = () =>{
    fetch('./data/data.json').then(re => re.json()).then(resultado =>{
      setData(resultado)
    })
  }
  useEffect(()=>{
    data()
    
  }, [])

  function datosF(param){
    if(param == 0){
      setFilteData(datos.map(e =>{
        return e.timeframes.daily
      }))
      setLast('Yesterday')
    }else if(param == 1){
      setFilteData(datos.map(e =>{
        return e.timeframes.weekly
      }))
      setLast('Last Week')
    }else if(param == 2){
      setFilteData(datos.map(e =>{
        return e.timeframes.monthly
      }))
      setLast('Last Month')
    }
  }

  console.log(filteData)


  return (
    <div className="App">
      <Profile filter={datosF}/>
      <ListInfo  datos={datos} filData={filteData} past={last}/>
    </div>
  )
}

export default App

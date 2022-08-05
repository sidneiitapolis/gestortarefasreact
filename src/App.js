import  {useState,useRef} from 'react'

function App() {
//state
const [listaTarefa,setListaTarefas]=useState(()=>{return []})
const [tarefa,setTarefa]=useState(()=>{return''})
//ref
const idTarefa=useRef(0)

//funçao adicionar tarefa

function adicionarTarefa(){
  setListaTarefas(old =>{ return [...old, {id:idTarefa.current,texto:tarefa}]})
  idTarefa.current = idTarefa.current + 1
}

function limparTarefas(){
  setListaTarefas(old =>{return[]})
  idTarefa.current = 0
}

  function removerTarefa(iten){    
    
    const tmp = listaTarefa.filter((tarefa)=>{
      return tarefa.id !== iten
    })
    
    setListaTarefas(tmp)
    
  }


  return (
    <div>
        <h3>Gestor de Tarefas</h3>
        <br/>
        <hr/>
        <div>
          <input type='text' value={tarefa} onChange={(evento)=>{setTarefa(evento.target.value)}}/>
            <button onClick={adicionarTarefa}>Adicinar</button>
            <button onClick={limparTarefas}>Limpar </button>
        </div>
        <br/>
        <hr/>
        <p>Tarefas</p>       
        {listaTarefa.map((tarefa)=>{
          return  <p key={tarefa.id}>{tarefa.texto} - <span onClick={()=>{removerTarefa(tarefa.id)}}>|Remover|</span></p>         
        })}
    </div>
    
  )}

export default App;

// абсолютний шлях це шлях від диску
// так як app1- модуль ми не вказуємо розширення
import { Process } from "process"

class BackgroundWorker{
  public processes:Array<Process>
  constructor(){
    this.processes=[]
  }
  public create(n:string):Process{
    let newProcess=new Process(n)
    this.processes.push(newProcess)
    return newProcess
  }
}

let bgw=new BackgroundWorker()
bgw.create('new process')
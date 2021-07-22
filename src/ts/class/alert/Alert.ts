export class Alert {
    private mssg: string
    private type: string

    constructor(){
    }
    showAlert(node: Element){
        const alertNode = document.createElement('div')        
        node.innerHTML = alertNode.innerHTML = `<div class="alert ${this.type}">${this.mssg}</div>`
        setTimeout(() => { 
            node.innerHTML = ''
         }, 3000);
        return node
    }
    setMssg(mssg: string){
        this.mssg = mssg
    }
    setType(type: string){
        this.type = type
    }
}
function decoratorName(additional:any) {
    return <T extends {new (...args:any[]):{}}>(Constructor:T)=>{
        return class extends Constructor{
            constructor(...args:any[]){
                super(...args)
                this.kek='dwdwedw'
                console.log(additional);
                
            }
        }
    }
}
@decoratorName('f')
class P{
    public kek='ssss'
}
const p=new P()
console.log(p);


interface InterfaceType{
    prop1:string;
    prop2:boolean;
    prop3:{prop4:string,prop5:Date};
    // необовязковий параметр
    prop6?: ()=> string //такий варік 


}


function logObj(logObj:InterfaceType) {
    console.log(logObj);
}
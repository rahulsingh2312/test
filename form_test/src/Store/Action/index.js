export const INPUT_VALUE ="INPUT_VALUE"
export const EMPLOYEE_NAME ="EMPLOYEE_NAME"
export const inputNumber =(detail)=>{
    return{
        type:INPUT_VALUE,
        payload:detail,
    }
}
export const employeeName =(detail)=>{
    return{
        type:EMPLOYEE_NAME,
        payload:detail
    }
}

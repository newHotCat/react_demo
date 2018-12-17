export const ADDTODO = 'ADDTODO'
export function addTodo (text) {
    return {
        type: ADDTODO,
        text
    }
}
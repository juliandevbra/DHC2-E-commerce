export default function Auth(){
    const token = localStorage.getItem('token')
    if(token){
        return true
    } else {
        return false
    }
}
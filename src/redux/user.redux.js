import axios from'axios'
const REGISTER_SUCCESS= 'REGISTER_SUCCESS'
const ERROR_MSG= 'ERROR_MSG'
const initState = {
    isAuth:false,
    msg:'',
    user:'',
    pwd:'',
    type:''
}

function registerSuccess(data){
    return {type:REGISTER_SUCCESS,payload:data}
}
function errorMsg(msg){
    return {msg,type:ERROR_MSG}
}

export function register({user,pwd,type,repeatpwd}){
    if(!user || !pwd || !type){
        return errorMsg('user name or password should not be empty!')
    }
    if(!pwd===repeatpwd){
        return errorMsg('please confirm password!')
    }
    axios.post('/user/register',{user,pwd,type}).then(
        res=>{
            if(res.status==200 && res.data.code===0){
                dispatch(registerSuccess({user,pwd,type}))
            }else{
                dispatch(errorMsg(user,pwd,type))
            }
        }
    )
}
//reducer
export function user(state=initState,action){
    switch(action.type){
        case REGISTER_SUCCESS:
            return {...state,msg:'',isAuth:true,...action.payload}
        case ERROR_MSG:
            return {...state,isAuth:false,msg:action.msg}
        default:
          return state
    }
}
// import {Login, User} from './interface.ts'
import * as UserLogin from './interface.ts' 

class LoginImpl implements UserLogin.Login {

    login(user: UserLogin.User): string {
        return `Hi user ${user.id}, email: ${user.name}`;
    }
}

let loginImpl = new LoginImpl();

console.log(loginImpl.login({id: 1, name: "abc", age: 10, email: "email"}));
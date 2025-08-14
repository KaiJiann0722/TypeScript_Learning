export interface User {
    id: number;
    name?: string;
    age: number;
    email: string;
}

let user: User = {id: 2, age: 10, email: "abc@gmail.com"}

interface Employees extends User {
    salary: number;
}

let employees: Employees = {id: 2, age: 10, email: "abc@gmail.com", salary: 2500.00};

export interface Login {
    login(user: User): string;
}

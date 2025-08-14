class Employee {
    private id: number;

    private name: string;

    private address: string;

    // constructor
    constructor (id: number, name: string, address: string) {
        this.id = id;
        this.name = name;
        this.address = address;
    }

    static getEmployeeCount() : number {
        return 50;
    }

    getNameWithAddress() : string {
        return `${this.name} stays at ${this.address}`
    } 

    // getter
    get empId(): number {
        return this.id;
    } 

    get empName(): string {
        return this.name;
    }

    get empAddress(): string {
        return this.address;
    }

    // setter
    set empId(id: number) {
        this.id = id;
    }

    set empName(name: string){
        this.name = name;
    }

    set empAddress(address: string) {
        this.address = address;
    }

};

let emp = new Employee(1, "Tan", "Address");

console.log(emp);

console.log(emp.getNameWithAddress())

console.log(`Employee count ${Employee.getEmployeeCount()}`)

class Manager extends Employee {

    constructor(id: number, name: string, address: string) {
        super(id, name, address);
    }
}

let manager = new Manager(2, "John", "Kuala Lumpur");

console.log(manager)
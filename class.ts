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

     toString(): string {
        return `{${this.id}, ${this.name}, ${this.address}}`;
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

let managerList: Manager[] = [
    new Manager(1, "John", "Kuala Lumpur"),
    new Manager(2, "Cena", "Kuala Lumpur1"),
    new Manager(3, "Zhi", "Kuala Lumpur2"),
]

console.log("First index of managerList: " + managerList[0]);


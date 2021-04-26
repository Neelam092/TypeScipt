 export interface IStudent{
    fName : string;
    lName : string;
    age : number;
    course : string;

    fullName : () => void;
    biography : () => void;
}
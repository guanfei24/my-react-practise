export function Add(){
    return 1+1;
}
export function Subtract(){
    return 2-1;
}
export default function List({person}){
    
    return (
        <div>
            <h2>My List</h2>
            <ul>
                <li>{person.name}</li>
                <li>{person.age}</li>
                <li>{person.height}</li>
            </ul>
        </div>
    );
};
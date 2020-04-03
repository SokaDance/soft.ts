import {Collection} from "./Collection";

export interface List<E> extends Collection<E> 
{
    insert(index:number, e:E):boolean;
    insertAll(index:number, c:Collection<E>):boolean;
    removeAt(index:number):E;
    get(index:number):E;
    set(index:number,e:E):void;
    indexOf(e:E):number;
}

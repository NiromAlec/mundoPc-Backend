import { ChildEntity, Column } from "typeorm";
import { Actividad } from "./Actividad";

@ChildEntity()
export class Laberinto extends Actividad {

    @Column({
        nullable: false
    })
    nombreArchivo: string;

    @Column({
        type: "json",
        nullable: false
    })
    mejorCamino: any[];

    @Column({type: "json"})
    mejorCamino2: any[];

    @Column({
        nullable: false
    })
    initialState: number;

}

import { ChildEntity, Column } from "typeorm";
import { Actividad } from "./Actividad";

@ChildEntity()
export class Cuestionario extends Actividad {

    @Column({
        nullable: false
    })
    dimension: number;

    @Column({
        type: "json",
        nullable: false
    })
    casillas: number[];

    @Column({
        nullable: false
    })
    respuestas: string;

    @Column({
        nullable: false
    })
    respuestaCorrecta: number;

}

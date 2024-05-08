import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Estudiante } from "./Estudiante";
import { Respuesta } from "./Respuesta";

@Entity()
export class Seguimiento {

    @PrimaryGeneratedColumn()
    id?: string;

    @Column({
        type: "json",
    })
    /* List<int>? */test?: number[];
    @Column()
    calificacion?: number;

    @OneToOne(() => Estudiante, (estudiante) => estudiante.seguimiento)
    @JoinColumn({ name: "estudianteId" })
    estudiante?: Estudiante;
    
    @Column()
    cursoId?: string;

    @OneToMany(() => Respuesta, (respuesta) => respuesta.seguimiento)
    respuestasActividades: Respuesta[]
}
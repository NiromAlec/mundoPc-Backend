import { Entity, Column, JoinColumn, ManyToOne, OneToOne } from "typeorm";
import { Usuario } from "./Usuario";
import { Seguimiento } from "./Seguimiento";
import { Curso } from "./Curso";

@Entity()
export class Estudiante extends Usuario {
    @Column({
        nullable: false
    })
    avatar: string;

    @Column({
        nullable: false,
        length: 20,
    })
    genero: string;

    @ManyToOne(() => Curso , (curso) => curso.estudiantes)
    @JoinColumn({ name: "cursoId" })
    curso: Curso;

    @OneToOne(() => Seguimiento, (seguimiento) => seguimiento.estudiante)
    seguimiento: Seguimiento;
}
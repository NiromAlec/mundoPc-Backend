import { Entity, Column, OneToMany } from "typeorm";
import { Usuario } from "./Usuario";
import { Curso } from "./Curso";

@Entity()
export class Profesor extends Usuario {

    @Column()
    avatar: string;

    @Column({
        length: 1000,
    })
    bio: string;

    @OneToMany(() => Curso, (curso) => curso.profesor)
    cursos: Curso[];
}

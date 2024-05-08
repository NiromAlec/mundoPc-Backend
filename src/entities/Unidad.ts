import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Curso } from "./Curso";
import { Actividad } from "./Actividad";

@Entity()
export class Unidad {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    nombre: string;

    @Column()
    descripcion: string;

    @Column()
    estado: string;

    @ManyToOne(() => Curso, (curso) => curso.unidades)
    @JoinColumn({ name: "cursoId" })
    curso: Curso;

    @OneToMany(() => Actividad, (actividad) => actividad.unidad)
    actividades: Actividad[]
}
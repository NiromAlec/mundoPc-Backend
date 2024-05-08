import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Estudiante } from "./Estudiante";
import { Profesor } from "./Profesor";
import { Unidad } from "./Unidad";

@Entity()
export class Curso {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    nombre: string;

    @Column()
    codigoAcceso: string;

    @Column()
    departamento: string;

    @Column()
    ciudad: string;

    @Column()
    colegio: string;

    @Column()
    portada: string;

    @Column()
    numEstudiantes: number;
    
    @Column({
        length: 1000,
    })
    descripcion: string;

    @Column({
        type: "date"
    })
    fechaCreacion: Date;

    @Column({
        type: "date"
    })
    fechaFinalizacion: Date;

    @Column()
    estado: string;

    @ManyToOne(() => Profesor, (profesor) => profesor.cursos)
    @JoinColumn({ name: "profesorId" })
    profesor: Profesor;

    @OneToMany(() => Estudiante, (estudiante) => estudiante.curso)
    estudiantes: Estudiante[];

    @OneToMany(() => Unidad, (unidad) => unidad.curso)
    unidades: Unidad[];
    
}
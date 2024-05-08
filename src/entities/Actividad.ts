import { Entity, TableInheritance, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToOne } from "typeorm";
import { Unidad } from "./Unidad";
import { Respuesta } from "./Respuesta";

@Entity()
@TableInheritance({ column: { type: "varchar", name: "claseActividad", length: 20 } })
export class Actividad {
    
    @PrimaryGeneratedColumn()
    id: string;

    @Column({
        nullable: false,
        unique: true,
    })
    nombre: string;

    @Column({
        nullable: false,
    })
    descripcion: string;

    @Column({
        nullable: false,
    })
    estado: string;

    @Column({
        nullable: false,
    })
    indice: number;

    @Column({
        nullable: false,
    })
    tipoActividad: string;

    @Column({type: "json"})
    pesoRespuestas: number[];

    @Column({
        type: "json",
        nullable: false,
    })
    habilidades: number[];

    @Column()
    ejercicioImage: string;

    @Column()
    ejemploImage: string;

    @Column()
    pista: string;

    @ManyToOne(() => Unidad, (unidad) => unidad.actividades)
    @JoinColumn({ name: "unidadId" })
    unidad: Unidad;

    @OneToOne(() => Respuesta, (respuesta) => respuesta.actividad)
    respuesta: Respuesta;


    static retornarActividad(activityCreated: Actividad): any {
        return JSON.parse(JSON.stringify(activityCreated));
    }
}
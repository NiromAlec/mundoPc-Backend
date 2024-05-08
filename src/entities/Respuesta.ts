import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Seguimiento } from "./Seguimiento";
import { Actividad } from "./Actividad";

@Entity()
export class Respuesta {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    respuestaUsuario: string;
    @Column()
    peso: number;
    
    @ManyToOne(() => Seguimiento, (seguimiento) => seguimiento.respuestasActividades)
    @JoinColumn({ name: "seguimientoId" })
    seguimiento: Seguimiento;

    @OneToOne(() => Actividad, (actividad) => actividad.respuesta)
    @JoinColumn({ name: "actividadId" })
    actividad: Actividad;
}

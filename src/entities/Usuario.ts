import { Entity, Column, TableInheritance, PrimaryColumn } from "typeorm";

@Entity()
export class Usuario {

    @PrimaryColumn({
        type: "uuid",
    })
    id: string;

    @Column({
        nullable: false,
        unique: true,
        length: 85,
    })
    username: string;

    @Column({
        nullable: false,
        length: 100,
    })
    password: string;

    @Column({
        nullable: false,
        length: 85,
    })
    nombre: string;

    @Column({
        nullable: false,
        length: 20,
    })
    rol: string;

    static retornarUsuario(user: Usuario) {
        return {
            id: user.id,
            nombre: user.nombre,
            rol: user.rol
        }
    }
}
import { ChildEntity } from "typeorm";
import { Actividad } from "./Actividad";

@ChildEntity()
export class Desconectada extends Actividad {

}

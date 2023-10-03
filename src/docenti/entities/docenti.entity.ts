import { Entity , BaseEntity , Column, PrimaryGeneratedColumn} from "typeorm";

@Entity({ name: 'docenti' })
    export class Docenti extends BaseEntity {
        @PrimaryGeneratedColumn()
        id: number;
    
        @Column()
        nome: string;
    
        @Column()
        materia: string;

    }
    

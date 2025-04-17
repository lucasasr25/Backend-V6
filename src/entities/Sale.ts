import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn } from "typeorm";
import { Product } from "./Product";
import { Client } from "./Client";

@Entity("sales")
class Sale {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  description!: string;

  @ManyToOne(() => Product)
  @JoinColumn({ name: "product_id" })
  product_id!: Product;

  @Column()
  quantity!: number;

  @Column("decimal")
  total!: number;

  @ManyToOne(() => Client)
  @JoinColumn({ name: "client_id" })
  client_id!: Client;

  @CreateDateColumn()
  date!: Date;
}

export { Sale };

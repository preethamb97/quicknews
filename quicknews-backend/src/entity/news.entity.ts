import { GLOBAL_CONSTANTS } from "src/const";
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity('news')
export class News {
  @PrimaryGeneratedColumn()
  news_id: number;

  @Column({ default: '' })
  nt_en: string;

  @Column({ default: '' })
  nd_en: string;

  @Column({ default: '' })
  nt_kn: string;

  @Column({ default: '' })
  nd_kn: string;

  @Column({ default: '' })
  nt_hi: string;

  @Column({ default: '' })
  nd_hi: string;

  @Column({ default: GLOBAL_CONSTANTS.CONTENT_ACTIVE })
  status: number;
}
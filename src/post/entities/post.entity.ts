import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, ManyToOne, JoinTable } from 'typeorm';
import { ShiftGroup } from './shift-group.entity';

/**
 * The post defines a specific area that requires one or more employee throughout the day
 */
@Entity()
export class Post {
	/**
     * The id of the slot
     */
	@PrimaryGeneratedColumn() public readonly id: number;
	/**
     * The starting time of the current post
     */
	@Column({ type: 'time' })
	public readonly startTime: Date;
	/**
     * The ending time of the current post
     */
	@Column({ type: 'time' })
	public readonly endTime: Date;
	/**
     * A label that describes the post
     */
	@Column({ type: 'varchar', length: 25 })
	public readonly label: string;
	/**
     * A list of shift groups for this post
     */
	@ManyToMany((type) => ShiftGroup)
	@JoinTable()
	public readonly groups: ShiftGroup[];
}

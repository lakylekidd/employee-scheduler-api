import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Shift } from './shift.entity';

/**
 * The shift group is a placeholder that defines the total duration of a post
 */
@Entity()
export class ShiftGroup {
	/**
     * The id of the slot
     */
	@PrimaryGeneratedColumn() public readonly id: number;
	/**
     * The duration of this group in minutes
     */
	@Column({ type: 'int' })
	public readonly duration: number;
	/**
     * A list of shifts that belong to this group
     */
	@OneToMany((type) => Shift, (shifts) => shifts.group)
	public readonly shifts: Shift[];
}

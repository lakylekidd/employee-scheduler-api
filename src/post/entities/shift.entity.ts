import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

/**
 * The shift is a placeholder of a position that needs to be filled by an employee.
 */
@Entity()
export class Shift {
	/**
     * The id of the slot
     */
	@PrimaryGeneratedColumn() public readonly id: number;
	/**
     * The label of the current slot
     */
	@Column({ length: 25 })
	public readonly label: string;
	/**
     * The starting position of the current slot
     * @description The starting position refers to the minutes after the post started
     */
	@Column({ type: 'int' })
	public readonly startPosition: number;
	/**
     * The ending position of the current slot
     * @description The ending position refers to the minutes after the post started
     */
	@Column({ type: 'int' })
	public readonly endPosition: number;
}

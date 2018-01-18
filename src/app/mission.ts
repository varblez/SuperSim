import { Hero } from './hero';
export class Mission {
	id: number;
	name: string;
	description: string;
	difficulty: number;
	status: string;
	assignedHeroes: Array<Hero>
}
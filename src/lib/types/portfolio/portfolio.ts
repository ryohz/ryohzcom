import type { Link } from './link/link';
import type { Profile } from './profile/profile';
import type { Skill } from './skill/skill';

export interface Portfolio {
	profile: Profile;
	skills: Skill[];
	links: Link[];
}

// Datenbank
export interface Venue {
	name: string;
	ansprechperson: string;
	kontakt: string;
	angebote: string;
	website: string;
}

// Kalender
export interface Event {
	date: string;
	time: string;
	title: string;
	description: string;
	type: string;
	detailsLink: string;
}

// BlogCard
export interface ThemenCard {
	tags: any;
	title: string;
	smallDescription: string;
	currentSlug: string;
	titleImage: any;
}

// BlogPost
export interface ThemenPost {
	currentSlug: string;
	title: string;
	content: any;
	titleImage: any;
	tags: string;
}

// Tags
export interface allTags {
	title: string;
}

// TagsProps
export interface TagsProps {
	onTagSelect: (selectedTag: string | null) => void;
	tags: allTags[];
}

// Datenbank
export interface Venue {
	name: string;
	ansprechperson: string;
	kontakt: string;
	angebote: string;
	kategorien: string[];
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

// MaterialCard
export interface MaterialCard {
	title: string;
	titleImage: string;
	smallDescription: string;
	links: string;
}

// MaterialCategory
export interface MaterialCategory {
	title: string;
	materials: MaterialCard[];
}

// Section
export interface SectionProps {
	materials: MaterialCard[];
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
	date: string;
	titleImage: any;
	content: any;
	tags: string[];
	authors: {
		name: string;
		specialty: string;
	}[];
}

// Resource
export interface Resource {
	_id: string;
	name: string;
	kontakt: string;
	website: string;
	kategorien: string[];
	angebote: string;
}

// Library Resource
export interface ResourceLibraryProps {
	resources: Resource[];
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

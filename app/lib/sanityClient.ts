import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
	apiVersion: "2022-03-07",
	dataset: "production",
	projectId: "tphyqrqy",
	useCdn: false,
	token:
		"skedwPQOZOdr8Y362GDUCMwD3o5RxicAWCYuKrXa5zRELm1P3fBBjsFiEP5QWHrsSQeKRXg9Lk6eBUdS29iNEDrlHTkMXxqYkLgpovN5BQtFgIM9Du7m9s6vStnpajmdJf7lgiNhj0HLud5OTVy9s4PPXRejCIJRsgqXtO56VDC6Lvhb5fQQ",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: any) => builder.image(source);

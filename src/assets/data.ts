import { Project } from "../components/AddNewProject/Modal/Modal";

export const dataBase: Project[] = [
	{
		id: 1,
		name: "Facebook",
		type: "Frontend",
		description:
			"This is a project that we want to re-cerate an app that look like facebook page, add some chat, posts, and other stuff similar to original.",
		language: "Javascript",
		framework: "React",
		version: "Github",
		date: new Date(),
		hours: 10,
		level: "Beginner",
		team: [{ name: "frontend dev" }, { name: "frontend dev" }],
	},
	{
		id: 2,
		name: "Instagram",
		type: "Frontend",
		description:
			"This is a project that we want to re-cerate an app that look like facebook page, add some chat, posts, and other stuff similar to original.",
		language: "Typescript",
		framework: "Vue",
		version: "Gitlab",
		date: new Date(),
		hours: 12,
		level: "Intermediate",
		team: [{ name: "frontend dev" }, { name: "frontend dev" }, { name: "frontend dev" }],
	},
	{
		id: 3,
		name: "Portfolio",
		type: "Backend",
		description:
			"This is a project that we want to re-cerate an app that look like facebook page, add some chat, posts, and other stuff similar to original.",
		language: "Java",
		framework: "Angular",
		version: "Github",
		date: new Date(),
		hours: 22,
		level: "Senior",
		team: [{ name: "frontend dev" }, { name: "frontend dev" }, { name: "frontend dev" }],
	},
];

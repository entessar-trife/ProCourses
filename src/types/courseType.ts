export interface Course {
    id: number;
    title: string;
    category: string;
    instructor: string;
    shortDescription: string;
    fullDescription: string;
    price: number;
    lessonsCount: number;
    level: "Beginner" | "Intermediate" | "Advanced";
    duration: string;
    days: string[];
    time: string;
    language: string;
}

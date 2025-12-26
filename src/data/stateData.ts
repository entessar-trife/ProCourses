
interface StatsData {
    label: string;
    value: number
    suffix: string;
}

export const statsData: StatsData[] = [
    { label: "Active Students", value: 15, suffix: "k" },
    { label: "Total Courses", value: 50, suffix: "k" },
    { label: "Expert Mentors", value: 30, suffix: "k" },
    { label: "Success Rate", value: 98, suffix: "%" },
];
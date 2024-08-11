// Это тип для данных из API
export interface Repository {
    id: string;
    nameWithOwner: string;
    description: string;
    updatedAt: string;
    forkCount?: number;
    licenseInfo?: { name: string };
    primaryLanguage?: { name: string };
    stargazers?: { totalCount: number };
    repositoryTopics?: {
        nodes: {
            topic: { name: string };
        }[];
    };
}

interface Skills {
    Language: string;
    Library: string;
    Framework?: string;
    DB?: string;
    Server?: string;
    "Hosting / Deployment"?: string;
    "CI / CD"?: string;
    Tool: string;
}

export interface Project {
    id?: string;
    workingAt?: string;
    workers?: string;
    usedSkils: Skills[];
    contribution?: string;
}
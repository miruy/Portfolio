import skill_tool_model from "@/model/skill_tool_model";

const skill_tool: skill_tool_model[] = [
    {
        title: "Front-End",
        skills: ["/skill/React.svg", "/skill/Next.js.svg", "/skill/JavaScript.svg", "/skill/TypeScript.svg", "/skill/jquery.png", "/skill/HTML.png", "/skill/CSS.png", "/skill/TailwindCSS.svg"],
        tools: ["/tool/WebStorm.png", "/tool/k8sLens.png"],
    },
    {
        title: "Back-End",
        skills: ["/skill/JAVA.svg", "/skill/SpringBoot.png", "/skill/JSP.png"],
        dbs: ["/skill/MySQL.png", "/skill/OracleSQLDeveloper.png"],
        tools: ["/tool/EclipseIDE.svg", "/tool/IntelliJ.png", "/tool/GCP.png"],
        infras: ["/skill/Docker.png", "/skill/AWS.png"]
    },
    {
        title: "Design",
        tools: ["/tool/Figma.svg", "/tool/Canva.png"],
    },
    {
        title: "Cooperation",
        tools: ["/tool/Notion.svg", "/tool/Git.png", "/tool/Discode.svg"],
    }
];

export default skill_tool;
import skill_tool_model from "@/model/skill_tool_model";

const skill_tool: skill_tool_model[] = [
    {
        title: "Front-End",
        skills: ["/skill/React.svg", "/skill/Next.js.svg", "/skill/JavaScript.svg", "/skill/TypeScript.svg", "/skill/HTML.png", "/skill/CSS.png", "/skill/TailwindCSS.svg", "/skill/Mermaid.png", "/skill/Markdown.png", "/skill/Recharts.png"],
        tools: ["/tool/WebStorm.png", "/tool/k8sLens.png", "/tool/SwaggerUI.png"],
    },
    {
        title: "Back-End",
        skills: ["/skill/JAVA.svg", "/skill/Spring.png", "/skill/JSP.png", "/skill/Docker.png"],
        dbs: ["/skill/MySQL.png"],
        tools: ["/tool/EclipseIDE.svg", "/tool/IntelliJ.png", "/tool/GCP.png"],
    },
    {
        title: "Design",
        tools: ["/tool/Figma.svg", "/tool/Canva.png"],
    },
    {
        title: "Cooperation",
        tools: ["/tool/Notion.svg", "/tool/GitHub.svg", "/tool/Discode.svg"],
    }
];

export default skill_tool;
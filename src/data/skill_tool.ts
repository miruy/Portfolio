import skill_tool_model from "@/model/skill_tool_model";

const skill_tool: skill_tool_model[] = [
    {
        title: "Front-End",
        skills: ["/image/skill/React.svg", "/image/skill/Next.js.svg", "/image/skill/JavaScript.svg", "/image/skill/TypeScript.svg", "/image/skill/jquery.png", "/image/skill/HTML.png", "/image/skill/CSS.png", "/image/skill/TailwindCSS.svg"],
        tools: ["/image/tool/WebStorm.png", "/image/tool/k8sLens.png"],
    },
    {
        title: "Back-End",
        skills: ["/image/skill/JAVA.svg", "/image/skill/SpringBoot.png", "/image/skill/JSP.png", "/image/skill/Thymeleaf.png"],
        dbs: ["/image/skill/MySQL.png", "/image/skill/OracleSQLDeveloper.png"],
        tools: ["/image/tool/EclipseIDE.svg", "/image/tool/IntelliJ.png"],
        infras: ["/image/skill/Docker.png", "/image/skill/AWS.png", "/image/skill/NginxProxyManager.png", "/image/skill/GCP.png"]
    },
    {
        title: "Design",
        tools: ["/image/tool/Figma.svg", "/image/tool/Canva.png"],
    },
    {
        title: "Cooperation",
        tools: ["/image/tool/Notion.svg", "/image/tool/Git.png", "/image/tool/Discode.svg"],
    }
];

export default skill_tool;
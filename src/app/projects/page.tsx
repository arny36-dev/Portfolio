import ActionAreaCard from "../components/ActionAreaCard";
import { projectsData } from "./data/projects-data";
 
export default function Page() {
  return (
    <>
        <section className="flex justify-center mt-8">
            <h1>Projekty</h1>
        </section>
        <section className="flex justify-center mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {projectsData.projects.map((project) => (
                    <ActionAreaCard key={project.title} {...project} />
                ))}
        
            </div>
        </section>
    </>
  );
}
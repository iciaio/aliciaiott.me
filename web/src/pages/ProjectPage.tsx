import { useParams } from "react-router-dom";
import { projects } from "../data/projects";
import MediaGallery from "../components/MediaGallery";
import InteractiveRotoscope from "../components/InteractiveRotoscope";

export default function ProjectPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? projects[slug] : undefined;

  if (!project) {
    return (
      <div className="col-span-12">
        <h1>Project not found</h1>
      </div>
    );
  }

  return (
    <article className="col-span-12 project-page">
      <h1>{project.title}</h1>
      {slug === "interactive_rotoscope" ? (
        <InteractiveRotoscope />
      ) : (
        <MediaGallery media={project.media} />
      )}
      <div className="project-description">
        {project.description.map((paragraph, index) => (
          <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
        ))}
      </div>
    </article>
  );
}

import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/data";

export default function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <div className="project-list">
      {projects.map((p, i) => (
        // Only the first couple of rows are reliably above the fold — the
        // rest stay lazy so the browser isn't asked to preload every photo.
        <ProjectRow key={p.title} project={p} priority={i < 2} />
      ))}
    </div>
  );
}

function ProjectRow({ project, priority }: { project: Project; priority: boolean }) {
  const body = (
    <>
      <div className="project-row-body">
        <div className="row-body-split">
          <h2>{project.title}</h2>
          <div className="row-meta">{project.year}</div>
        </div>
        <p>{project.desc}</p>
        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
      {project.shot && (
        <div className="project-row-media">
          <Image
            src={project.shot}
            alt=""
            fill
            sizes="(min-width: 640px) 320px, 45vw"
            priority={priority}
            className="project-row-img"
          />
        </div>
      )}
    </>
  );

  if (!project.href) {
    return <div className="project-row">{body}</div>;
  }

  if (project.href.startsWith("/")) {
    return (
      <Link href={project.href} className="project-row">
        {body}
      </Link>
    );
  }

  return (
    <a href={project.href} target="_blank" rel="noreferrer" className="project-row">
      {body}
    </a>
  );
}

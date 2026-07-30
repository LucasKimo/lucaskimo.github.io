import { ArrowUpRight } from "lucide-react";
import { milestones } from "../data";

export default function MilestoneSection() {
  return (
    <section className="archive-section" id="archive" aria-labelledby="archive-title">
      <div className="section-header">
        <p className="section-eyebrow" id="archive-title">Milestone</p>
        
      </div>
      <div className="archive-table-wrapper">
        <table className="archive-table">
        <thead>
          <tr>
            <th>Year</th>
            <th>Title</th>
            <th>Category</th>
            <th>Organization</th>
            <th>Details</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {milestones.map((project) => (
            <tr
              key={`${project.year}-${project.title}`}
              className={project.link ? "archive-row-linked" : undefined}
              tabIndex={project.link ? 0 : undefined}
              role={project.link ? "link" : undefined}
              aria-label={project.link ? `View ${project.title}` : undefined}
              onClick={
                project.link
                  ? () => window.open(project.link, "_blank", "noopener,noreferrer")
                  : undefined
              }
              onKeyDown={
                project.link
                  ? (event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        window.open(project.link, "_blank", "noopener,noreferrer");
                      }
                    }
                  : undefined
              }
            >
              <td className="archive-year">{project.year}</td>
              <td className="archive-name">{project.title}</td>
              <td className="archive-category">{project.category}</td>
              <td className="archive-built-at">{project.organization}</td>
              <td className="archive-tags">
                {project.details.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </td>
              <td className="archive-link">
                {project.link ? (
                  <ArrowUpRight size={22} strokeWidth={2} aria-hidden="true" />
                ) : (
                  <span className="archive-link-empty">—</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
        </table>
      </div>
    </section>
  );
}

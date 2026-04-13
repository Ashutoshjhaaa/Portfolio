import ProjectDescription from "@/components/project-description/ProjectDescription";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <ProjectDescription projectSlug={slug} />;
}

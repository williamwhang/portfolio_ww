import Link from 'next/link';
import { AiOutlineRightCircle } from 'react-icons/ai';
import { ProjectContainer } from "./styles";

interface ProjectItemProps {
  title: string;
  type: string;
  slug: string;
  img: string;
}

export default function ProjectItem({ title, type, slug, img}: ProjectItemProps) {
  return (
    <ProjectContainer imgUrl={img}>

      <section>
        <div className="overlay" />
      </section>

      <div className="text">
        <h2>{title}</h2>
        <p>{type}</p>
      </div>

      <button type="button">
        <Link href={slug}>
          <a>{/* Ver mais <AiOutlineRightCircle /> */}</a>
        </Link>
      </button>

    </ProjectContainer>
  )
}
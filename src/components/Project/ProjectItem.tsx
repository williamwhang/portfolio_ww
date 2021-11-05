import Link from 'next/link';
import { AiOutlineRightCircle } from 'react-icons/ai';
import { ProjectContainer } from "./styles";


export default function ProjectItem() {
    return (
        <ProjectContainer imgUrl="https://zippypixels.com/wp-content/uploads/2015/09/01-Free-perspective-website-mockup-824x542.jpg">
            
            <section>
              <div className="overlay" />
              <div className="text">
                  <h1>Project 01</h1>
                  <h2>- Website</h2>
              </div>
            </section>
            <button type="button">
              <Link href="/project">
                <a>
                  Ver mais <AiOutlineRightCircle />
                </a>
              </Link>
            </button>
        </ProjectContainer>
    )
}
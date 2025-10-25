import WorkCard from "@/components/work-card";
import SocialCard from "@/components/social-card";
import ProjectCard from "@/components/project-card";
import { CollectionSection } from "@/components/collection-section";
import { workItems, projectItems, socialItems } from "@/lib/constants";

export default function Page() {
  return (
    <>
      <section>
        <h1 className="mt-8 font-medium">Hey, I&apos;m Leovin</h1>
        <p className="mt-3">
          I&apos;m a Software Enginner from Bali, Indonesia. For the past 4+
          years, I&apos;ve been building and maintaining web and mobile apps
          with a focus on clean, efficient, and maintainable code.
        </p>
        <div className="mt-3">
          <div className="flex flex-wrap w-full gap-2">
            {socialItems.map((item) => (
              <SocialCard
                key={item.name}
                href={item.href}
                target={item.target}
                rel={item.rel}
                icon={item.icon}
                variant={item.name}
              />
            ))}
          </div>
        </div>
      </section>

      <section>
        <p className="font-bold text-primary uppercase">My Journey</p>
        <p className="mt-3">
          Besides freelancing, I&apos;ve taken on different roles that pushed me
          to grow and pick up new skills along the way. Every stop in my career
          has taught me something valuable and helped me adapt to this tech
          world.
        </p>
        <div className="mt-3 flex w-full flex-col">
          {workItems.map((item, index) => (
            <WorkCard {...item} key={index} />
          ))}
        </div>
      </section>

      <section>
        <p className="font-bold text-primary uppercase">Projects</p>
        <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {projectItems.map((item, index) => (
            <ProjectCard {...item} key={index} />
          ))}
        </div>
      </section>

      <CollectionSection />
    </>
  );
}

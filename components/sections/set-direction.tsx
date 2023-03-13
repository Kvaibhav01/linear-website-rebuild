"use client";

import { Features } from "../features";
import { CustomRoadmapsIcon } from "../icons/features/set-directions-icons/custom-roadmaps";
import { MultiTeamProjectsIcon } from "../icons/features/set-directions-icons/multi-team-projects";
import { PersonalNotificationsIcon } from "../icons/features/set-directions-icons/personal-notifications";
import { ProjectDocumentsIcon } from "../icons/features/set-directions-icons/project-documents";
import { ProjectInsightsIcon } from "../icons/features/set-directions-icons/project-insights";
import { TimelineViewIcon } from "../icons/features/set-directions-icons/timeline-view";

export const SetDirection = () => {
  return (
    <Features color="0,225,244" colorDark="31,49,64">
      <Features.Main
        title={
          <>
            Set direction
            <br />
            with Roadmaps
          </>
        }
        image="img/roadmap.webp"
        imageSize="large"
        text="Plan visually, collaborate in cross-team projects, and make better decisions with progress insights and project updates."
      />
      <Features.Grid
        features={[
          {
            icon: MultiTeamProjectsIcon,
            title: "Multi-team projects.",
            text: "Collaborate across teams and departments.",
          },
          {
            icon: ProjectDocumentsIcon,
            title: "Project documents.",
            text: "Write project briefs and specs directly in Linear.",
          },
          {
            icon: CustomRoadmapsIcon,
            title: "Custom roadmaps.",
            text: "Organize projects across multiple roadmaps.",
          },
          {
            icon: TimelineViewIcon,
            title: "Timeline view.",
            text: "Visualize the product journey ahead.",
          },
          {
            icon: ProjectInsightsIcon,
            title: "Project insights.",
            text: "Track scope, velocity, and progress over time.",
          },
          {
            icon: PersonalNotificationsIcon,
            title: "Personal notifications.",
            text: "Stay in the loop on project activity and updates.",
          },
        ]}
      />
      <Features.Cards
        features={[
          {
            image: "img/card-updates.webp",
            imageClassName: "top-[55%] md:top-[40%] w-full left-[7%]",
            title: "Project updates",
            text: "Keep everyone up-to-date on the health and progress of projects.",
          },
          {
            image: "img/card-roadmaps.webp",
            imageClassName: "top-[55%] md:top-[40%] w-full left-[2%]",
            title: "Focus on the big picture",
            text: "Explore every company project in one view to easily identify what needs attention.",
          },
        ]}
      />
    </Features>
  );
};

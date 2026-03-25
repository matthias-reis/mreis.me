import { Title, Meta } from "@solidjs/meta";
import { H1, H2, H3 } from "~/components/Typography";
import { CtaButton, CtaButtonSecondary } from "~/components/CtaButton";
import { Box } from "~/components/Box";
import { Check, Download } from "lucide-solid";
import { Skills } from "~/components/Skills";
import { ProfileBox } from "~/components/ProfileBox";
import { Buttons } from "~/components/Buttons";

export default function CVPage() {
  const experiences = [
    {
      role: "Team Lead Engineering",
      roleDescription: "People Manager, Platform Owner",
      company: "XING SE",
      period: "2019 - 2026",
      description: "",
      skills: [
        "Leadership",
        "Team Management",
        "Agile",
        "Frontend Architecture",
        "Strategy",
        "Cross Team Alignment",
        "Communication",
      ],
      highlights: [
        "People management for engineering teams 'Design System' and 'Web Platform' (up to 10 devs, web, iOS and Android platforms)",
        "Lead for two very different teams in parallel with consistently positive feedback from leadership, peers and direct reports",
        "Responsible for the technical evolution of the whole frontend layer at XING.com (delivering ~600 req/s SSR web content)",
        "Orchestrating big projects like cloud move or the migration to a monorepo structure with more than 1.4m lines of code and 40+ contributors",
        "Cross team alignment between tech, design and project management with excellent communication skills",
      ],
    },
    {
      role: "Frontend Architect",
      roleDescription: "Technology Owner",
      company: "XING SE",
      period: "2015 - 2019",
      description: "",
      skills: [
        "React.js",
        "Redux",
        "Apollo",
        "Typescript",
        "Mentoring",
        "Lateral Leadership",
      ],
      highlights: [
        "Introduced React.JS ecosystem (starting at version 0.10) that redefined dev collaboration and user flows in the company",
        "Several technology waves including Redux, Apollo, Typescript",
        "Onboarding and direction for a community of 60+ frontend developers",
      ],
    },
    {
      role: "Web Architect",
      roleDescription: "Technology Driver",
      company: "VERLAGSGRUPPE WELTBILD GMBH",
      period: "2012 - 2015",
      description: "",
      skills: [
        "PHP",
        "Javascript",
        "jQuery",
        "Angular",
        "E-Commerce",
        "High Traffic Engine",
      ],
      highlights: [
        "Operating a high traffic e-commerce platform including complex purchase funnels (hitting the 1 million Euro minute once)",
        "Responsible for the whole frontend server stack",
        "Tech Stack: PHP, Javascript, jQuery",
        "Introducing Angular (v1) based back office / content management layer",
        "Role directly evolved from my work as an engineer",
      ],
    },
    {
      role: "Software Engineer",
      company: "VERLAGSGRUPPE WELTBILD GMBH",
      period: "2011 - 2012",
      description: "",
      skills: ["PHP", "JavaScript", "Frontend Development"],
      highlights: [],
    },
    {
      role: "Software Engineer",
      company: "FILESPOTS & BWSO GMBH",
      period: "2009 - 2011",
      description: "",
      skills: ["ExtJS", "SPAs", "JavaScript"],
      highlights: ["Technologies: SPAs (early adopters) with ExtJS"],
    },
  ];

  return (
    <main class="py-12 min-h-screen font-sans">
      <Title>CV - Matthias Reis</Title>
      <Meta
        name="description"
        content="Professional experience and successes of Matthias Reis."
      />

      <div class="px-5 mx-auto max-w-4xl">
        {/* Header Section */}
        <div class="p-8 md:p-12 mb-24 flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
          <div class="flex-1">
            <H1 class="mb-4">Curriculum Vitae</H1>
            <p class="opacity-80 max-w-2xl text-xl font-sans mb-8">
              A summary of my professional journey, focusing on my roles,
              responsibilities, and key successes over the years.
            </p>
            <Buttons>
              <CtaButtonSecondary
                href="/reference/cv.pdf"
                download="Matthias_Reis_CV.pdf"
                class="inline-flex items-center"
              >
                <Download class="w-5 h-5 mr-2" />
                Download PDF
              </CtaButtonSecondary>
              <CtaButton href="/contact">Contact Me</CtaButton>
            </Buttons>
          </div>

          <ProfileBox />
        </div>

        {/* Timeline Section */}
        <div class="relative border-l-2 ml-3 space-y-12 pb-12 mt-16">
          {experiences.map((exp, index) => (
            <div class="relative pl-8 md:pl-10">
              {/* Timeline Dot - Aligned with the headline */}
              <span class="absolute -left-[9px] top-10 w-4 h-4 rounded-full bg-col-fg" />

              <div class="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2 gap-2">
                <div>
                  <p class="text-xl mt-1 font-sans uppercase">{exp.company}</p>

                  <H2 noMargin>{exp.role}</H2>
                  <p class="font-sans mb-5 mt-3">{exp.roleDescription}</p>
                </div>
                <span class="inline-block px-3 py-1 text-sm font-bold whitespace-nowrap bg-col-hi-bg/20 text-col-hi-bg rounded-full">
                  {exp.period}
                </span>
              </div>

              {exp.description && (
                <p class="text-[var(--color-fg-muted)] mb-6 text-lg leading-relaxed font-sans">
                  {exp.description}
                </p>
              )}

              {exp.highlights.length > 0 && (
                <div class="mt-4">
                  <Box title="Key Successes" class="font-sans">
                    <ul class="space-y-3 font-sans mt-2">
                      {exp.highlights.map((highlight) => (
                        <li class="flex gap-3 items-start">
                          <Check class="mt-1.5 w-5 h-5 shrink-0" />
                          <span class="leading-relaxed text-lg">
                            {highlight}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </Box>
                </div>
              )}

              {exp.skills && exp.skills.length > 0 && (
                <Skills skills={exp.skills} class="mt-8" />
              )}
            </div>
          ))}
        </div>

        <div class="mt-20 pt-12 border-t border-[var(--color-fg-muted)] flex flex-col items-start font-sans">
          <p class="text-[var(--color-fg-muted)] mb-8 text-xl max-w-2xl">
            For a comprehensive list of projects and technical details, please
            download the full portfolio.
          </p>
          <CtaButton
            href="/reference/Freelance-Portfolio.pdf"
            download="Matthias_Reis_CV.pdf"
            class="inline-flex items-center"
          >
            <Download class="w-5 h-5 mr-2" />
            Download PDF
          </CtaButton>
        </div>
      </div>
    </main>
  );
}

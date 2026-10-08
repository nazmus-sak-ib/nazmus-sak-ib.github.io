# Editing your website

## Preview

Run npm install once, then npm run dev. Open the local address printed by Astro. Run npm run build to verify the production site.

## Text

Edit content/profile.md for the introduction and contact links; content/about.md for education and personal details. Each role in content/experiences and each project in content/projects has its own Markdown file.

Settings between the opening --- lines control titles, summaries, ordering, and draft status. Lower order numbers appear first. draft: true excludes a project or experience from the generated site. Draft filtering is not a privacy mechanism for a public GitHub repository.

## Photos

Put your portrait at public/uploads/profile/portrait.jpg. In content/profile.md, set portrait to /uploads/profile/portrait.jpg and update portraitAlt. Replacing that file changes the photo. Public uploads are copied into the published site.

Add a project image in Markdown with: ![A meaningful image description](/uploads/uvm-survey/image.jpg)

## New material

Copy a template into content/projects or content/experiences, choose a unique lowercase-hyphenated filename, and fill it in. Projects automatically get /research/filename/ pages. Set draft: false when ready. featured: true places a project on the homepage.

## Private inputs

Keep original master CVs and confidential notes outside this repository. private-inputs/ is ignored if used locally; do not force-add it. The master CV was used as source material and was not copied here.

## Before publication

Review placeholder text, graduation status, BUET role title, UVM GIS versus planned survey GIS, analysis status, and project attribution. Add a public CV PDF and its link when ready. This first draft intentionally displays review notes.

The site has not been published. A deployment workflow can be added after content review.

## Homepage labels and theme

Edit name, brandSubtitle, topics, headline, headlineAccent, portraitCaption, and portraitCaptionDetail in content/profile.md. Your introduction remains the Markdown paragraph below the settings. Other section copy still lives in page components.

Theme colors and the font stack are grouped at the top of src/styles/global.css. The new theme uses slate blue, charcoal, cool white, and local system sans-serif fonts.

## Homepage sections and timeline

In content/home.md, set showHero, showFocus, or showTimeline to false to hide that section. The old connected-practice section and separate experience page were removed. Section components live in src/components/.

Education entries live in content/education/. Experience entries remain in content/experiences/. Dates are displayed verbatim; startYear and endYear place entries in the shared timeline, anchored at endYear (the current year for ongoing roles). Heights follow content, not duration. relatedProjects is a list of project filenames without .md, such as ["uvm-survey"]. Links and return links are generated from this relationship.

## Selected Work

Each project has year, tags, image, imageAlt, and placeholder fields. Use /uploads/... paths for images. With image empty, a labeled placeholder is shown. Multiple selected filters require all selected tags. Newest/oldest sorting uses year; shuffle changes the display order. All entry points use the same /research/project-slug/ page.

Navigation and footer wording live in content/site.md. Library title and introduction live in content/work.md. The Personal page links to the homepage timeline instead of duplicating degree records.

## EV-adoption GIS course project

Edit content/projects/ev-adoption-gis.md for its card, headline evidence, and full description. highlights is an optional list shown on both the library card and project page. The project date has not been supplied; year is null and sorts with undated work.

Curated slide screenshots are in public/uploads/ev-adoption/. The raw folder GIS Project - raw is excluded from Git and is outside public/. The original Word report, PowerPoint, and detailed point-map image have not been copied into public assets. Do not force-add raw materials. A public GitHub repository exposes committed source code and content as well as the built frontend; .gitignore protects excluded files, not all source files.

## ANN course project

Edit content/projects/ev-adoption-ann.md. Three curated screenshots are in public/uploads/ev-adoption-ann/. The original presentation and preview exports remain in ann - raw, which is ignored by Git and excluded from the public build. Project-level relatedProjects fields generate links between project pages. The date is unspecified, so year remains null. Group attribution is retained; individual task contributions can be clarified later.

## Bayesian course project

Edit content/projects/bayesian-hrv.md. Two aggregate figures extracted from the team report are in public/uploads/bayesian-hrv/. The original report and extraction previews stay in bayes raw, excluded from Git and public build output. The page preserves the author-contribution statement; individual model implementation is credited to the appropriate teammates.

## Charging planning work

The obsolete additional-uvm placeholder was replaced by charging-demand-simulation.md and charging-policy-white-paper.md. Each is a single source for its card and page, and they link to each other. The research paper uses scenarios frontmatter to render its four-scenario overview. spotlight gives its library card an accent border. Policy context is dated to the papers. Curated slide screenshots are in public/uploads/charging-demand/; planning raw is excluded from Git and public output.

## Geostatistics and dataset grouping

Edit content/projects/vehicle-geostatistics.md for the kriging project. Curated figures are in public/uploads/vehicle-geostatistics/. krigging raw is excluded from Git and public build output. Dataset grouping uses shared tags: DMV Data, NHTS Data, and Physiological Data. UVM education uses relatedProjectGroups (label and project-slug list) to group existing canonical project links; relatedProjects is still used for return links.

## Thesis tabs, galleries, and events

The thesis summary and Overview text are in content/projects/uvm-survey.md. The title, summary, and highlights remain visible when tabs change. Framework and survey-image lists are in content/survey/materials.md; edit src, alt, and caption or add a new entry. Galleries show one image at a time and support arrow buttons and keyboard arrows.

Each presentation has its own Markdown file in content/survey-presentations/. Duplicate one to add a future conference: title, date, status, url, order, images, and optional poster. All events share the Presentations tab; no separate project page is created. The abstract synopsis is in content/survey/abstract.md.

Curated images and the public poster PDF are copied to public/uploads/uvm-survey/. No site references survey raw; it is excluded from Git. Raw folders contain source materials and some extraction previews, not website code. Upcoming ASTR is listed as October 2026: the conference page lists October 27–29, while the supplied presentation date was the 26th and remains to be confirmed.

## Transportation lab work

The single card is content/projects/autonomous-vehicle-bangladesh.md. Tab text lives in content/transportation-lab/survey.md, paper.md, and cost.md. The survey file contains the form URL and gallery list. Curated screenshots live in public/uploads/transportation-lab/. The original documents remain in transp lab raw, ignored by Git. Both thesis and lab pages share the reusable ProjectTabs and Gallery components. Survey and TCO work are explicitly unfinished; the paper is a separate published team study.

## Development Studies work

Three separate cards live in content/projects/: gendered-refugee-experience.md, rural-livelihoods.md, and educational-social-media.md. They share Development Studies and Coursework tags; the essay also uses Article. The gender essay original body is in content/articles/gendered-refugee-experience.md and appears in an expandable section on the same canonical page. Its cover and student ID were excluded. The livelihood page contains only anonymized summaries, not the original respondent narratives. The educational report is credited to all five authors. mds raw is ignored and its PDFs are not copied to public/.

## Undergraduate thesis and duration timeline

The thesis card is content/projects/intercity-bus-choice.md; its four tabs are in content/undergraduate-thesis/. Two original figures are in public/uploads/undergraduate-thesis/. buet ug raw is ignored.

Timeline startYear and endYear now determine card placement and duration on desktop. Parallel lanes accommodate overlapping roles; short entries have a minimum height. On narrower screens, entries form one chronological column with moderated duration heights. Expanding details may stretch year rows to preserve readability. Dates and years remain editable in the education/experience Markdown files.

## Timeline sequence correction

The timeline now uses career phases in content/timeline.md, rather than proportional year spans or overlap lanes. Each experience occupies its own row, newest first: UVM, freelance, IPA, lecturer, BUET research, and surveyor. Education appears alongside the relevant phase; the BSc and surveyor share a compressed 2016–February 2021 phase. Each record still displays its own actual date label. Primary freelance dates use the master CV; Upwork contract spans are explained separately.

## Project dates and smaller filter set

Every current project has sortDate (ISO date used by both initial and interactive sorting) and dateLabel (visible wording). Thesis uses expected December 2026, not a completed date. GIS and ANN dates are provisionally 2025 until confirmed. Broad filter buttons are curated in src/pages/research/index.astro; all detailed tags remain visible at the top of each card. MDS course names were transcribed from the supplied transcript; grades, identifiers, and the transcript PDF are not public.

## Homepage background summary

Edit content/background.md to change the introduction, group descriptions, and skill badges. Transportation appears first; the remaining groups cover spatial data, social research, and programming. Set showBackground: false in content/home.md to hide this section. It sits between Current Focus and the timeline.

## Methods filters and survey emphasis

Filter buttons are now defined in content/work.md (filters). They are single-choice: a new selection replaces the old, and selecting the same filter again returns to All. Academic Work tags group the current thesis, undergraduate thesis, lab research, and charging simulation paper. The homepage background summary makes three survey-design contexts and IPA fieldwork/training explicit. Header subtitle stays in profile.md; CTA labels stay in home.md.

## Community and leadership

The optional timeline view is controlled by the Show community & leadership checkbox. Role text and dates live in content/community/. Placement is controlled by the community slug lists in content/timeline.md. The wider desktop view adds a third lane; smaller layouts stack it beneath education within the same career phase. Orange is restricted to the community cards’ top border. ResearchGate is editable in content/profile.md.

## Personal page and hobby photos

Edit content/about.md for the text and photo list (src and alt). Photos live in public/uploads/personal/, independently of hobby raw, which is ignored. Twenty-four unique images were resized for the web and stripped of metadata; an exact duplicate was omitted. Eight small, unclickable photos appear at a time. One changes every four seconds while visible; visitors can pause, and reduced-motion preferences disable automatic changes. The raw folder can be removed without affecting the site.

## Publishing

The GitHub Pages workflow builds and deploys whenever main is pushed. GitHub Settings → Pages must use GitHub Actions as the source. Raw source folders, including raw stuff/, remain ignored. To update live text, edit the relevant Markdown file, preview locally, then commit and push. The published URL is https://nazmus-sak-ib.github.io/.

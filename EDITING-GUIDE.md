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

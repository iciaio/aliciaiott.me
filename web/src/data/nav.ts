// Navigation structure ported from the legacy sidebar.html categories.
// Each category groups project slugs; slugs map to routes at /project/:slug.

export interface NavItem {
  slug: string;
  title: string;
}

export interface NavCategory {
  name: string;
  items: NavItem[];
}

export const navCategories: NavCategory[] = [
  {
    name: "Unity and Game Development",
    items: [
      { slug: "cybersecurity", title: "Cyber Security Education" },
      { slug: "itchyitchy", title: "ItchyItchy" },
      { slug: "memoryrooms", title: "Memory Room" },
      { slug: "cutetome", title: "Cute To Me" },
      { slug: "tastycarb", title: "Tasty Carb" },
      { slug: "escape", title: "Escape (Infinite Room Game)" },
      { slug: "littlered", title: "Little Red" },
      { slug: "rightfullyaccused", title: "Rightfully Accused" },
      { slug: "musiccatch", title: "Music Catch" },
    ],
  },
  {
    name: "Interactive / Immersive",
    items: [
      { slug: "eclipsetracker", title: "Eclipse Tracker" },
      { slug: "memoryrooms", title: "Memory Room" },
      { slug: "thegirlsarehome", title: "The Girls Are Home" },
      { slug: "itchyitchy", title: "ItchyItchy" },
      { slug: "hololensskeleton", title: "Hololens Skeleton Display" },
      { slug: "escape", title: "Escape (Infinite Room Game)" },
      { slug: "makeitrain", title: "Make It Rain" },
      { slug: "interactive_rotoscope", title: "Interactive Rotoscope" },
    ],
  },
  {
    name: "Sculptural",
    items: [
      { slug: "teaparty", title: "Tea Party" },
      { slug: "selfless", title: "Selfless" },
      { slug: "exoskeleton", title: "Exoskeleton" },
    ],
  },
  {
    name: "Paintings / Drawings",
    items: [
      { slug: "recollection", title: "Recollection" },
      { slug: "screenrage", title: "Screen Rage" },
      { slug: "deconstructuredrawings", title: "Deconstructure" },
      { slug: "figuredrawings", title: "Figure Drawings" },
      { slug: "teaparty", title: "Tea Party" },
      { slug: "oilstudies", title: "Oil Studies" },
      { slug: "drawings", title: "Drawings" },
      { slug: "sketchbook", title: "Sketchbook" },
    ],
  },
  {
    name: "Mobile Development",
    items: [
      { slug: "audionce", title: "Audionce (Graphonic)" },
      { slug: "itchyitchy", title: "ItchyItchy" },
      { slug: "eclipsetracker", title: "Eclipse Tracker" },
    ],
  },
  {
    name: "Photography",
    items: [{ slug: "photography", title: "Black and White Film" }],
  },
  {
    name: "Computer Vision",
    items: [{ slug: "dranimate", title: "Dranimate" }],
  },
  {
    name: "Fashion Design",
    items: [{ slug: "exoskeleton", title: "Exoskeleton" }],
  },
  {
    name: "Time Based",
    items: [
      { slug: "cutetome", title: "Cute To Me" },
      { slug: "untangled", title: "Untangled" },
      { slug: "parforthecourse", title: "Par For the Course" },
    ],
  },
  {
    name: "Other",
    items: [
      { slug: "mypresident", title: "My President" },
      { slug: "collabture", title: "Collabture" },
    ],
  },
];

export const resumeUrl =
  "https://drive.google.com/file/d/1kI-qgpIihq4z6vbbyBYxsHzEuKbO8IwK/view?usp=sharing";

// Flat lookup of slug -> title, deduplicated, for rendering project pages.
export const projectTitles: Record<string, string> = navCategories
  .flatMap((category) => category.items)
  .reduce((acc, item) => {
    acc[item.slug] = item.title;
    return acc;
  }, {} as Record<string, string>);

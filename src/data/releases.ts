export type ReleaseStatus = "featured" | "coming-soon";

type Release = {
  title: string;
  artist: string;
  slug: string;
  artwork: string;
  preview: string;
  bpm: number;
  genre: string;
  status: ReleaseStatus;
};

export const releases: Release[] = [
  {
    title: "Healing Now",
    artist: "Tranqill Tribe",
    slug: "healing-now",
    artwork: "/releases/healing-now/artwork.jpg",
    preview: "/releases/healing-now/preview.mp3",
    bpm: 170,
    genre: "Electronic / Drum & Bass",
    status: "coming-soon",
  },
  {
    title: "Memories",
    artist: "Tranqill Tribe",
    slug: "memories",
    artwork: "/releases/memories/artwork.jpg",
    preview: "/releases/memories/preview.mp3",
    bpm: 120,
    genre: "Afro House",
    status: "coming-soon",
  },
  {
    title: "Relationships Are Hard Work",
    artist: "Tranqill Tribe",
    slug: "relationships-are-hard-work",
    artwork: "/releases/relationships-are-hard-work/artwork.jpg",
    preview: "/releases/relationships-are-hard-work/preview.mp3",
    bpm: 120,
    genre: "Afro House",
    status: "featured",
  },
  {
    title: "Run Into The Sun",
    artist: "Tranqill Tribe",
    slug: "run-into-the-sun",
    artwork: "/releases/run-into-the-sun/artwork.jpg",
    preview: "/releases/run-into-the-sun/preview.mp3",
    bpm: 120,
    genre: "Afro House",
    status: "coming-soon",
  },
  {
    title: "Crossroads",
    artist: "Tranqill Tribe",
    slug: "crossroads",
    artwork: "/releases/crossroads/artwork.jpg",
    preview: "/releases/crossroads/preview.mp3",
    bpm: 122,
    genre: "Soulful House",
    status: "featured",
  },
];

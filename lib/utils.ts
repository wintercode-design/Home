import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const userTimeZone = "Africa/Douala"; //  fuseau horaire souhaité

type ImageA = {
  id: number;
  size: number;
  created_at: string;
  updated_at: string;
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const isImage = (media: string | undefined): boolean => {
  if (!media) return false;
  return /\.(jpg|jpeg|png|gif|webp)$/i.test(media);
};

export function getDateRange(value: string) {
  const today = new Date(
    new Date().toLocaleString("en-US", { timeZone: userTimeZone })
  ); // Utilisation du fuseau horaire souhaité
  let startDate: string;
  let endDate: string = today.toISOString().split("T")[0];

  switch (value) {
    case "semaine":
      startDate = new Date(today.setDate(today.getDate() - 7))
        .toISOString()
        .split("T")[0];
      break;

    case "mois":
      startDate = new Date(today.setDate(today.getDate() - 28))
        .toISOString()
        .split("T")[0];
      break;

    case "annee":
      startDate = new Date(today.setFullYear(today.getFullYear() - 1))
        .toISOString()
        .split("T")[0];
      break;

    default:
      throw new Error(
        "Valeur non valide. Utiliser 'semaine', 'mois' ou 'annee'."
      );
  }

  return { startDate, endDate };
}

//Display article date
export function articleDate(value: string): string {
  const date = new Date(value);
  const today = new Date(
    new Date().toLocaleString("en-US", { timeZone: userTimeZone })
  ); // Utilisation du fuseau horaire souhaité
  // Vérification de la validité de la date

  if (isNaN(date.getTime())) {
    return "Date inconnue";
  }

  const diffInMilliseconds = today.getTime() - date.getTime();
  const diffInMinutes = Math.floor(diffInMilliseconds / (1000 * 60));
  const diffInHours = Math.floor(diffInMinutes / 60);

  // Midnights pour comparaison sur les jours
  const todayMidnight = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  );
  const dateMidnight = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate()
  );
  const diffInDays = Math.floor(
    (todayMidnight.getTime() - dateMidnight.getTime()) / (1000 * 60 * 60 * 24)
  );

  const diffInWeeks = Math.floor(diffInDays / 7);
  const diffInMonths =
    (today.getFullYear() - date.getFullYear()) * 12 +
    (today.getMonth() - date.getMonth());
  const diffInYears = today.getFullYear() - date.getFullYear();

  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
  };
  if (date.getFullYear() !== today.getFullYear()) {
    options.year = "numeric";
  }

  if (diffInDays === 0) {
    if (diffInHours < 1) {
      if (diffInMinutes < 2) {
        return "Publié à l'instant";
      }
      return `Publié il y a ${diffInMinutes} minutes`;
    }
    return `Publié il y a ${diffInHours} heure${diffInHours > 1 ? "s" : ""}`;
  } else if (diffInDays === 1) {
    return "Publié hier";
  } else if (diffInDays < 7) {
    return `Publié il y a ${diffInDays} jours`;
  } else if (diffInWeeks < 5) {
    return `Publié il y a ${diffInWeeks} semaine${diffInWeeks > 1 ? "s" : ""}`;
  } else if (diffInMonths < 12) {
    return `Publié il y a ${diffInMonths} mois`;
  } else {
    return `Publié il y a ${diffInYears} an${diffInYears > 1 ? "s" : ""}`;
  }
}

//Slug generator
export function slugify(text: string): string {
  return text
    .toLowerCase() // Tout en minuscule
    .normalize("NFD") // Sépare les lettres accentuées
    .replace(/[\u0300-\u036f]/g, "") // Supprime les accents
    .replace(/[^a-z0-9\s-]/g, "") // Supprime les caractères spéciaux sauf espaces et tirets
    .trim() // Supprime les espaces au début/fin
    .replace(/\s+/g, "-") // Remplace les espaces par des tirets
    .replace(/-+/g, "-"); // Évite les tirets doubles
}

//Return the first word in a string
export function getFirstWord(name: string): string {
  if (!name) return "";

  // Gestion des espaces multiples, tabulations, etc.
  const firstWord = name.trim().split(/\s+/)[0];

  // Optionnel : supprime la ponctuation attachée au mot
  return firstWord.replace(/[.,;!?]+$/, "");
}

//## Last 24h articles

//#Cleaning URLs
export const cleanedUrl = (url: string): string => {
  if (!url) return "";
  return url.replace(/\\\//g, "/"); // Supprime la barre oblique à la fin
};
//Let's set the image url to the api url
//This is to avoid the problem of the image url being set to the api url with a backslash
export const SetImageUrl = (url: string): string => {
  return `${process.env.NEXT_PUBLIC_API?.substring(
    0,
    process.env.NEXT_PUBLIC_API?.length - 4
  )}${url.replace(/\\\//g, "/")}`;
};
export const SetImageObjectUrl = (image: ImageA[]) => {
  if (image.length === 0) {
    return "/images/no-image.jpg";
  } else {
    return `${process.env.NEXT_PUBLIC_API}image/${image[0].id}`;
  }
};

import Image, { StaticImageData } from "next/image";

interface CardProps {
  type: string;
  image: {
    src: StaticImageData;
    alt: string;
  };
  title: string;
  excerpt: string;
  url: string;
}

export function Card(props: CardProps) {
  return (
    <article>
      <a href={props.url} className="group block">
        <Image src={props.image.src} alt={props.image.alt} className="w-full" />

        <h3 className="decoration-secondary mt-4 text-lg group-hover:underline md:text-xl">
          {`${props.type} - `}
          <span className="text-muted">{props.title}</span>
        </h3>

        <p className="mt-2">{props.excerpt}</p>
      </a>
    </article>
  );
}

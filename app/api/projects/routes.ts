import { NextRequest, NextResponse } from "next/server";

const projects = [
  {
    title: "Cotraf – Intercity Transport Booking System",
    desc: "Cotraf is a digital platform designed to manage and centralize the booking of inter-urban transport across multiple agencies in Cameroon.",
    company: "Cotraf cooperative",
    cover: "/",
    images: ["/"],
    design:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quaerat sint ex iusto esse tempore molestiae necessitatibus quibusdam. Amet ullam sint similique numquam. Maiores, numquam voluptatibus? Ducimus delectus ad minima.",
    dev: "string Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla minus magnam voluptatem deleniti inventore nam, perspiciatis pariatur fuga, exercitationem rerum blanditiis praesentium nostrum ab dolorem, doloremque illo dignissimos esse eveniet.",
    deploy:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id maxime voluptatem, fugit facere illum commodi magnam rem animi, officiis accusamus sequi est provident? Quod excepturi consectetur magnam id illo eos.",
    link: "/",
  },
  {
    title: "Cotraf – Intercity Transport Booking System",
    desc: "Cotraf is a digital platform designed to manage and centralize the booking of inter-urban transport across multiple agencies in Cameroon.",
    company: "Cotraf cooperative",
    cover: "/",
    images: ["/"],
    design:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quaerat sint ex iusto esse tempore molestiae necessitatibus quibusdam. Amet ullam sint similique numquam. Maiores, numquam voluptatibus? Ducimus delectus ad minima.",
    dev: "string Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla minus magnam voluptatem deleniti inventore nam, perspiciatis pariatur fuga, exercitationem rerum blanditiis praesentium nostrum ab dolorem, doloremque illo dignissimos esse eveniet.",
    deploy:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id maxime voluptatem, fugit facere illum commodi magnam rem animi, officiis accusamus sequi est provident? Quod excepturi consectetur magnam id illo eos.",
    link: "/",
  },
  {
    title: "Cotraf – Intercity Transport Booking System",
    desc: "Cotraf is a digital platform designed to manage and centralize the booking of inter-urban transport across multiple agencies in Cameroon.",
    company: "Cotraf cooperative",
    cover: "/",
    images: ["/"],
    design:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quaerat sint ex iusto esse tempore molestiae necessitatibus quibusdam. Amet ullam sint similique numquam. Maiores, numquam voluptatibus? Ducimus delectus ad minima.",
    dev: "string Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla minus magnam voluptatem deleniti inventore nam, perspiciatis pariatur fuga, exercitationem rerum blanditiis praesentium nostrum ab dolorem, doloremque illo dignissimos esse eveniet.",
    deploy:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id maxime voluptatem, fugit facere illum commodi magnam rem animi, officiis accusamus sequi est provident? Quod excepturi consectetur magnam id illo eos.",
    link: "/",
  },
  {
    title: "Cotraf – Intercity Transport Booking System",
    desc: "Cotraf is a digital platform designed to manage and centralize the booking of inter-urban transport across multiple agencies in Cameroon.",
    company: "Cotraf cooperative",
    cover: "/",
    images: ["/"],
    design:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quaerat sint ex iusto esse tempore molestiae necessitatibus quibusdam. Amet ullam sint similique numquam. Maiores, numquam voluptatibus? Ducimus delectus ad minima.",
    dev: "string Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla minus magnam voluptatem deleniti inventore nam, perspiciatis pariatur fuga, exercitationem rerum blanditiis praesentium nostrum ab dolorem, doloremque illo dignissimos esse eveniet.",
    deploy:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id maxime voluptatem, fugit facere illum commodi magnam rem animi, officiis accusamus sequi est provident? Quod excepturi consectetur magnam id illo eos.",
    link: "/",
  },
  {
    title: "Cotraf – Intercity Transport Booking System",
    desc: "Cotraf is a digital platform designed to manage and centralize the booking of inter-urban transport across multiple agencies in Cameroon.",
    company: "Cotraf cooperative",
    cover: "/",
    images: ["/"],
    design:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quaerat sint ex iusto esse tempore molestiae necessitatibus quibusdam. Amet ullam sint similique numquam. Maiores, numquam voluptatibus? Ducimus delectus ad minima.",
    dev: "string Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla minus magnam voluptatem deleniti inventore nam, perspiciatis pariatur fuga, exercitationem rerum blanditiis praesentium nostrum ab dolorem, doloremque illo dignissimos esse eveniet.",
    deploy:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id maxime voluptatem, fugit facere illum commodi magnam rem animi, officiis accusamus sequi est provident? Quod excepturi consectetur magnam id illo eos.",
    link: "/",
  },
  {
    title: "Cotraf – Intercity Transport Booking System",
    desc: "Cotraf is a digital platform designed to manage and centralize the booking of inter-urban transport across multiple agencies in Cameroon.",
    company: "Cotraf cooperative",
    cover: "/",
    images: ["/"],
    design:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quaerat sint ex iusto esse tempore molestiae necessitatibus quibusdam. Amet ullam sint similique numquam. Maiores, numquam voluptatibus? Ducimus delectus ad minima.",
    dev: "string Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla minus magnam voluptatem deleniti inventore nam, perspiciatis pariatur fuga, exercitationem rerum blanditiis praesentium nostrum ab dolorem, doloremque illo dignissimos esse eveniet.",
    deploy:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id maxime voluptatem, fugit facere illum commodi magnam rem animi, officiis accusamus sequi est provident? Quod excepturi consectetur magnam id illo eos.",
    link: "/",
  },
];

export async function GET(request: NextRequest) {
  console.log(request);
  return NextResponse.json({ data: projects });
}

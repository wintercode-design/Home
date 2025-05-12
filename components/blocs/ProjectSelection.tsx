import React from "react";
import Container from "../base/Container";
import SectionHead from "../ui/SectionHead";
import ProjectCard from "../ui/ProjectCard";

const ProjectSelection = () => {
  return (
    <Container className="flex flex-col justify-center items-center gap-[50px] py-[100px]">
      <SectionHead
        sectionTitle={"Portfolio/Projects"}
        sectionSubtitle={"Our expertise through results"}
        sectionDescription={
          "Take a look at some of our finest achievements over the past years"
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProjectCard
          title={"Cotraf – Intercity Transport Booking System"}
          imageUrl={"/projects/project1.png"}
          description={
            "Cotraf is a digital platform designed to manage and centralize the booking of inter-urban transport across multiple agencies in Cameroon."
          }
          subtitle={"Cotraf Cooperative"}
        />
        <ProjectCard
          title={"TShop – E-Commerce Platform for Electronics"}
          imageUrl={"/projects/project2.png"}
          description={
            "TShop needed a scalable e-commerce solution for B2C electronic sales, complete with payment gateways and order tracking."
          }
          subtitle={"TShop Online"}
        />
        <ProjectCard
          title={"Cotraf – Intercity Transport Booking System"}
          imageUrl={"/projects/project3.png"}
          description={
            "Cotraf is a digital platform designed to manage and centralize the booking of inter-urban transport across multiple agencies in Cameroon."
          }
          subtitle={"Cotraf Cooperative"}
        />
        <ProjectCard
          title={"TShop – E-Commerce Platform for Electronics"}
          imageUrl={"/projects/project4.png"}
          description={
            "TShop needed a scalable e-commerce solution for B2C electronic sales, complete with payment gateways and order tracking."
          }
          subtitle={"TShop Online"}
        />
      </div>
    </Container>
  );
};

export default ProjectSelection;

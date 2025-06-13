import React from "react";
import Label from "./Label";
import { Reveal } from "../utils/Reveal";

const Details = () => {
  return (
    <div className="flex flex-col text-left pt-5">
      <h2 className="font-medium text-lg text-amber-500 dark:text-amber-200 mt-5 mb-1">
        <Reveal width="100%">Programming Languages</Reveal>
      </h2>
      <div className="flex gap-2">
        <Label indicator={90}>HTML</Label>
        <Label indicator={70}>CSS</Label>
        <Label indicator={95}>Liquid</Label>
        <Label indicator={90}>Javascript</Label>
        <Label indicator={80}>Typescript</Label>
        <Label indicator={80}>Python</Label>
      </div>

      <h2 className="font-medium text-lg text-amber-500 dark:text-amber-200 mt-5 mb-1">
        <Reveal width="100%">Technologies</Reveal>
      </h2>
      <div className="flex flex-wrap gap-2">
        <Label indicator={90}>Shopify</Label>
        <Label indicator={90}>Liquid</Label>
        <Label indicator={95}>Javascript</Label>
        <Label indicator={90}>Typescript</Label>
        <Label indicator={70}>Figma</Label>
        <Label indicator={70}>Shopify API</Label>
        <Label indicator={70}>Shopify CLI</Label>
        <Label indicator={95}>React</Label>
        <Label indicator={95}>Vue.js</Label>
        <Label indicator={80}>Next.js</Label>
        <Label indicator={80}>Tailwind CSS</Label>
        <Label indicator={60}>React Hooks</Label>
        <Label indicator={70}>React Redux</Label>
        <Label indicator={70}>Laravel</Label>
        <Label indicator={90}>PostgreSQL</Label>
        <Label indicator={90}>MySQL</Label>
        <Label indicator={70}>MongoDB</Label>
      </div>

      <h2 className="font-medium text-lg text-amber-500 dark:text-amber-200 mt-5 mb-1">
        <Reveal width="100%">Softwares and Tools</Reveal>
      </h2>
      <div className="flex flex-wrap gap-2">
        <Label indicator={80}>Git</Label>
        <Label indicator={70}>VS Code</Label>
        <Label indicator={50}>Ubuntu</Label>
        <Label indicator={90}>GitHub</Label>
        <Label indicator={100}>Visual Studio</Label>
        <Label indicator={70}>Postman</Label>
        <Label indicator={90}>Shopify API</Label>
        <Label indicator={90}>RESTful API</Label>
      </div>

      <h2 className="font-medium text-lg text-amber-500 dark:text-amber-200 mt-5 mb-1">
        <Reveal width="100%">Soft Skills</Reveal>
      </h2>
      <div className="flex flex-wrap gap-2">
        <Label indicator={100}>Effective Communication</Label>
        <Label indicator={100}>Problem Solving</Label>
        <Label indicator={100}>Creativity</Label>
        <Label indicator={100}>Team Work</Label>
      </div>
    </div>
  );
};

export default Details;

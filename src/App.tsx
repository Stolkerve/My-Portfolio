import React from "react";
import { VscChevronDown, VscFolder } from "react-icons/vsc";
import { DiHtml5 } from "react-icons/di"

const meTags = [
  {
    tag: "Name",
    value: "I'm Sebastian Gonzalez"
  },
  {
    tag: "Age",
    value: "19 years old"
  },
  {
    tag: "Profession",
    value: "Software developer 🖥️"
  },
  {
    tag: "Country",
    value: "Venezuela 🇻🇪"
  },
];

const htmlFiles = ["me.html", "skills.html", "projects.html", "contact.html"];

const skillsIcons = [
  "c.svg",
  "css.svg",
  "git.svg",
  "html.svg",
  "mysql.svg",
  "nodejs.svg",
  "opengl.svg",
  "react.svg",
  "rust.svg",
  "typescript.svg",
  "vue.svg"
];

function App() {
  return (
    <div>
      {/* Folders */}
      <div className="fixed top-0 left-0 h-screen w-48 bg-green-700 text-base">
        <div className="border-b-2 py-3 pl-2">Explorer</div>
        <div className="flex items-center">
          <VscChevronDown className="" size={"16px"} />
          <VscFolder className="mx-1" size={"16px"} />
          <div>My Portfolio</div>
        </div>
        {
          htmlFiles.map((v) =>
            <div className="ml-6 flex items-center">
              <DiHtml5 className="mx-1"/>
              <div>{v}</div>
            </div>
          )
        }
      </div>

      {/* main div */}
      <div className="pl-48 bg-slate-800 text-slate-300">

        {/* Me tag */}
        <div className="h-screen flex py-2 pl-2">
          <div className="flex flex-col justify-between text-xl">
            <DrawTag tagName="Me" />
            <div className="ml-6">
              <DrawTag tagName="HowIm" />
              {
                meTags.map(({ tag, value }, key) =>
                  <div className={"ml-6 flex"} key={key}>
                    <DrawTag tagName={tag} />
                    <div className="anim-typewriter">{value}</div>
                    <DrawTag tagName={tag} close />
                  </div>
                )
              }
              <div className="ml-6 ">
                <DrawTag tagName="img" props={[{ name: "src", value: "me.png" }]} />
                <img className="ml-6 w-64" src={require("./assets/yo.png")} alt="Me" />
                <DrawTag tagName="img" close />
              </div>

              <DrawTag tagName="HowIm" close />
            </div>
            <DrawTag tagName="Me" close />
          </div>
        </div>

        {/* Skills tag */}
        <div className="flex py-2 pl-1">
          <div className="flex flex-col justify-between text-xl">
          <DrawTag tagName="Skills" />
          <div className="flex flex-wrap justify-center px-8">
          {
            skillsIcons.map((icon) => 
              <img className="w-24 mx-6 my-4" src={require(`./assets/${icon}`)} alt="icon"></img>
            )
          }
          </div>
          <DrawTag tagName="Skills" close />
          </div>
        </div>
        
        {/* Proyects tag */}
        <div className="flex py-2 pl-1">
          <div className="flex flex-col justify-between text-xl">
            <DrawTag tagName="Projects" />
            <DrawTag tagName="Projects" close/>
          </div>
        </div>

        {/* Contact tag */}
        <div className="flex py-2 pl-1">
          <div className="flex flex-col justify-between text-xl">
            <DrawTag tagName="Contact" />
            <DrawTag tagName="Contact" close/>
          </div>
        </div>
      </div>
    </div>
  );
}

function DrawTag({ tagName, close, props }: { tagName: string, close?: boolean, props?: Array<{ name: string, value: string }> }) {
  return (
    <div className="flex">
      <div>{!close ? "<" : "</"}</div>
      <div className="text-yellow-600">{tagName}</div>
      {
        props?.map(({ name, value }, key) =>
        <span className="whitespace-pre" key={key}>
            <span className="text-red-400">{` ${name}`}</span>
            <span className="text-slate-400">{"="}</span>
            <span className="text-blue-400">{props.length === 1 ? `"${value}"` : `"${value}" `}</span>
          </span>
        )
      }
      <div>{">"}</div>
    </div>
  );
}



export default App;
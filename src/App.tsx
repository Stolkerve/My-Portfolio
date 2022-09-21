import React, { useRef } from "react";
import { VscChevronDown, VscFolder } from "react-icons/vsc";
import { DiHtml5 } from "react-icons/di";

const aboutMeTags = [
  {
    tag: "Name",
    value: "I'm Sebastian Gonzalez",
  },
  {
    tag: "Age",
    value: "19 years old",
  },
  {
    tag: "Profession",
    value: "Software developer 🖥️",
  },
  {
    tag: "Country",
    value: "Venezuela 🇻🇪",
  },
  {
    tag: "Github",
    value: "Stolkerve",
    link: "https://github.com/Stolkerve"
  },
  {
    tag: "Linkedin",
    value: "Profile",
    link: "https://www.linkedin.com/in/sebastian-gonzalez-a2060a215/"
  },
  {
    tag: "Medium",
    value: "Articles",
    link: "https://medium.com/@devsebasgr"
  },
];



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
];

function App() {
  const aboutMeRef = useRef<HTMLSpanElement>(null);
  const skillsRef = useRef<HTMLSpanElement>(null);
  const contactRef = useRef<HTMLSpanElement>(null);

  const scrollTo = (ref: any) => {
    console.log(ref.current?.offsetTop)
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth"
    })
  }

  const htmlFiles = [
    {
      value: "AboutMe.html",
      onClick: scrollTo,
      ref: aboutMeRef
    },
    {
      value: "Skills.html",
      onClick: scrollTo,
      ref: skillsRef
    },
    {
      value: "Contact.html",
      onClick: scrollTo,
      ref: contactRef
    }
  ];

  return (
    <div>
      {/* Folders */}
      <div className="fixed top-0 left-0 h-screen w-48 bg-green-700 text-base">
        <div className="border-b-2 py-3 pl-2">Explorer</div>
        <div className="flex items-center pt-2">
          <VscChevronDown className="" size={"16px"} />
          <VscFolder className="mx-1" size={"16px"} />
          <div>My Portfolio</div>
        </div>
        {htmlFiles.map(({value, onClick, ref}) => (
          <div className="ml-6 flex items-center">
            <DiHtml5 className="mx-1" />
            <button onClick={() => {onClick(ref)}}>{value}</button>
          </div>
        ))}
      </div>

      {/* main div */}
      <div className="pl-48 bg-slate-800 text-slate-300">
        {/* Me tag */}
        <span ref={aboutMeRef}></span>
        <DrawTag tagName="AboutMe" identation={1}>
          {
            aboutMeTags.map(({ tag, value, link }, key) =>
              <DrawTag tagName={tag} identation={1} oneLine key={key}>
                {
                  link ? (<a className="text-decoration-line: underline" href={link}>{value}</a>) : (<div>{value}</div>)
                }
              </DrawTag>
            )
          }
          <DrawTag tagName="img" values={[{ name: "src", value: "me.png" }]} identation={0}>
            <img
              className="ml-6 w-64"
              src={require("./assets/yo.png")}
              alt="Me" />
          </DrawTag>
        </DrawTag>
        {/* 
                  <DrawTag
                    tagName="img"
                    values={[{ name: "src", value: "me.png" }]}
                  />
                  />
                  <DrawTag tagName="img"  />
                </div>

              <DrawTag tagName="HowIm"  />
            </div>
            
            <div className="ml-6 mt-6">
              <DrawTag tagName="Education" />
                <div className="ml-6 ">
                <DrawTag tagName="University" />
                  <img className="ml-6 w-72" alt="uni" src={require("./assets/unimet.jpg")}/>
                <DrawTag tagName="University" />
                <DrawTag tagName="Courses" />
                  
                <DrawTag tagName="Courses" />
                </div>
              <DrawTag tagName="Education"  />
            </div>

            <DrawTag tagName="AboutMe"  />
          </div>
        </div> */}

        {/* Skills tag */}
        <span ref={skillsRef}></span>
        <DrawTag tagName="Skills" identation={1}>
          <div className="flex flex-wrap justify-center px-8">
            {
              skillsIcons.map((icon) => (
                <img
                  className="w-24 mx-6 my-4"
                  src={require(`./assets/${icon}`)}
                  alt="icon"
                ></img>
              ))
            }
          </div>
        </DrawTag>
        {/* Proyects tag */}

        {/* Contact tag */}
        <span ref={contactRef}></span>
        <DrawTag tagName="Contact" identation={0}>
          <DrawTag tagName="Email" identation={0} oneLine>
            <div>devsebasgr@gmail</div>
          </DrawTag>
        </DrawTag>

      </div>
    </div>
  );
}

function DrawTag({
  tagName,
  identation,
  values,
  children,
  oneLine
}: {
  tagName: string
  identation: number
  values?: Array<{ name: string; value: string }>
  children?: React.ReactNode
  oneLine?: boolean
}) {
  return (
    <div className={(oneLine ? "flex " : "") + "text-xl pl-1"}>
      <div className="flex">
        <div>{"<"}</div>
        <div className="text-yellow-600">{tagName}</div>
        {values?.map(({ name, value }, key) => (
          <span className="whitespace-pre" key={key}>
            <span className="text-red-400">{` ${name}`}</span>
            <span className="text-slate-400">{"="}</span>
            <span className="text-blue-400">
              {values.length === 1 ? `"${value}"` : `"${value}" `}
            </span>
          </span>
        ))}
        <div>{">"}</div>
      </div>
      <div className={(!oneLine ? "pl-4" : "")}>
        {children}
      </div>
      <div className="flex">
        <div>{"</"}</div>
        <div className="text-yellow-600">{tagName}</div>
        <div>{">"}</div>
      </div>
    </div>

  );
}

export default App;

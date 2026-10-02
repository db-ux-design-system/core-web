import{n as e}from"./iframe-D06NKLdb.js";import{n as t,t as n}from"./paragraph-BhF2q2be.js";import{n as r,t as i}from"./text-Dxwsv0GZ.js";import{n as a}from"./rolldown-runtime-DkW27tQK.js";var o,s,c,l,u,d;function f(){return(f=a((()=>{t(),r(),o=e(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBText/Inline text`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`3xl`,`2xl`,`xl`,`lg`,`md`,`sm`,`xs`,`2xs`,`3xs`]},visuallyHidden:{control:`boolean`},children:{control:`text`},className:{control:`text`},id:{control:`text`}}},l={args:{size:`sm`,children:`inline passage at a smaller size`},render:e=>(0,o.jsxs)(n,{children:[`A paragraph with an`,(0,o.jsx)(i,{...e}),` that keeps flowing in the same line.`]})},u={args:{size:`2xs`,children:`Departure`},render:e=>(0,o.jsxs)(`dl`,{children:[(0,o.jsx)(`dt`,{children:(0,o.jsx)(i,{...e})}),(0,o.jsx)(`dd`,{children:(0,o.jsx)(i,{children:`Berlin Hauptbahnhof`})})]})},d=[`Insideaparagraph`,`Insideadescriptionlist`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "sm",
    "children": "inline passage at a smaller size"
  },
  render: (properties: any) => <DBParagraph>
                A paragraph with an<DBText {...properties} /> that
                keeps flowing in the same line.
            </DBParagraph>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "2xs",
    "children": "Departure"
  },
  render: (properties: any) => <dl><dt><DBText {...properties} /></dt><dd><DBText>Berlin Hauptbahnhof</DBText></dd></dl>
}`,...u.parameters?.docs?.source}}}})))()}f();export{u as Insideadescriptionlist,l as Insideaparagraph,d as __namedExportsOrder,c as default};
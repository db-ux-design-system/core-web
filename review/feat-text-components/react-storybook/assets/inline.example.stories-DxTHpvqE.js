import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./paragraph-B4JPxbV8.js";import{n as i,t as a}from"./text-D8wd_aG5.js";var o,s,c,l,u,d;function f(){return(f=e((()=>{n(),i(),o=t(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBText/Inline text`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`3xl`,`2xl`,`xl`,`lg`,`md`,`sm`,`xs`,`2xs`,`3xs`]},visuallyHidden:{control:`boolean`},children:{control:`text`},className:{control:`text`},id:{control:`text`}}},l={args:{size:`sm`,children:`inline passage at a smaller size`},render:e=>(0,o.jsxs)(r,{children:[`A paragraph with an`,(0,o.jsx)(a,{...e}),` that keeps flowing in the same line.`]})},u={args:{size:`2xs`,children:`Departure`},render:e=>(0,o.jsxs)(`dl`,{children:[(0,o.jsx)(`dt`,{children:(0,o.jsx)(a,{...e})}),(0,o.jsx)(`dd`,{children:(0,o.jsx)(a,{children:`Berlin Hauptbahnhof`})})]})},d=[`Insideaparagraph`,`Insideadescriptionlist`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
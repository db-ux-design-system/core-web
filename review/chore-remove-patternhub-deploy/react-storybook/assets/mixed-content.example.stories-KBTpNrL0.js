import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./paragraph-Da_20bXe.js";import{n as a,t as o}from"./text-group-DnOZfylj.js";var s=t({Achildoutsidethetextelements:()=>f,Nativeblocktext:()=>d,__namedExportsOrder:()=>p,default:()=>u}),c,l,u,d,f,p;function m(){return(m=e((()=>{r(),a(),c=n(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBTextGroup/Mixed content`,component:o,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{alignment:{control:`select`,options:[`start`,`center`,`end`]},textSpacing:{control:`boolean`},className:{control:`text`},id:{control:`text`}}},d={args:{textSpacing:!0,children:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(`h3`,{children:`A native heading`}),(0,c.jsx)(`p`,{children:`A native paragraph. The opt-in reaches it just like it reaches our components, so plain markup and components can be mixed freely.`}),(0,c.jsx)(i,{children:`A component paragraph, spaced by exactly the same rule.`})]})},render:e=>(0,c.jsx)(o,{...e})},f={args:{textSpacing:!0,children:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{children:`A list is not one of the block-text elements, so it keeps whatever margin it brings.`}),(0,c.jsxs)(`ul`,{style:{marginBlock:`calc(1lh * var(--db-text-spacing, 0))`},children:[(0,c.jsx)(`li`,{children:`Opted into the same rhythm`}),(0,c.jsx)(`li`,{children:`The list items are unaffected`})]}),(0,c.jsx)(i,{children:`Set a zero block margin instead to take such a child out of the rhythm entirely.`})]})},render:e=>(0,c.jsx)(o,{...e})},p=[`Nativeblocktext`,`Achildoutsidethetextelements`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "textSpacing": true,
    "children": <><h3>A native heading</h3><p>
                    A native paragraph. The opt-in reaches it just like it
                    reaches our components, so plain markup and components can
                    be mixed freely.
                </p><DBParagraph>
                    A component paragraph, spaced by exactly the same rule.
                </DBParagraph></>
  },
  render: (properties: any) => <DBTextGroup {...properties} />
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "textSpacing": true,
    "children": <><DBParagraph>
                    A list is not one of the block-text elements, so it keeps
                    whatever margin it brings.
                </DBParagraph><ul style={{
        marginBlock: 'calc(1lh * var(--db-text-spacing, 0))'
      }}><li>Opted into the same rhythm</li><li>The list items are unaffected</li></ul><DBParagraph>
                    Set a zero block margin instead to take such a child out of
                    the rhythm entirely.
                </DBParagraph></>
  },
  render: (properties: any) => <DBTextGroup {...properties} />
}`,...f.parameters?.docs?.source}}}})))()}export{s as i,d as n,m as r,f as t};
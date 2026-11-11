import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./heading-h3-CsHyFppI.js";import{n as a,t as o}from"./paragraph-DxfSkSyr.js";import{n as s,t as c}from"./text-group-D7FTVeeg.js";var l=t({Headingandparagraphsinonegroup:()=>p,__namedExportsOrder:()=>m,default:()=>f}),u,d,f,p,m;function h(){return(h=e((()=>{r(),a(),s(),u=n(),{fn:d}=__STORYBOOK_MODULE_TEST__,f={title:`Components/DBTextGroup/With components`,component:c,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{alignment:{control:`select`,options:[`start`,`center`,`end`]},textSpacing:{control:`boolean`},className:{control:`text`},id:{control:`text`}}},p={args:{textSpacing:!0,children:(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i,{children:`A heading starts the block`}),(0,u.jsx)(o,{children:`Neither component carries spacing of its own. The group sets the text spacing attribute, and the foundations apply the margin to each element.`}),(0,u.jsx)(o,{size:`sm`,children:`Because the margin resolves against the element's own line height, a smaller paragraph gets proportionally less spacing.`})]})},render:e=>(0,u.jsx)(c,{...e})},m=[`Headingandparagraphsinonegroup`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "textSpacing": true,
    "children": <><DBHeadingH3>A heading starts the block</DBHeadingH3><DBParagraph>
                    Neither component carries spacing of its own. The group sets
                    the text spacing attribute, and the foundations apply the
                    margin to each element.
                </DBParagraph><DBParagraph size="sm">
                    Because the margin resolves against the element's own line
                    height, a smaller paragraph gets proportionally less
                    spacing.
                </DBParagraph></>
  },
  render: (properties: any) => <DBTextGroup {...properties} />
}`,...p.parameters?.docs?.source}}}})))()}export{l as n,h as r,p as t};
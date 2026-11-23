import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./paragraph-DxfSkSyr.js";import{n as a,t as o}from"./text-group-D7FTVeeg.js";var s=t({Outergroupspacingnestedgroups:()=>d,__namedExportsOrder:()=>f,default:()=>u}),c,l,u,d,f;function p(){return(p=e((()=>{r(),a(),c=n(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBTextGroup/Nested groups`,component:o,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{alignment:{control:`select`,options:[`start`,`center`,`end`]},textSpacing:{control:`boolean`},className:{control:`text`},id:{control:`text`}}},d={args:{textSpacing:!0,children:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(o,{alignment:`start`,children:[(0,c.jsx)(i,{children:(0,c.jsx)(`strong`,{children:`Start-aligned block`})}),(0,c.jsx)(i,{children:`Alignment is set once per group and inherited by every paragraph in it.`})]}),(0,c.jsxs)(o,{alignment:`center`,children:[(0,c.jsx)(i,{children:(0,c.jsx)(`strong`,{children:`Centred block`})}),(0,c.jsx)(i,{size:`sm`,children:`A nested group can differ from its parent, and the spacing keeps coming from the outer one.`})]})]})},render:e=>(0,c.jsx)(o,{...e})},f=[`Outergroupspacingnestedgroups`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "textSpacing": true,
    "children": <><DBTextGroup alignment="start"><DBParagraph><strong>Start-aligned block</strong></DBParagraph><DBParagraph>
                        Alignment is set once per group and inherited by every
                        paragraph in it.
                    </DBParagraph></DBTextGroup><DBTextGroup alignment="center"><DBParagraph><strong>Centred block</strong></DBParagraph><DBParagraph size="sm">
                        A nested group can differ from its parent, and the
                        spacing keeps coming from the outer one.
                    </DBParagraph></DBTextGroup></>
  },
  render: (properties: any) => <DBTextGroup {...properties} />
}`,...d.parameters?.docs?.source}}}})))()}export{p as n,s as r,d as t};
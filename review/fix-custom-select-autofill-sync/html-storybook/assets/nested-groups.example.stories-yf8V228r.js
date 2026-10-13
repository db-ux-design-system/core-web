import{n as e}from"./iframe-CG6JR8EK.js";import{n as t,t as n}from"./paragraph-vaoUNd3F.js";import{n as r,t as i}from"./text-group-PsGLZKz8.js";import{n as a}from"./rolldown-runtime-DkW27tQK.js";var o,s,c,l,u;function d(){return(d=a((()=>{t(),r(),o=e(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBTextGroup/Nested groups`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{alignment:{control:`select`,options:[`start`,`center`,`end`]},textSpacing:{control:`boolean`},className:{control:`text`},id:{control:`text`}}},l={args:{textSpacing:!0,children:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(i,{alignment:`start`,children:[(0,o.jsx)(n,{children:(0,o.jsx)(`strong`,{children:`Start-aligned block`})}),(0,o.jsx)(n,{children:`Alignment is set once per group and inherited by every paragraph in it.`})]}),(0,o.jsxs)(i,{alignment:`center`,children:[(0,o.jsx)(n,{children:(0,o.jsx)(`strong`,{children:`Centred block`})}),(0,o.jsx)(n,{size:`sm`,children:`A nested group can differ from its parent, and the spacing keeps coming from the outer one.`})]})]})},render:e=>(0,o.jsx)(i,{...e})},u=[`Outergroupspacingnestedgroups`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}}})))()}d();export{l as Outergroupspacingnestedgroups,u as __namedExportsOrder,c as default};
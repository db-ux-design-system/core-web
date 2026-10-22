import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-CmlRtXv3.js";import{n,t as r}from"./paragraph-j-fWnt83.js";import{n as i,t as a}from"./text-group-CB_vXlR3.js";var o,s,c,l,u;function d(){return(d=e((()=>{n(),i(),o=t(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBTextGroup/Nested groups`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{alignment:{control:`select`,options:[`start`,`center`,`end`]},textSpacing:{control:`boolean`},className:{control:`text`},id:{control:`text`}}},l={args:{textSpacing:!0,children:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(a,{alignment:`start`,children:[(0,o.jsx)(r,{children:(0,o.jsx)(`strong`,{children:`Start-aligned block`})}),(0,o.jsx)(r,{children:`Alignment is set once per group and inherited by every paragraph in it.`})]}),(0,o.jsxs)(a,{alignment:`center`,children:[(0,o.jsx)(r,{children:(0,o.jsx)(`strong`,{children:`Centred block`})}),(0,o.jsx)(r,{size:`sm`,children:`A nested group can differ from its parent, and the spacing keeps coming from the outer one.`})]})]})},render:e=>(0,o.jsx)(a,{...e})},u=[`Outergroupspacingnestedgroups`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
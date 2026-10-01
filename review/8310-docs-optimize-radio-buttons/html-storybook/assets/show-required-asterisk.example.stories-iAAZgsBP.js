import{n as e}from"./iframe-DcvCoVHV.js";import{n as t,t as n}from"./radio-DwQa3zFp.js";import{n as r}from"./rolldown-runtime-DkW27tQK.js";var i,a,o,s,c,l;function u(){return(u=r((()=>{t(),i=e(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBRadio/Show Required Asterisk`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{name:{control:`text`},value:{control:`text`},disabled:{control:`boolean`},checked:{control:`boolean`},validation:{control:`select`,options:[`invalid`,`valid`,`no-validation`]},size:{control:`select`,options:[`small`,`medium`]},required:{control:`boolean`},showLabel:{control:`boolean`},showRequiredAsterisk:{control:`boolean`},label:{control:`text`},form:{control:`text`},ariaDescribedBy:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},s={args:{name:`TicketAsterisk`,value:`single`,required:!0,showRequiredAsterisk:!0,children:`Single`},render:e=>(0,i.jsxs)(`fieldset`,{children:[(0,i.jsx)(`legend`,{children:`(Default) True - pick a ticket type *`}),(0,i.jsx)(n,{...e}),(0,i.jsx)(n,{name:`TicketAsterisk`,value:`return`,required:!0,showRequiredAsterisk:!0,children:`Return`}),(0,i.jsx)(n,{name:`TicketAsterisk`,value:`day`,required:!0,showRequiredAsterisk:!0,children:`Day pass`})]})},c={args:{name:`TicketNoAsterisk`,value:`single`,required:!0,showRequiredAsterisk:!1,children:`Single`},render:e=>(0,i.jsxs)(`fieldset`,{children:[(0,i.jsx)(`legend`,{children:`False - pick a ticket type *`}),(0,i.jsx)(n,{...e}),(0,i.jsx)(n,{name:`TicketNoAsterisk`,value:`return`,required:!0,showRequiredAsterisk:!1,children:`Return`}),(0,i.jsx)(n,{name:`TicketNoAsterisk`,value:`day`,required:!0,showRequiredAsterisk:!1,children:`Day pass`})]})},l=[`DefaultTrue`,`False`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "TicketAsterisk",
    "value": "single",
    "required": true,
    "showRequiredAsterisk": true,
    "children": "Single"
  },
  render: (properties: any) => <fieldset><legend>(Default) True - pick a ticket type *</legend><DBRadio {...properties} /><DBRadio name="TicketAsterisk" value="return" required showRequiredAsterisk>
                    Return
                </DBRadio><DBRadio name="TicketAsterisk" value="day" required showRequiredAsterisk>
                    Day pass
                </DBRadio></fieldset>
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "TicketNoAsterisk",
    "value": "single",
    "required": true,
    "showRequiredAsterisk": false,
    "children": "Single"
  },
  render: (properties: any) => <fieldset><legend>False - pick a ticket type *</legend><DBRadio {...properties} /><DBRadio name="TicketNoAsterisk" value="return" required showRequiredAsterisk={false}>
                    Return
                </DBRadio><DBRadio name="TicketNoAsterisk" value="day" required showRequiredAsterisk={false}>
                    Day pass
                </DBRadio></fieldset>
}`,...c.parameters?.docs?.source}}}})))()}u();export{s as DefaultTrue,c as False,l as __namedExportsOrder,o as default};
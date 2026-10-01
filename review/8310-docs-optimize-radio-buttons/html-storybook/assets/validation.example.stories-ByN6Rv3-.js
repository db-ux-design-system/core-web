import{n as e}from"./iframe-DcvCoVHV.js";import{n as t,t as n}from"./radio-DwQa3zFp.js";import{n as r}from"./rolldown-runtime-DkW27tQK.js";var i,a,o,s,c,l,u;function d(){return(d=r((()=>{t(),i=e(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBRadio/Validation`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{name:{control:`text`},value:{control:`text`},disabled:{control:`boolean`},checked:{control:`boolean`},validation:{control:`select`,options:[`invalid`,`valid`,`no-validation`]},size:{control:`select`,options:[`small`,`medium`]},required:{control:`boolean`},showLabel:{control:`boolean`},showRequiredAsterisk:{control:`boolean`},label:{control:`text`},form:{control:`text`},ariaDescribedBy:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},s={args:{name:`LanguageNone`,value:`de`,children:`German`},render:e=>(0,i.jsxs)(`fieldset`,{children:[(0,i.jsx)(`legend`,{children:`(Default) No validation - choose a language`}),(0,i.jsx)(n,{...e}),(0,i.jsx)(n,{name:`LanguageNone`,value:`en`,children:`English`}),(0,i.jsx)(n,{name:`LanguageNone`,value:`fr`,children:`French`})]})},c={args:{name:`LanguageInvalid`,value:`de`,validation:`invalid`,children:`German`},render:e=>(0,i.jsxs)(`fieldset`,{children:[(0,i.jsx)(`legend`,{children:`Invalid - choose a language`}),(0,i.jsx)(n,{...e}),(0,i.jsx)(n,{name:`LanguageInvalid`,value:`en`,validation:`invalid`,children:`English`}),(0,i.jsx)(n,{name:`LanguageInvalid`,value:`fr`,validation:`invalid`,children:`French`})]})},l={args:{name:`LanguageValid`,value:`de`,validation:`valid`,children:`German`},render:e=>(0,i.jsxs)(`fieldset`,{children:[(0,i.jsx)(`legend`,{children:`Valid - choose a language`}),(0,i.jsx)(n,{...e}),(0,i.jsx)(n,{name:`LanguageValid`,value:`en`,validation:`valid`,checked:!0,children:`English`}),(0,i.jsx)(n,{name:`LanguageValid`,value:`fr`,validation:`valid`,children:`French`})]})},u=[`DefaultNovalidation`,`Invalid`,`Valid`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "LanguageNone",
    "value": "de",
    "children": "German"
  },
  render: (properties: any) => <fieldset><legend>(Default) No validation - choose a language</legend><DBRadio {...properties} /><DBRadio name="LanguageNone" value="en">
                    English
                </DBRadio><DBRadio name="LanguageNone" value="fr">
                    French
                </DBRadio></fieldset>
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "LanguageInvalid",
    "value": "de",
    "validation": "invalid",
    "children": "German"
  },
  render: (properties: any) => <fieldset><legend>Invalid - choose a language</legend><DBRadio {...properties} /><DBRadio name="LanguageInvalid" value="en" validation="invalid">
                    English
                </DBRadio><DBRadio name="LanguageInvalid" value="fr" validation="invalid">
                    French
                </DBRadio></fieldset>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "LanguageValid",
    "value": "de",
    "validation": "valid",
    "children": "German"
  },
  render: (properties: any) => <fieldset><legend>Valid - choose a language</legend><DBRadio {...properties} /><DBRadio name="LanguageValid" value="en" validation="valid" checked>
                    English
                </DBRadio><DBRadio name="LanguageValid" value="fr" validation="valid">
                    French
                </DBRadio></fieldset>
}`,...l.parameters?.docs?.source}}}})))()}d();export{s as DefaultNovalidation,c as Invalid,l as Valid,u as __namedExportsOrder,o as default};
import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{f as t}from"./iframe-CFizpNTJ.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{C as r,T as i,_ as a,b as o,r as s,w as c}from"./utils-jbEOemX3.js";import{n as l,t as u}from"./accordion-item-D3V_S0PT.js";function d(e,t){let n=(0,p.useId)(),i=t||(0,f.useRef)(t),[a,l]=(0,f.useState)(()=>``),[d,h]=(0,f.useState)(()=>!1),[g,_]=(0,f.useState)(()=>!1);return(0,f.useEffect)(()=>{h(!0),_(!0)},[]),(0,f.useEffect)(()=>{d&&i.current&&(e.behavior===`single`?e.name?a!==e.name&&l(e.name):l(`accordion-${n}`):l(``))},[d,e.name,e.behavior]),(0,f.useEffect)(()=>{if(i.current){let e=i.current.getElementsByTagName(`details`);if(e)for(let t of Array.from(e))a===``?t.removeAttribute(`name`):t.name=a??``}},[i.current,a]),(0,f.useEffect)(()=>{if(i.current&&g){if(e?.initOpenIndex&&e.initOpenIndex.length>0){let t=i.current.getElementsByTagName(`details`);if(t){let n=e.behavior===`single`&&e.initOpenIndex.length>1?[e.initOpenIndex[0]]:e.initOpenIndex;Array.from(t).forEach((e,t)=>{n?.includes(t)&&(e.open=!0)})}}_(!1)}},[i.current,g,e.initOpenIndex]),(0,m.jsx)(`ul`,{ref:i,...r(e,[`data-icon-variant`,`data-icon-variant-before`,`data-icon-variant-after`,`data-icon-weight`,`data-icon-weight-before`,`data-icon-weight-after`,`data-interactive`,`data-force-mobile`,`data-color`,`data-container-color`,`data-bg-color`,`data-on-bg-color`,`data-color-scheme`,`data-font-size`,`data-headline-size`,`data-divider`,`data-focus`,`data-font`,`data-density`]),id:e.id??e.propOverrides?.id,...c(e,[`data-icon-variant`,`data-icon-variant-before`,`data-icon-variant-after`,`data-icon-weight`,`data-icon-weight-before`,`data-icon-weight-after`,`data-interactive`,`data-force-mobile`,`data-color`,`data-container-color`,`data-bg-color`,`data-on-bg-color`,`data-color-scheme`,`data-font-size`,`data-headline-size`,`data-divider`,`data-focus`,`data-font`,`data-density`]),className:s(`db-accordion`,e.className),"data-variant":e.variant,children:e.items?(0,m.jsx)(m.Fragment,{children:o(e.items)?.map((e,t)=>(0,m.jsx)(u,{headlinePlain:e.headlinePlain,disabled:e.disabled,text:e.text},`accordion-item-${t}`))}):(0,m.jsx)(m.Fragment,{children:e.children})})}var f,p,m,h;function g(){return(g=e((()=>{t(),i(),f=t(),a(),l(),p=t(),m=n(),h=(0,f.forwardRef)(d),h.__docgenInfo={description:``,methods:[],displayName:`DBAccordion`,props:{initOpenIndex:{required:!1,tsType:{name:`Array`,elements:[{name:`number`}],raw:`number[]`},description:`The index of items which should be open when loading the accordion`},items:{required:!1,tsType:{name:`union`,raw:`DBAccordionItemDefaultProps[] | string`,elements:[{name:`Array`,elements:[{name:`intersection`,raw:`{
  /**
   * Initial state for the accordion item
   */
  defaultOpen?: boolean;
  /**
   * State for the accordion item
   */
  open?: boolean | string;
  /**
   * The disabled attribute can be set to keep a user from clicking on the element.
   */
  disabled?: boolean | string;
  /**
   * Title of the accordion-item as slot
   */
  headline?: any;
  /**
   * Title of the accordion-item as plain text
   */
  headlinePlain?: string;
} & TextProps`,elements:[{name:`signature`,type:`object`,raw:`{
  /**
   * Initial state for the accordion item
   */
  defaultOpen?: boolean;
  /**
   * State for the accordion item
   */
  open?: boolean | string;
  /**
   * The disabled attribute can be set to keep a user from clicking on the element.
   */
  disabled?: boolean | string;
  /**
   * Title of the accordion-item as slot
   */
  headline?: any;
  /**
   * Title of the accordion-item as plain text
   */
  headlinePlain?: string;
}`,signature:{properties:[{key:`defaultOpen`,value:{name:`boolean`,required:!1},description:`Initial state for the accordion item`},{key:`open`,value:{name:`union`,raw:`boolean | string`,elements:[{name:`boolean`},{name:`string`}],required:!1},description:`State for the accordion item`},{key:`disabled`,value:{name:`union`,raw:`boolean | string`,elements:[{name:`boolean`},{name:`string`}],required:!1},description:`The disabled attribute can be set to keep a user from clicking on the element.`},{key:`headline`,value:{name:`any`,required:!1},description:`Title of the accordion-item as slot`},{key:`headlinePlain`,value:{name:`string`,required:!1},description:`Title of the accordion-item as plain text`}]}},{name:`signature`,type:`object`,raw:`{
  /**
   * Alternative for default slot/children. Do not use together with a text children/slot, as both will be rendered and result in duplicate labels.
   */
  text?: string;
}`,signature:{properties:[{key:`text`,value:{name:`string`,required:!1},description:`Alternative for default slot/children. Do not use together with a text children/slot, as both will be rendered and result in duplicate labels.`}]}}]}],raw:`DBAccordionItemDefaultProps[]`},{name:`string`}]},description:`Alternative to pass in a simple representation of accordion items`},name:{required:!1,tsType:{name:`string`},description:`Set details name for exclusive accordions, see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details#name`},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(openAccordionItemIds: string[]) => void`,signature:{arguments:[{type:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},name:`openAccordionItemIds`}],return:{name:`void`}}},description:`Informs about the changes in the internal state, which item is open`},variant:{required:!1,tsType:{name:`unknown[number]`,raw:`(typeof AccordionVariantList)[number]`},description:`Defines the display of the accordion and the items:
"divider": with a dividing line between the items
"card": w/o dividing line, but items are shown in the card variant`},children:{required:!1,tsType:{name:`any`},description:`default slot`},className:{required:!1,tsType:{name:`string`},description:`React specific for adding className to the component.`},class:{required:!1,tsType:{name:`union`,raw:`string | any`,elements:[{name:`string`},{name:`any`}]},description:`Workaround for TypeScript using class for all components.`},id:{required:!1,tsType:{name:`string`},description:`[ID](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id) of the component, generated automatically for some components as a fallback if unset.`},autofocus:{required:!1,tsType:{name:`union`,raw:`boolean | string`,elements:[{name:`boolean`},{name:`string`}]},description:`Before using please check for the [accessibility concerns](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autofocus#accessibility_concerns)`},propOverrides:{required:!1,tsType:{name:`Pick`,elements:[{name:`GlobalProps`},{name:`literal`,value:`'id'`}],raw:`Pick<GlobalProps, 'id'>`},description:`Allows overriding specific props on nested elements or internal component structure. Currently only supports propOverrides.id`},behavior:{required:!1,tsType:{name:`unknown[number]`,raw:`(typeof CollapsibleBehaviorList)[number]`},description:`To allow multiple items open at the same time or only 1 item
@default 'multiple'`}}}})))()}export{g as n,h as t};
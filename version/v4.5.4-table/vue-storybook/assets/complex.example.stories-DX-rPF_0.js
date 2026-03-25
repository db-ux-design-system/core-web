import{_ as n}from"./tooltip-DdSEXsAc.js";import{_ as r}from"./tag-pLFSfp1d.js";import{_ as B,a as i,b,c as T,d as c,e as l}from"./table-GLC2voEl.js";import{_ as s}from"./link-BfaEHrBZ.js";import{_ as C}from"./input-VcXdES3u.js";import{_ as d}from"./infotext-ChOUO4Z5.js";import{_ as p}from"./checkbox-Cg12LPE2.js";import{_ as m}from"./button-eZpQGvA1.js";import"./iframe-DfvinHPj.js";import"./preload-helper-eESElaRw.js";import"./constants-y2N5m1XS.js";import"./index-COCtms_G.js";import"./document-scroll-listener-BYqEBCaA.js";import"./floating-components-CKmcRn_b.js";import"./form-components-B8gyVD2Y.js";const{fn:M}=__STORYBOOK_MODULE_TEST__,A={title:"Components/DBTable/Complex",component:l,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{id:{control:"text"},caption:{control:"text"},captionPlain:{control:"text"},data:{control:"object"},divider:{control:"select",options:["none","both","horizontal","vertical"]},showCaption:{control:"boolean"},size:{control:"select",options:["x-small","small","medium","large"]},variant:{control:"select",options:["joined","zebra","floating"]},mobileVariant:{control:"select",options:["table","list"]},stickyHeader:{control:"select",options:["none","both","horizontal","vertical"]},columnSizes:{control:"object"}}},a={args:{captionPlain:"Joined, sortable columns are Link.",columnSizes:{0:"min-content",6:"min-content"},default:`<DBTableHead
  ><DBTableRow
    ><DBTableHeaderCell scope="col"
      ><DBCheckbox name="joined" :showLabel="false">
        Check All
        <DBTooltip placement="top"> Check All </DBTooltip></DBCheckbox
      ></DBTableHeaderCell
    ><DBTableHeaderCell scope="col"
      ><div
        :style="{
  display: 'flex',
  gap: 'var(--db-spacing-fixed-xs)'
}"
      >
        Link
        <DBButton
          size="small"
          variant="ghost"
          icon="arrows_vertical"
          :noText="true"
        >
          Sort Link
          <DBTooltip placement="top"> Sort Link </DBTooltip></DBButton
        ></div
      ></DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Tag </DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Infotext </DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Text </DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Input </DBTableHeaderCell
    ><DBTableHeaderCell scope="col" horizontalAlignment="end" :noText="true">
      Button
    </DBTableHeaderCell></DBTableRow
  ></DBTableHead
><DBTableBody
  ><DBTableRow :interactive="true"
    ><DBTableHeaderCell scope="row"
      ><DBCheckbox
        data-table-row-action="true"
        name="joined"
        :showLabel="false"
      >
        Check Red
      </DBCheckbox></DBTableHeaderCell
    ><DBTableDataCell
      ><DBLink
        href="#"
        content="external"
        referrerPolicy="no-referrer"
        target="_blank"
        text="Red"
      ></DBLink></DBTableDataCell
    ><DBTableDataCell
      ><DBTag icon="check" semantic="informational">
        Progress
      </DBTag></DBTableDataCell
    ><DBTableDataCell
      ><DBInfotext semantic="critical">15</DBInfotext></DBTableDataCell
    ><DBTableDataCell>Red</DBTableDataCell
    ><DBTableDataCell
      ><DBInput
        label="Red"
        placeholder="Red"
        :showLabel="false"
        :required="true"
      ></DBInput></DBTableDataCell
    ><DBTableDataCell horizontalAlignment="end"
      ><DBButton variant="ghost" icon="more_vertical" :noText="true">
        More
        <DBTooltip placement="left">More</DBTooltip></DBButton
      ></DBTableDataCell
    ></DBTableRow
  ><DBTableRow :interactive="true"
    ><DBTableHeaderCell scope="row"
      ><DBCheckbox
        data-table-row-action="true"
        name="joined"
        :showLabel="false"
      >
        Check Yellow
      </DBCheckbox></DBTableHeaderCell
    ><DBTableDataCell
      ><DBLink
        href="#"
        content="external"
        referrerPolicy="no-referrer"
        target="_blank"
        text="Yellow"
      ></DBLink></DBTableDataCell
    ><DBTableDataCell
      ><DBTag icon="check" semantic="warning"> Open </DBTag></DBTableDataCell
    ><DBTableDataCell
      ><DBInfotext semantic="warning">1</DBInfotext></DBTableDataCell
    ><DBTableDataCell>Yellow</DBTableDataCell
    ><DBTableDataCell
      ><DBInput
        label="Yellow"
        placeholder="Yellow"
        :showLabel="false"
      ></DBInput></DBTableDataCell
    ><DBTableDataCell horizontalAlignment="end"
      ><DBButton variant="ghost" icon="more_vertical" :noText="true">
        More
        <DBTooltip placement="left">More</DBTooltip></DBButton
      ></DBTableDataCell
    ></DBTableRow
  ><DBTableRow :interactive="true"
    ><DBTableHeaderCell scope="row"
      ><DBCheckbox
        data-table-row-action="true"
        name="joined"
        :showLabel="false"
      >
        Check Green
      </DBCheckbox></DBTableHeaderCell
    ><DBTableDataCell
      ><DBLink
        href="#"
        content="external"
        referrerPolicy="no-referrer"
        target="_blank"
        text="Green"
      ></DBLink></DBTableDataCell
    ><DBTableDataCell
      ><DBTag icon="check" semantic="successful"> Done </DBTag></DBTableDataCell
    ><DBTableDataCell></DBTableDataCell><DBTableDataCell>Green</DBTableDataCell
    ><DBTableDataCell
      ><DBInput
        label="Green"
        placeholder="Green"
        :showLabel="false"
      ></DBInput></DBTableDataCell
    ><DBTableDataCell horizontalAlignment="end"
      ><DBButton variant="ghost" icon="more_vertical" :noText="true">
        More
        <DBTooltip placement="left">More</DBTooltip></DBButton
      ></DBTableDataCell
    ></DBTableRow
  ></DBTableBody
>`},render:e=>({components:{DBTable:l,DBButton:m,DBCheckbox:p,DBInfotext:d,DBInput:C,DBLink:s,DBTableBody:c,DBTableDataCell:T,DBTableHead:b,DBTableHeaderCell:i,DBTableRow:B,DBTag:r,DBTooltip:n},setup(){return{args:e}},template:`<div  :style="{
  maxInlineSize: '100%',
  inlineSize: '1000px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 'var(--db-spacing-fixed-md)'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    Joined
                </DBInfotext><DBTable v-bind="args"   >${e.default}</DBTable></div>`})},t={args:{variant:"zebra",captionPlain:"Zebra, sortable columns are Link.",columnSizes:{0:"min-content",6:"min-content"},default:`<DBTableHead
  ><DBTableRow
    ><DBTableHeaderCell scope="col"
      ><DBCheckbox name="zebra" :showLabel="false">
        Check All
        <DBTooltip placement="top"> Check All </DBTooltip></DBCheckbox
      ></DBTableHeaderCell
    ><DBTableHeaderCell scope="col"
      ><div
        :style="{
  display: 'flex',
  gap: 'var(--db-spacing-fixed-xs)'
}"
      >
        Link
        <DBButton
          size="small"
          variant="ghost"
          icon="arrows_vertical"
          :noText="true"
        >
          Sort Link
          <DBTooltip placement="top"> Sort Link </DBTooltip></DBButton
        ></div
      ></DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Tag </DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Infotext </DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Text </DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Input </DBTableHeaderCell
    ><DBTableHeaderCell scope="col" horizontalAlignment="end" :noText="true">
      Button
    </DBTableHeaderCell></DBTableRow
  ></DBTableHead
><DBTableBody
  ><DBTableRow :interactive="true"
    ><DBTableHeaderCell scope="row"
      ><DBCheckbox data-table-row-action="true" name="zebra" :showLabel="false">
        Check Red
      </DBCheckbox></DBTableHeaderCell
    ><DBTableDataCell
      ><DBLink
        href="#"
        content="external"
        referrerPolicy="no-referrer"
        target="_blank"
        text="Red"
      ></DBLink></DBTableDataCell
    ><DBTableDataCell
      ><DBTag icon="check" semantic="informational">
        Progress
      </DBTag></DBTableDataCell
    ><DBTableDataCell
      ><DBInfotext semantic="critical">15</DBInfotext></DBTableDataCell
    ><DBTableDataCell>Red</DBTableDataCell
    ><DBTableDataCell
      ><DBInput
        label="Red"
        placeholder="Red"
        :showLabel="false"
        :required="true"
      ></DBInput></DBTableDataCell
    ><DBTableDataCell horizontalAlignment="end"
      ><DBButton variant="ghost" icon="more_vertical" :noText="true">
        More
        <DBTooltip placement="left">More</DBTooltip></DBButton
      ></DBTableDataCell
    ></DBTableRow
  ><DBTableRow :interactive="true"
    ><DBTableHeaderCell scope="row"
      ><DBCheckbox data-table-row-action="true" name="zebra" :showLabel="false">
        Check Yellow
      </DBCheckbox></DBTableHeaderCell
    ><DBTableDataCell
      ><DBLink
        href="#"
        content="external"
        referrerPolicy="no-referrer"
        target="_blank"
        text="Yellow"
      ></DBLink></DBTableDataCell
    ><DBTableDataCell
      ><DBTag icon="check" semantic="warning"> Open </DBTag></DBTableDataCell
    ><DBTableDataCell
      ><DBInfotext semantic="warning">1</DBInfotext></DBTableDataCell
    ><DBTableDataCell>Yellow</DBTableDataCell
    ><DBTableDataCell
      ><DBInput
        label="Yellow"
        placeholder="Yellow"
        :showLabel="false"
      ></DBInput></DBTableDataCell
    ><DBTableDataCell horizontalAlignment="end"
      ><DBButton variant="ghost" icon="more_vertical" :noText="true">
        More
        <DBTooltip placement="left">More</DBTooltip></DBButton
      ></DBTableDataCell
    ></DBTableRow
  ><DBTableRow :interactive="true"
    ><DBTableHeaderCell scope="row"
      ><DBCheckbox data-table-row-action="true" name="zebra" :showLabel="false">
        Check Green
      </DBCheckbox></DBTableHeaderCell
    ><DBTableDataCell
      ><DBLink
        href="#"
        content="external"
        referrerPolicy="no-referrer"
        target="_blank"
        text="Green"
      ></DBLink></DBTableDataCell
    ><DBTableDataCell
      ><DBTag icon="check" semantic="successful"> Done </DBTag></DBTableDataCell
    ><DBTableDataCell></DBTableDataCell><DBTableDataCell>Green</DBTableDataCell
    ><DBTableDataCell
      ><DBInput
        label="Green"
        placeholder="Green"
        :showLabel="false"
      ></DBInput></DBTableDataCell
    ><DBTableDataCell horizontalAlignment="end"
      ><DBButton variant="ghost" icon="more_vertical" :noText="true">
        More
        <DBTooltip placement="left">More</DBTooltip></DBButton
      ></DBTableDataCell
    ></DBTableRow
  ></DBTableBody
>`},render:e=>({components:{DBTable:l,DBButton:m,DBCheckbox:p,DBInfotext:d,DBInput:C,DBLink:s,DBTableBody:c,DBTableDataCell:T,DBTableHead:b,DBTableHeaderCell:i,DBTableRow:B,DBTag:r,DBTooltip:n},setup(){return{args:e}},template:`<div  :style="{
  maxInlineSize: '100%',
  inlineSize: '1000px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 'var(--db-spacing-fixed-md)'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    Zebra
                </DBInfotext><DBTable v-bind="args"   >${e.default}</DBTable></div>`})},o={args:{variant:"floating",captionPlain:"Floating, sortable columns are Link.",columnSizes:{0:"min-content",6:"min-content"},default:`<DBTableHead
  ><DBTableRow
    ><DBTableHeaderCell scope="col"
      ><DBCheckbox name="floating" :showLabel="false">
        Check All
        <DBTooltip placement="top"> Check All </DBTooltip></DBCheckbox
      ></DBTableHeaderCell
    ><DBTableHeaderCell scope="col"
      ><div
        :style="{
  display: 'flex',
  gap: 'var(--db-spacing-fixed-xs)'
}"
      >
        Link
        <DBButton
          size="small"
          variant="ghost"
          icon="arrows_vertical"
          :noText="true"
        >
          Sort Link
          <DBTooltip placement="top"> Sort Link </DBTooltip></DBButton
        ></div
      ></DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Tag </DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Infotext </DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Text </DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Input </DBTableHeaderCell
    ><DBTableHeaderCell scope="col" horizontalAlignment="end" :noText="true">
      Button
    </DBTableHeaderCell></DBTableRow
  ></DBTableHead
><DBTableBody
  ><DBTableRow :interactive="true"
    ><DBTableHeaderCell scope="row"
      ><DBCheckbox
        data-table-row-action="true"
        name="floating"
        :showLabel="false"
      >
        Check Red
      </DBCheckbox></DBTableHeaderCell
    ><DBTableDataCell
      ><DBLink
        href="#"
        content="external"
        referrerPolicy="no-referrer"
        target="_blank"
        text="Red"
      ></DBLink></DBTableDataCell
    ><DBTableDataCell
      ><DBTag icon="check" semantic="informational">
        Progress
      </DBTag></DBTableDataCell
    ><DBTableDataCell
      ><DBInfotext semantic="critical">15</DBInfotext></DBTableDataCell
    ><DBTableDataCell>Red</DBTableDataCell
    ><DBTableDataCell
      ><DBInput
        label="Red"
        placeholder="Red"
        :showLabel="false"
        :required="true"
      ></DBInput></DBTableDataCell
    ><DBTableDataCell horizontalAlignment="end"
      ><DBButton variant="ghost" icon="more_vertical" :noText="true">
        More
        <DBTooltip placement="left">More</DBTooltip></DBButton
      ></DBTableDataCell
    ></DBTableRow
  ><DBTableRow :interactive="true"
    ><DBTableHeaderCell scope="row"
      ><DBCheckbox
        data-table-row-action="true"
        name="floating"
        :showLabel="false"
      >
        Check Yellow
      </DBCheckbox></DBTableHeaderCell
    ><DBTableDataCell
      ><DBLink
        href="#"
        content="external"
        referrerPolicy="no-referrer"
        target="_blank"
        text="Yellow"
      ></DBLink></DBTableDataCell
    ><DBTableDataCell
      ><DBTag icon="check" semantic="warning"> Open </DBTag></DBTableDataCell
    ><DBTableDataCell
      ><DBInfotext semantic="warning">1</DBInfotext></DBTableDataCell
    ><DBTableDataCell>Yellow</DBTableDataCell
    ><DBTableDataCell
      ><DBInput
        label="Yellow"
        placeholder="Yellow"
        :showLabel="false"
      ></DBInput></DBTableDataCell
    ><DBTableDataCell horizontalAlignment="end"
      ><DBButton variant="ghost" icon="more_vertical" :noText="true">
        More
        <DBTooltip placement="left">More</DBTooltip></DBButton
      ></DBTableDataCell
    ></DBTableRow
  ><DBTableRow :interactive="true"
    ><DBTableHeaderCell scope="row"
      ><DBCheckbox
        data-table-row-action="true"
        name="floating"
        :showLabel="false"
      >
        Check Green
      </DBCheckbox></DBTableHeaderCell
    ><DBTableDataCell
      ><DBLink
        href="#"
        content="external"
        referrerPolicy="no-referrer"
        target="_blank"
        text="Green"
      ></DBLink></DBTableDataCell
    ><DBTableDataCell
      ><DBTag icon="check" semantic="successful"> Done </DBTag></DBTableDataCell
    ><DBTableDataCell></DBTableDataCell><DBTableDataCell>Green</DBTableDataCell
    ><DBTableDataCell
      ><DBInput
        label="Green"
        placeholder="Green"
        :showLabel="false"
      ></DBInput></DBTableDataCell
    ><DBTableDataCell horizontalAlignment="end"
      ><DBButton variant="ghost" icon="more_vertical" :noText="true">
        More
        <DBTooltip placement="left">More</DBTooltip></DBButton
      ></DBTableDataCell
    ></DBTableRow
  ></DBTableBody
>`},render:e=>({components:{DBTable:l,DBButton:m,DBCheckbox:p,DBInfotext:d,DBInput:C,DBLink:s,DBTableBody:c,DBTableDataCell:T,DBTableHead:b,DBTableHeaderCell:i,DBTableRow:B,DBTag:r,DBTooltip:n},setup(){return{args:e}},template:`<div  :style="{
  maxInlineSize: '100%',
  inlineSize: '1000px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 'var(--db-spacing-fixed-md)'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    Floating
                </DBInfotext><DBTable v-bind="args"   >${e.default}</DBTable></div>`})},D={args:{variant:"floating",mobileVariant:"list",captionPlain:"Mobile variant: List, sortable columns are Link.",columnSizes:{0:"min-content",6:"min-content"},default:`<DBTableHead
  ><DBTableRow
    ><DBTableHeaderCell scope="col"
      ><DBCheckbox name="list" :showLabel="false">
        Check All
        <DBTooltip placement="top"> Check All </DBTooltip></DBCheckbox
      ></DBTableHeaderCell
    ><DBTableHeaderCell scope="col"
      ><div
        :style="{
  display: 'flex',
  gap: 'var(--db-spacing-fixed-xs)'
}"
      >
        Link
        <DBButton
          size="small"
          variant="ghost"
          icon="arrows_vertical"
          :noText="true"
        >
          Sort Link
          <DBTooltip placement="top"> Sort Link </DBTooltip></DBButton
        ></div
      ></DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Tag </DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Infotext </DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Text </DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Input </DBTableHeaderCell
    ><DBTableHeaderCell scope="col" horizontalAlignment="end" :noText="true">
      Button
    </DBTableHeaderCell></DBTableRow
  ></DBTableHead
><DBTableBody
  ><DBTableRow :interactive="true"
    ><DBTableHeaderCell scope="row" data-header="Check"
      ><DBCheckbox data-table-row-action="true" name="list" :showLabel="false">
        Check Red
      </DBCheckbox></DBTableHeaderCell
    ><DBTableDataCell data-header="Link"
      ><DBLink
        href="#"
        content="external"
        referrerPolicy="no-referrer"
        target="_blank"
        text="Red"
      ></DBLink></DBTableDataCell
    ><DBTableDataCell
      ><DBTag icon="check" semantic="informational">
        Progress
      </DBTag></DBTableDataCell
    ><DBTableDataCell
      ><DBInfotext semantic="critical">15</DBInfotext></DBTableDataCell
    ><DBTableDataCell>Red</DBTableDataCell
    ><DBTableDataCell
      ><DBInput
        label="Red"
        placeholder="Red"
        :showLabel="false"
        :required="true"
      ></DBInput></DBTableDataCell
    ><DBTableDataCell horizontalAlignment="end"
      ><DBButton variant="ghost" icon="more_vertical" :noText="true">
        More
        <DBTooltip placement="left">More</DBTooltip></DBButton
      ></DBTableDataCell
    ></DBTableRow
  ><DBTableRow :interactive="true"
    ><DBTableHeaderCell scope="row" data-header="Check"
      ><DBCheckbox data-table-row-action="true" name="list" :showLabel="false">
        Check Yellow
      </DBCheckbox></DBTableHeaderCell
    ><DBTableDataCell data-header="Link"
      ><DBLink
        href="#"
        content="external"
        referrerPolicy="no-referrer"
        target="_blank"
        text="Yellow"
      ></DBLink></DBTableDataCell
    ><DBTableDataCell
      ><DBTag icon="check" semantic="warning"> Open </DBTag></DBTableDataCell
    ><DBTableDataCell
      ><DBInfotext semantic="warning">1</DBInfotext></DBTableDataCell
    ><DBTableDataCell>Yellow</DBTableDataCell
    ><DBTableDataCell
      ><DBInput
        label="Yellow"
        placeholder="Yellow"
        :showLabel="false"
      ></DBInput></DBTableDataCell
    ><DBTableDataCell horizontalAlignment="end"
      ><DBButton variant="ghost" icon="more_vertical" :noText="true">
        More
        <DBTooltip placement="left">More</DBTooltip></DBButton
      ></DBTableDataCell
    ></DBTableRow
  ><DBTableRow :interactive="true"
    ><DBTableHeaderCell scope="row" data-header="Check"
      ><DBCheckbox data-table-row-action="true" name="list" :showLabel="false">
        Check Green
      </DBCheckbox></DBTableHeaderCell
    ><DBTableDataCell data-header="Link"
      ><DBLink
        href="#"
        content="external"
        referrerPolicy="no-referrer"
        target="_blank"
        text="Green"
      ></DBLink></DBTableDataCell
    ><DBTableDataCell
      ><DBTag icon="check" semantic="successful"> Done </DBTag></DBTableDataCell
    ><DBTableDataCell></DBTableDataCell><DBTableDataCell>Green</DBTableDataCell
    ><DBTableDataCell
      ><DBInput
        label="Green"
        placeholder="Green"
        :showLabel="false"
      ></DBInput></DBTableDataCell
    ><DBTableDataCell horizontalAlignment="end"
      ><DBButton variant="ghost" icon="more_vertical" :noText="true">
        More
        <DBTooltip placement="left">More</DBTooltip></DBButton
      ></DBTableDataCell
    ></DBTableRow
  ></DBTableBody
>`},render:e=>({components:{DBTable:l,DBButton:m,DBCheckbox:p,DBInfotext:d,DBInput:C,DBLink:s,DBTableBody:c,DBTableDataCell:T,DBTableHead:b,DBTableHeaderCell:i,DBTableRow:B,DBTag:r,DBTooltip:n},setup(){return{args:e}},template:`<div  :style="{
  inlineSize: '300px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 'var(--db-spacing-fixed-md)'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    Mobile variant: List
                </DBInfotext><DBTable v-bind="args"   >${e.default}</DBTable></div>`})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "captionPlain": "Joined, sortable columns are Link.",
    "columnSizes": {
      0: 'min-content',
      6: 'min-content'
    },
    "default": \`<DBTableHead
  ><DBTableRow
    ><DBTableHeaderCell scope="col"
      ><DBCheckbox name="joined" :showLabel="false">
        Check All
        <DBTooltip placement="top"> Check All </DBTooltip></DBCheckbox
      ></DBTableHeaderCell
    ><DBTableHeaderCell scope="col"
      ><div
        :style="{
  display: 'flex',
  gap: 'var(--db-spacing-fixed-xs)'
}"
      >
        Link
        <DBButton
          size="small"
          variant="ghost"
          icon="arrows_vertical"
          :noText="true"
        >
          Sort Link
          <DBTooltip placement="top"> Sort Link </DBTooltip></DBButton
        ></div
      ></DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Tag </DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Infotext </DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Text </DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Input </DBTableHeaderCell
    ><DBTableHeaderCell scope="col" horizontalAlignment="end" :noText="true">
      Button
    </DBTableHeaderCell></DBTableRow
  ></DBTableHead
><DBTableBody
  ><DBTableRow :interactive="true"
    ><DBTableHeaderCell scope="row"
      ><DBCheckbox
        data-table-row-action="true"
        name="joined"
        :showLabel="false"
      >
        Check Red
      </DBCheckbox></DBTableHeaderCell
    ><DBTableDataCell
      ><DBLink
        href="#"
        content="external"
        referrerPolicy="no-referrer"
        target="_blank"
        text="Red"
      ></DBLink></DBTableDataCell
    ><DBTableDataCell
      ><DBTag icon="check" semantic="informational">
        Progress
      </DBTag></DBTableDataCell
    ><DBTableDataCell
      ><DBInfotext semantic="critical">15</DBInfotext></DBTableDataCell
    ><DBTableDataCell>Red</DBTableDataCell
    ><DBTableDataCell
      ><DBInput
        label="Red"
        placeholder="Red"
        :showLabel="false"
        :required="true"
      ></DBInput></DBTableDataCell
    ><DBTableDataCell horizontalAlignment="end"
      ><DBButton variant="ghost" icon="more_vertical" :noText="true">
        More
        <DBTooltip placement="left">More</DBTooltip></DBButton
      ></DBTableDataCell
    ></DBTableRow
  ><DBTableRow :interactive="true"
    ><DBTableHeaderCell scope="row"
      ><DBCheckbox
        data-table-row-action="true"
        name="joined"
        :showLabel="false"
      >
        Check Yellow
      </DBCheckbox></DBTableHeaderCell
    ><DBTableDataCell
      ><DBLink
        href="#"
        content="external"
        referrerPolicy="no-referrer"
        target="_blank"
        text="Yellow"
      ></DBLink></DBTableDataCell
    ><DBTableDataCell
      ><DBTag icon="check" semantic="warning"> Open </DBTag></DBTableDataCell
    ><DBTableDataCell
      ><DBInfotext semantic="warning">1</DBInfotext></DBTableDataCell
    ><DBTableDataCell>Yellow</DBTableDataCell
    ><DBTableDataCell
      ><DBInput
        label="Yellow"
        placeholder="Yellow"
        :showLabel="false"
      ></DBInput></DBTableDataCell
    ><DBTableDataCell horizontalAlignment="end"
      ><DBButton variant="ghost" icon="more_vertical" :noText="true">
        More
        <DBTooltip placement="left">More</DBTooltip></DBButton
      ></DBTableDataCell
    ></DBTableRow
  ><DBTableRow :interactive="true"
    ><DBTableHeaderCell scope="row"
      ><DBCheckbox
        data-table-row-action="true"
        name="joined"
        :showLabel="false"
      >
        Check Green
      </DBCheckbox></DBTableHeaderCell
    ><DBTableDataCell
      ><DBLink
        href="#"
        content="external"
        referrerPolicy="no-referrer"
        target="_blank"
        text="Green"
      ></DBLink></DBTableDataCell
    ><DBTableDataCell
      ><DBTag icon="check" semantic="successful"> Done </DBTag></DBTableDataCell
    ><DBTableDataCell></DBTableDataCell><DBTableDataCell>Green</DBTableDataCell
    ><DBTableDataCell
      ><DBInput
        label="Green"
        placeholder="Green"
        :showLabel="false"
      ></DBInput></DBTableDataCell
    ><DBTableDataCell horizontalAlignment="end"
      ><DBButton variant="ghost" icon="more_vertical" :noText="true">
        More
        <DBTooltip placement="left">More</DBTooltip></DBButton
      ></DBTableDataCell
    ></DBTableRow
  ></DBTableBody
>\`
  },
  render: (args: any) => ({
    components: {
      DBTable,
      DBButton,
      DBCheckbox,
      DBInfotext,
      DBInput,
      DBLink,
      DBTableBody,
      DBTableDataCell,
      DBTableHead,
      DBTableHeaderCell,
      DBTableRow,
      DBTag,
      DBTooltip
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  maxInlineSize: '100%',
  inlineSize: '1000px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 'var(--db-spacing-fixed-md)'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    Joined
                </DBInfotext><DBTable v-bind="args"   >\${args.default}</DBTable></div>\`
  })
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "zebra",
    "captionPlain": "Zebra, sortable columns are Link.",
    "columnSizes": {
      0: 'min-content',
      6: 'min-content'
    },
    "default": \`<DBTableHead
  ><DBTableRow
    ><DBTableHeaderCell scope="col"
      ><DBCheckbox name="zebra" :showLabel="false">
        Check All
        <DBTooltip placement="top"> Check All </DBTooltip></DBCheckbox
      ></DBTableHeaderCell
    ><DBTableHeaderCell scope="col"
      ><div
        :style="{
  display: 'flex',
  gap: 'var(--db-spacing-fixed-xs)'
}"
      >
        Link
        <DBButton
          size="small"
          variant="ghost"
          icon="arrows_vertical"
          :noText="true"
        >
          Sort Link
          <DBTooltip placement="top"> Sort Link </DBTooltip></DBButton
        ></div
      ></DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Tag </DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Infotext </DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Text </DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Input </DBTableHeaderCell
    ><DBTableHeaderCell scope="col" horizontalAlignment="end" :noText="true">
      Button
    </DBTableHeaderCell></DBTableRow
  ></DBTableHead
><DBTableBody
  ><DBTableRow :interactive="true"
    ><DBTableHeaderCell scope="row"
      ><DBCheckbox data-table-row-action="true" name="zebra" :showLabel="false">
        Check Red
      </DBCheckbox></DBTableHeaderCell
    ><DBTableDataCell
      ><DBLink
        href="#"
        content="external"
        referrerPolicy="no-referrer"
        target="_blank"
        text="Red"
      ></DBLink></DBTableDataCell
    ><DBTableDataCell
      ><DBTag icon="check" semantic="informational">
        Progress
      </DBTag></DBTableDataCell
    ><DBTableDataCell
      ><DBInfotext semantic="critical">15</DBInfotext></DBTableDataCell
    ><DBTableDataCell>Red</DBTableDataCell
    ><DBTableDataCell
      ><DBInput
        label="Red"
        placeholder="Red"
        :showLabel="false"
        :required="true"
      ></DBInput></DBTableDataCell
    ><DBTableDataCell horizontalAlignment="end"
      ><DBButton variant="ghost" icon="more_vertical" :noText="true">
        More
        <DBTooltip placement="left">More</DBTooltip></DBButton
      ></DBTableDataCell
    ></DBTableRow
  ><DBTableRow :interactive="true"
    ><DBTableHeaderCell scope="row"
      ><DBCheckbox data-table-row-action="true" name="zebra" :showLabel="false">
        Check Yellow
      </DBCheckbox></DBTableHeaderCell
    ><DBTableDataCell
      ><DBLink
        href="#"
        content="external"
        referrerPolicy="no-referrer"
        target="_blank"
        text="Yellow"
      ></DBLink></DBTableDataCell
    ><DBTableDataCell
      ><DBTag icon="check" semantic="warning"> Open </DBTag></DBTableDataCell
    ><DBTableDataCell
      ><DBInfotext semantic="warning">1</DBInfotext></DBTableDataCell
    ><DBTableDataCell>Yellow</DBTableDataCell
    ><DBTableDataCell
      ><DBInput
        label="Yellow"
        placeholder="Yellow"
        :showLabel="false"
      ></DBInput></DBTableDataCell
    ><DBTableDataCell horizontalAlignment="end"
      ><DBButton variant="ghost" icon="more_vertical" :noText="true">
        More
        <DBTooltip placement="left">More</DBTooltip></DBButton
      ></DBTableDataCell
    ></DBTableRow
  ><DBTableRow :interactive="true"
    ><DBTableHeaderCell scope="row"
      ><DBCheckbox data-table-row-action="true" name="zebra" :showLabel="false">
        Check Green
      </DBCheckbox></DBTableHeaderCell
    ><DBTableDataCell
      ><DBLink
        href="#"
        content="external"
        referrerPolicy="no-referrer"
        target="_blank"
        text="Green"
      ></DBLink></DBTableDataCell
    ><DBTableDataCell
      ><DBTag icon="check" semantic="successful"> Done </DBTag></DBTableDataCell
    ><DBTableDataCell></DBTableDataCell><DBTableDataCell>Green</DBTableDataCell
    ><DBTableDataCell
      ><DBInput
        label="Green"
        placeholder="Green"
        :showLabel="false"
      ></DBInput></DBTableDataCell
    ><DBTableDataCell horizontalAlignment="end"
      ><DBButton variant="ghost" icon="more_vertical" :noText="true">
        More
        <DBTooltip placement="left">More</DBTooltip></DBButton
      ></DBTableDataCell
    ></DBTableRow
  ></DBTableBody
>\`
  },
  render: (args: any) => ({
    components: {
      DBTable,
      DBButton,
      DBCheckbox,
      DBInfotext,
      DBInput,
      DBLink,
      DBTableBody,
      DBTableDataCell,
      DBTableHead,
      DBTableHeaderCell,
      DBTableRow,
      DBTag,
      DBTooltip
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  maxInlineSize: '100%',
  inlineSize: '1000px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 'var(--db-spacing-fixed-md)'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    Zebra
                </DBInfotext><DBTable v-bind="args"   >\${args.default}</DBTable></div>\`
  })
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "floating",
    "captionPlain": "Floating, sortable columns are Link.",
    "columnSizes": {
      0: 'min-content',
      6: 'min-content'
    },
    "default": \`<DBTableHead
  ><DBTableRow
    ><DBTableHeaderCell scope="col"
      ><DBCheckbox name="floating" :showLabel="false">
        Check All
        <DBTooltip placement="top"> Check All </DBTooltip></DBCheckbox
      ></DBTableHeaderCell
    ><DBTableHeaderCell scope="col"
      ><div
        :style="{
  display: 'flex',
  gap: 'var(--db-spacing-fixed-xs)'
}"
      >
        Link
        <DBButton
          size="small"
          variant="ghost"
          icon="arrows_vertical"
          :noText="true"
        >
          Sort Link
          <DBTooltip placement="top"> Sort Link </DBTooltip></DBButton
        ></div
      ></DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Tag </DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Infotext </DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Text </DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Input </DBTableHeaderCell
    ><DBTableHeaderCell scope="col" horizontalAlignment="end" :noText="true">
      Button
    </DBTableHeaderCell></DBTableRow
  ></DBTableHead
><DBTableBody
  ><DBTableRow :interactive="true"
    ><DBTableHeaderCell scope="row"
      ><DBCheckbox
        data-table-row-action="true"
        name="floating"
        :showLabel="false"
      >
        Check Red
      </DBCheckbox></DBTableHeaderCell
    ><DBTableDataCell
      ><DBLink
        href="#"
        content="external"
        referrerPolicy="no-referrer"
        target="_blank"
        text="Red"
      ></DBLink></DBTableDataCell
    ><DBTableDataCell
      ><DBTag icon="check" semantic="informational">
        Progress
      </DBTag></DBTableDataCell
    ><DBTableDataCell
      ><DBInfotext semantic="critical">15</DBInfotext></DBTableDataCell
    ><DBTableDataCell>Red</DBTableDataCell
    ><DBTableDataCell
      ><DBInput
        label="Red"
        placeholder="Red"
        :showLabel="false"
        :required="true"
      ></DBInput></DBTableDataCell
    ><DBTableDataCell horizontalAlignment="end"
      ><DBButton variant="ghost" icon="more_vertical" :noText="true">
        More
        <DBTooltip placement="left">More</DBTooltip></DBButton
      ></DBTableDataCell
    ></DBTableRow
  ><DBTableRow :interactive="true"
    ><DBTableHeaderCell scope="row"
      ><DBCheckbox
        data-table-row-action="true"
        name="floating"
        :showLabel="false"
      >
        Check Yellow
      </DBCheckbox></DBTableHeaderCell
    ><DBTableDataCell
      ><DBLink
        href="#"
        content="external"
        referrerPolicy="no-referrer"
        target="_blank"
        text="Yellow"
      ></DBLink></DBTableDataCell
    ><DBTableDataCell
      ><DBTag icon="check" semantic="warning"> Open </DBTag></DBTableDataCell
    ><DBTableDataCell
      ><DBInfotext semantic="warning">1</DBInfotext></DBTableDataCell
    ><DBTableDataCell>Yellow</DBTableDataCell
    ><DBTableDataCell
      ><DBInput
        label="Yellow"
        placeholder="Yellow"
        :showLabel="false"
      ></DBInput></DBTableDataCell
    ><DBTableDataCell horizontalAlignment="end"
      ><DBButton variant="ghost" icon="more_vertical" :noText="true">
        More
        <DBTooltip placement="left">More</DBTooltip></DBButton
      ></DBTableDataCell
    ></DBTableRow
  ><DBTableRow :interactive="true"
    ><DBTableHeaderCell scope="row"
      ><DBCheckbox
        data-table-row-action="true"
        name="floating"
        :showLabel="false"
      >
        Check Green
      </DBCheckbox></DBTableHeaderCell
    ><DBTableDataCell
      ><DBLink
        href="#"
        content="external"
        referrerPolicy="no-referrer"
        target="_blank"
        text="Green"
      ></DBLink></DBTableDataCell
    ><DBTableDataCell
      ><DBTag icon="check" semantic="successful"> Done </DBTag></DBTableDataCell
    ><DBTableDataCell></DBTableDataCell><DBTableDataCell>Green</DBTableDataCell
    ><DBTableDataCell
      ><DBInput
        label="Green"
        placeholder="Green"
        :showLabel="false"
      ></DBInput></DBTableDataCell
    ><DBTableDataCell horizontalAlignment="end"
      ><DBButton variant="ghost" icon="more_vertical" :noText="true">
        More
        <DBTooltip placement="left">More</DBTooltip></DBButton
      ></DBTableDataCell
    ></DBTableRow
  ></DBTableBody
>\`
  },
  render: (args: any) => ({
    components: {
      DBTable,
      DBButton,
      DBCheckbox,
      DBInfotext,
      DBInput,
      DBLink,
      DBTableBody,
      DBTableDataCell,
      DBTableHead,
      DBTableHeaderCell,
      DBTableRow,
      DBTag,
      DBTooltip
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  maxInlineSize: '100%',
  inlineSize: '1000px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 'var(--db-spacing-fixed-md)'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    Floating
                </DBInfotext><DBTable v-bind="args"   >\${args.default}</DBTable></div>\`
  })
}`,...o.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "floating",
    "mobileVariant": "list",
    "captionPlain": "Mobile variant: List, sortable columns are Link.",
    "columnSizes": {
      0: 'min-content',
      6: 'min-content'
    },
    "default": \`<DBTableHead
  ><DBTableRow
    ><DBTableHeaderCell scope="col"
      ><DBCheckbox name="list" :showLabel="false">
        Check All
        <DBTooltip placement="top"> Check All </DBTooltip></DBCheckbox
      ></DBTableHeaderCell
    ><DBTableHeaderCell scope="col"
      ><div
        :style="{
  display: 'flex',
  gap: 'var(--db-spacing-fixed-xs)'
}"
      >
        Link
        <DBButton
          size="small"
          variant="ghost"
          icon="arrows_vertical"
          :noText="true"
        >
          Sort Link
          <DBTooltip placement="top"> Sort Link </DBTooltip></DBButton
        ></div
      ></DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Tag </DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Infotext </DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Text </DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Input </DBTableHeaderCell
    ><DBTableHeaderCell scope="col" horizontalAlignment="end" :noText="true">
      Button
    </DBTableHeaderCell></DBTableRow
  ></DBTableHead
><DBTableBody
  ><DBTableRow :interactive="true"
    ><DBTableHeaderCell scope="row" data-header="Check"
      ><DBCheckbox data-table-row-action="true" name="list" :showLabel="false">
        Check Red
      </DBCheckbox></DBTableHeaderCell
    ><DBTableDataCell data-header="Link"
      ><DBLink
        href="#"
        content="external"
        referrerPolicy="no-referrer"
        target="_blank"
        text="Red"
      ></DBLink></DBTableDataCell
    ><DBTableDataCell
      ><DBTag icon="check" semantic="informational">
        Progress
      </DBTag></DBTableDataCell
    ><DBTableDataCell
      ><DBInfotext semantic="critical">15</DBInfotext></DBTableDataCell
    ><DBTableDataCell>Red</DBTableDataCell
    ><DBTableDataCell
      ><DBInput
        label="Red"
        placeholder="Red"
        :showLabel="false"
        :required="true"
      ></DBInput></DBTableDataCell
    ><DBTableDataCell horizontalAlignment="end"
      ><DBButton variant="ghost" icon="more_vertical" :noText="true">
        More
        <DBTooltip placement="left">More</DBTooltip></DBButton
      ></DBTableDataCell
    ></DBTableRow
  ><DBTableRow :interactive="true"
    ><DBTableHeaderCell scope="row" data-header="Check"
      ><DBCheckbox data-table-row-action="true" name="list" :showLabel="false">
        Check Yellow
      </DBCheckbox></DBTableHeaderCell
    ><DBTableDataCell data-header="Link"
      ><DBLink
        href="#"
        content="external"
        referrerPolicy="no-referrer"
        target="_blank"
        text="Yellow"
      ></DBLink></DBTableDataCell
    ><DBTableDataCell
      ><DBTag icon="check" semantic="warning"> Open </DBTag></DBTableDataCell
    ><DBTableDataCell
      ><DBInfotext semantic="warning">1</DBInfotext></DBTableDataCell
    ><DBTableDataCell>Yellow</DBTableDataCell
    ><DBTableDataCell
      ><DBInput
        label="Yellow"
        placeholder="Yellow"
        :showLabel="false"
      ></DBInput></DBTableDataCell
    ><DBTableDataCell horizontalAlignment="end"
      ><DBButton variant="ghost" icon="more_vertical" :noText="true">
        More
        <DBTooltip placement="left">More</DBTooltip></DBButton
      ></DBTableDataCell
    ></DBTableRow
  ><DBTableRow :interactive="true"
    ><DBTableHeaderCell scope="row" data-header="Check"
      ><DBCheckbox data-table-row-action="true" name="list" :showLabel="false">
        Check Green
      </DBCheckbox></DBTableHeaderCell
    ><DBTableDataCell data-header="Link"
      ><DBLink
        href="#"
        content="external"
        referrerPolicy="no-referrer"
        target="_blank"
        text="Green"
      ></DBLink></DBTableDataCell
    ><DBTableDataCell
      ><DBTag icon="check" semantic="successful"> Done </DBTag></DBTableDataCell
    ><DBTableDataCell></DBTableDataCell><DBTableDataCell>Green</DBTableDataCell
    ><DBTableDataCell
      ><DBInput
        label="Green"
        placeholder="Green"
        :showLabel="false"
      ></DBInput></DBTableDataCell
    ><DBTableDataCell horizontalAlignment="end"
      ><DBButton variant="ghost" icon="more_vertical" :noText="true">
        More
        <DBTooltip placement="left">More</DBTooltip></DBButton
      ></DBTableDataCell
    ></DBTableRow
  ></DBTableBody
>\`
  },
  render: (args: any) => ({
    components: {
      DBTable,
      DBButton,
      DBCheckbox,
      DBInfotext,
      DBInput,
      DBLink,
      DBTableBody,
      DBTableDataCell,
      DBTableHead,
      DBTableHeaderCell,
      DBTableRow,
      DBTag,
      DBTooltip
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  inlineSize: '300px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 'var(--db-spacing-fixed-md)'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    Mobile variant: List
                </DBInfotext><DBTable v-bind="args"   >\${args.default}</DBTable></div>\`
  })
}`,...D.parameters?.docs?.source}}};const S=["Joined","Zebra","Floating","MobilevariantList"];export{o as Floating,a as Joined,D as MobilevariantList,t as Zebra,S as __namedExportsOrder,A as default};

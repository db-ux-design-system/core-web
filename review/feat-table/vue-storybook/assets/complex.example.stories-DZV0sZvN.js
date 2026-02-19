import{_ as l,a as n,b as B,c as r,d as b,e as i}from"./table-CE9_Q-_X.js";import{_ as T}from"./tooltip-Dpl0FtWm.js";import{_ as c}from"./tag-IU0bjHW3.js";import{_ as C}from"./link-H9yPzYEJ.js";import{_ as s}from"./input-XwWi8TRz.js";import{_ as d}from"./infotext-XdHZNR5b.js";import{_ as p}from"./checkbox-Co7tpWUo.js";import{_ as f}from"./button-CXTtzREn.js";import"./iframe-D-Nl1ryX.js";import"./preload-helper-MpUUyRtn.js";import"./index-CdkR87ek.js";import"./constants-BMPlMwqI.js";import"./document-scroll-listener-C8J-OmUo.js";import"./floating-components-1F_x7pmN.js";import"./form-components-CavJsRwM.js";const{fn:M}=__STORYBOOK_MODULE_TEST__,A={title:"Components/DBTable/Complex",component:l,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{id:{control:"text"}}},a={args:{captionPlain:"Joined, sortable columns are Link.",default:`<DBTableHead
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
      >
        Red
      </DBLink></DBTableDataCell
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
      >
        Yellow
      </DBLink></DBTableDataCell
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
      >
        Green
      </DBLink></DBTableDataCell
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
>`},render:e=>({components:{DBTable:l,DBButton:f,DBCheckbox:p,DBInfotext:d,DBInput:s,DBLink:C,DBTableBody:i,DBTableDataCell:b,DBTableHead:r,DBTableHeaderCell:B,DBTableRow:n,DBTag:c,DBTooltip:T},setup(){return{args:e}},template:`<div  :style="{
  inlineSize: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 'var(--db-spacing-fixed-md)'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    Joined
                </DBInfotext><DBTable v-bind="args"   >${e.default}</DBTable></div>`})},t={args:{variant:"zebra",captionPlain:"Zebra, sortable columns are Link.",default:`<DBTableHead
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
      >
        Red
      </DBLink></DBTableDataCell
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
      >
        Yellow
      </DBLink></DBTableDataCell
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
      >
        Green
      </DBLink></DBTableDataCell
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
>`},render:e=>({components:{DBTable:l,DBButton:f,DBCheckbox:p,DBInfotext:d,DBInput:s,DBLink:C,DBTableBody:i,DBTableDataCell:b,DBTableHead:r,DBTableHeaderCell:B,DBTableRow:n,DBTag:c,DBTooltip:T},setup(){return{args:e}},template:`<div  :style="{
  inlineSize: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 'var(--db-spacing-fixed-md)'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    Zebra
                </DBInfotext><DBTable v-bind="args"   >${e.default}</DBTable></div>`})},o={args:{variant:"floating",captionPlain:"Floating, sortable columns are Link.",default:`<DBTableHead
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
      >
        Red
      </DBLink></DBTableDataCell
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
      >
        Yellow
      </DBLink></DBTableDataCell
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
      >
        Green
      </DBLink></DBTableDataCell
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
>`},render:e=>({components:{DBTable:l,DBButton:f,DBCheckbox:p,DBInfotext:d,DBInput:s,DBLink:C,DBTableBody:i,DBTableDataCell:b,DBTableHead:r,DBTableHeaderCell:B,DBTableRow:n,DBTag:c,DBTooltip:T},setup(){return{args:e}},template:`<div  :style="{
  inlineSize: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 'var(--db-spacing-fixed-md)'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    Floating
                </DBInfotext><DBTable v-bind="args"   >${e.default}</DBTable></div>`})},D={args:{variant:"floating",mobileVariant:"list",captionPlain:"Mobile variant: List, sortable columns are Link.",default:`<DBTableHead
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
      >
        Red
      </DBLink></DBTableDataCell
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
      >
        Yellow
      </DBLink></DBTableDataCell
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
      >
        Green
      </DBLink></DBTableDataCell
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
>`},render:e=>({components:{DBTable:l,DBButton:f,DBCheckbox:p,DBInfotext:d,DBInput:s,DBLink:C,DBTableBody:i,DBTableDataCell:b,DBTableHead:r,DBTableHeaderCell:B,DBTableRow:n,DBTag:c,DBTooltip:T},setup(){return{args:e}},template:`<div  :style="{
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
      >
        Red
      </DBLink></DBTableDataCell
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
      >
        Yellow
      </DBLink></DBTableDataCell
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
      >
        Green
      </DBLink></DBTableDataCell
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
  inlineSize: '100%',
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
      >
        Red
      </DBLink></DBTableDataCell
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
      >
        Yellow
      </DBLink></DBTableDataCell
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
      >
        Green
      </DBLink></DBTableDataCell
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
  inlineSize: '100%',
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
      >
        Red
      </DBLink></DBTableDataCell
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
      >
        Yellow
      </DBLink></DBTableDataCell
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
      >
        Green
      </DBLink></DBTableDataCell
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
  inlineSize: '100%',
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
      >
        Red
      </DBLink></DBTableDataCell
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
      >
        Yellow
      </DBLink></DBTableDataCell
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
      >
        Green
      </DBLink></DBTableDataCell
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
}`,...D.parameters?.docs?.source}}};const Y=["Joined","Floating","MobilevariantList","TableComplex3"];export{t as Floating,a as Joined,o as MobilevariantList,D as TableComplex3,Y as __namedExportsOrder,A as default};

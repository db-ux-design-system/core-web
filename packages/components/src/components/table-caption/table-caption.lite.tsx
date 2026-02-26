import { Show, useMetadata, useStore, useRef, useDefaultProps } from "@builder.io/mitosis";
import { DBTableCaptionState, DBTableCaptionProps } from "./model";
import { cls } from "../../utils";

useMetadata({});

useDefaultProps< DBTableCaptionProps>({});

export default function DBTableCaption(props: DBTableCaptionProps) {
  // This is used as forwardRef
  const _ref = useRef<HTMLTableCaptionElement | any>(undefined);
  // jscpd:ignore-start
  const state = useStore<DBTableCaptionState>({
        });
  // jscpd:ignore-end

  return (
    <caption
    	ref={_ref}
    	id={props.id}
    	class={cls('db-table-caption', props.className)}
    	>
      {props.children}
    </caption>
  );
}

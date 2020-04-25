import { WebPartContext } from "@microsoft/sp-webpart-base";
import { IPropertyFieldGroupOrPerson } from "@pnp/spfx-property-controls/lib/PropertyFieldPeoplePicker";

export interface IPnPExamplesProps {
  description: string;
  context: WebPartContext;
  lists: string | string[];
  people: IPropertyFieldGroupOrPerson[];
}

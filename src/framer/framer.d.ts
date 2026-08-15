declare module "framer" {
  export const ControlType: {
    Color: "color"
    String: "string"
  }

  export interface PropertyControlDefinition {
    type: string
    title: string
    defaultValue: string
  }

  export function addPropertyControls<Props>(
    component: (props: Props) => JSX.Element,
    controls: Record<string, PropertyControlDefinition>,
  ): void
}

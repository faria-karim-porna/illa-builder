import { ReactNode } from "react"
import { ComponentNode } from "@/redux/currentApp/components/componentsState"
import { VALIDATION_TYPES } from "@/utils/validationFactory"

export interface BaseSetter {
  className?: string
  isSetterSingleRow?: boolean
  value?: unknown
  attrName: string
  parentAttrName?: string
  panelConfig?: Record<string, any>
  handleUpdateDsl: (attrPath: string, value: any) => void
  handleUpdateMultiAttrDSL?: (updateSlice: Record<string, any>) => void
  handleUpdateOtherMultiAttrDSL?: (
    displayName: string,
    updateSlice: Record<string, unknown>,
  ) => void
  expectedType?: VALIDATION_TYPES
  attrNames?: string[]
  widgetDisplayName: string
  widgetType: string
  widgetOrAction: "ACTION" | "WIDGET"
  defaultValue?: any
  componentNode?: ComponentNode
  detailedDescription?: string
  labelName?: string
  labelDesc?: string
  isGuideMode?: boolean
  icon?: ReactNode
}

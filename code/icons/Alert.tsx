import BaseUiAlert from "baseui/icon/alert"
import { addPropertyControls, ControlType } from "framer"
import * as React from "react"
import { withHOC } from "../withHOC"
import { IconPropertyControls } from "../utils/PropertyControls"

const style: React.CSSProperties = {
  width: "100%",
  height: "100%",
}

const InnerAlert: React.SFC = props => {
  return <BaseUiAlert {...props} style={style} />
}

export const Alert = withHOC(InnerAlert)

Alert.defaultProps = {
  width: 50,
  height: 50,
}

addPropertyControls(Alert, {
  ...IconPropertyControls,
})

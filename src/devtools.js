import React from 'react'
import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'

const dev =   createDevTools(
	<DockMonitor key='dockdevtool' toggleVisibilityKey='H'
		changePositionKey='Q'
	>
		<LogMonitor key='logdevtool'></LogMonitor>
	</DockMonitor>
)
export const instrument = dev.instrument
export default dev

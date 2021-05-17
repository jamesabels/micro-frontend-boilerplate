import { proxy } from 'valtio'

const DashboardTopic = proxy({ count: 0, text: 'hello' })

export { DashboardTopic }

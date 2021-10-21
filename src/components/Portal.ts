import { ReactNode, useMemo, useEffect, ComponentType } from 'react'
import { createPortal } from 'react-dom'

const getPortalRoot = (id = 'portal-root') => {
  let root = document.getElementById(id)
  if (!root) {
    root = document.createElement('div')
    root.id = id
    document.body.append(root)
  }
  return root
}

type PortalProps = {
  rootId?: string
  children: ReactNode
}

export const Portal: ComponentType<PortalProps> = ({ children, rootId }) => {
  const element = useMemo(() => document.createElement('div'), [])

  useEffect(() => {
    const root = getPortalRoot(rootId)
    root && root.appendChild(element)
    return () => {
      root && root.removeChild(element)
    }
  }, [rootId, element])

  return createPortal(children, element)
}

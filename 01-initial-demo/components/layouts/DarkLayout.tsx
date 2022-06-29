import { FC, ReactNode } from "react"

interface Props {
    children: ReactNode
  }

export const DarkLayout: FC<Props> = ({ children }) => {
    return (
        <div style={{
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            padding: '5px',
            borderRadius: '10px'
        }}>
            <h3>DarkLayout</h3>
            <div>
                {children}
            </div>
        </div>
    )
}

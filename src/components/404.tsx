import { FC } from 'react'
type TProps = {}

const NotFound: FC<TProps> = (props) => {
        return (
                <main style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                        <h1>404 NOT FOUND</h1>
                </main>
        )
}

export default NotFound

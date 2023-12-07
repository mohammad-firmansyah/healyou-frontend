import { useEffect, useState } from "react"

const [snap,setSnap] = useState(null)
const useSnap = () => {
    useEffect(() => {
        const myMidtransClientKey = import.meta.env.VITE_REACT_APP_MIDTRANS_CLIENT_ID
        const script = `${import.meta.env.VITE_REACT_APP_MIDTRANS_API}`
        script.setAttribute('data-client-key',myMidtransClientKey)
        script.onLoad = () => {
            setSnap(window.snap)
        }

        document.body.appendChild(script)

        return ()=> {
            document.body.removeChild(script)
        }
    })
}

conset snapEmbed = (snapToken,embedId,action)
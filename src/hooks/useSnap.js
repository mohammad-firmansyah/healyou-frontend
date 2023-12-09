import { useEffect, useState } from "react"
const useSnap = () => {
    
    const [snap,setSnap] = useState(null)
    useEffect(() => {
        const myMidtransClientKey = "SB-Mid-client-m9dx0Kkamj7QvOeZ"
        const script = document.createElement('script')
        script.type = 'text/javascript';
        script.src = 'https://app.sandbox.midtrans.com/snap/snap.js'
        script.setAttribute('data-client-key',myMidtransClientKey)
        script.onload = () => {
        if ('snap' in window) {
            const { snap } = window;
            setSnap(snap);
        }
        };

        document.head.appendChild(script)

        return ()=> {
            document.head.removeChild(script)
        }
    },[])


    const snapEmbed = (snapToken,embedId,action) => {
    if(snap){
        snap.embed(snapToken, {
            embedId,
            onSuccess :function (result) {
                console.log('succes',result);
                action.onSuccess(result);
            },
            onPending :function (result) {
                console.log('pending',result);
                action.onPending(result);
            },
            onClose :function (result) {
                action.onClose(result);
            },
        })
    }
    
}
    


return {snapEmbed}
}
export default useSnap
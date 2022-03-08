import { useRouter } from 'next/router'
import Tenant from '../../components/Tenant/Tenant'

export default function slug(){
    const router = useRouter()
    // console.log("props: " + router)
    // console.log(router.query.slug)
    return (
        <>
        <Tenant slug={router.query.slug}/>
        </>
    );
}
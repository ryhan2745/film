import Skeleton from "react-loading-skeleton"

const SkeletonFile = () => {
    return <>
        <Skeleton circle height={250} baseColor="yellow" />
        <Skeleton height={20} baseColor="yellow" />
    </>
}
export default SkeletonFile
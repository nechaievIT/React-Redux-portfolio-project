import ClockLoader from "react-spinners/ClockLoader"
import { useSelector} from "react-redux"

const Spin = (props) => {
    const spinner = useSelector(state =>  state.appReducer.loading)
    
    return (
        <div className="loader-styles">
            <ClockLoader 
            loading = {spinner}
            size = {200}
            type = "TailSpin"
            color="black"
            />
        </div>
    )
}

export default Spin
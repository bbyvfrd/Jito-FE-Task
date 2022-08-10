import Distance from "./Distance"
import Name from "./Name"
import ProgressBar from "./ProgressBarComponent"

const HorseCard = ({name, distance}) => {

    const progressPercent = distance/10

    return (
        <>
                <div className="row single-result-row">
                 <Name name={name} />
                    <ProgressBar percent={progressPercent} />
                    <Distance distance={distance} />
                </div>
        </>
    )
}

export default HorseCard
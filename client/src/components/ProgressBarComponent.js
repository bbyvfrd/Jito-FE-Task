const ProgressBar = ({percent}) => {
    return (
        <div className="col-8 my-auto">
                    <div className="result-card rounded shadow">
                        <div className="wrapper-for-progressbar">
                            <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{width: percent + '%'}}></div>
                            </div>
                        </div>
                    </div>
                    </div>
    )
}

export default ProgressBar
import "./AnimatedBackground.modules.css"

const AnimatedBackground = (props) => {
    return (
        <div>
            <div className="bg"></div>
            <div className="bg bg2"></div>
            <div className="bg bg3"></div>
            <div className="content">
                <h1>{props.content}</h1>
            </div>
        </div>
    )
}

export default AnimatedBackground
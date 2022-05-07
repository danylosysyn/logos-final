import "./AnimatedBackground.modules.css"

const AnimatedBackground = (props) => {
    return (
        <div>
            <div class="bg"></div>
            <div class="bg bg2"></div>
            <div class="bg bg3"></div>
            <div class="content">
                <h1>{props.infoDiv}</h1>
            </div>
        </div>
    )
}

export default AnimatedBackground
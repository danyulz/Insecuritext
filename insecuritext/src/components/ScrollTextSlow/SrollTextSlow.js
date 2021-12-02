import './scrollTextSlow.css'

export default function ScrollTextSlow(props) {
    return (
        <div className="scrollTextSlow">
            <p class="marqueeSlow">
                <span>{props.text}&nbsp;</span>
            </p>
            <p class="marqueeSlow marquee2Slow">
                <span>{props.text}&nbsp;</span>
            </p>
        </div>
    )
}

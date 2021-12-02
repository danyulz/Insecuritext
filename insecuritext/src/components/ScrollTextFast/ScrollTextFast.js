import './scrollTextFast.css'

export default function ScrollTextFast(props) {
    return (
        <div className="scrollText">
            <p class="marquee">
                <span>{props.text}&nbsp;</span>
            </p>
            <p class="marquee marquee2">
                <span>{props.text}&nbsp;</span>
            </p>
        </div>
    )
}

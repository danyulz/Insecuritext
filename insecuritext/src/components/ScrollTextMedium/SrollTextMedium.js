import './scrollTextMedium.css'

export default function ScrollTextMedium(props) {
    return (
        <div className="scrollTextMedium">
            <p class="marqueeMedium">
                <span>{props.text}&nbsp;</span>
            </p>
            <p class="marqueeMedium marquee2Medium">
                <span>{props.text}&nbsp;</span>
            </p>
        </div>
    )
}

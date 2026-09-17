export default function btn(props) { // btnName, arrow
        return(
                <>
                                <button className="btn">{props.btnName}
                                        {props.arrow ? <i class="fa fa-arrow-down" aria-hidden="true"></i> : " "}
                                </button>
                </>
        )
}
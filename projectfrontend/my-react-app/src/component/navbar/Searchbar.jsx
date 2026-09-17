export default function SearchBar(props) { //searchBtnName
        return(
                <>
                        <div>
                                <button className="btn search-btn">
                                        {props.searchBtnName}
                                        <div className="search-arrow">
                                                <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                                        </div>
                                </button>
                        </div>
                </>
        )
}
import React from "react";


class Pagination extends React.Component {
    render(): React.ReactNode {
        return (
        <div className="col-12">
            <div className="pagination d-flex justify-content-center mt-5">
                <a href="javascript:void(0);" className="rounded">&laquo;</a>
                <a href="javascript:void(0);" className="active rounded">1</a>
                <a href="javascript:void(0);" className="rounded">2</a>
                <a href="javascript:void(0);" className="rounded">3</a>
                <a href="javascript:void(0);" className="rounded">4</a>
                <a href="javascript:void(0);" className="rounded">5</a>
                <a href="javascript:void(0);" className="rounded">6</a>
                <a href="javascript:void(0);" className="rounded">&raquo;</a>
            </div>
        </div>
        );
    }
}

export default Pagination;

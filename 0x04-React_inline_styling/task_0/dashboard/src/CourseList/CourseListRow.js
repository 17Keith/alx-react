import React from "react";
import PropTypes from "prop-types";

const rowStyle = {
    backgroundcolor: "#f5f5f5ab"
}

const rowHeader = {
    backgroundcolor: "#deb5b545"
}

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
    return (
        <tr style={rowStyle}>
            {isHeader ? (
                textSecondCell === null ? (
                    <th style={rowHeader} colSpan={2}>{textFirstCell}</th>
                ) : (
                    <>
                        <th style={rowHeader}>{textFirstCell}</th>
                        <th style={rowHeader}>{textSecondCell}</th>
                    </>
                )
            ) : (
                <>
                    <td>{textFirstCell}</td>
                    <td>{textSecondCell}</td>
                </>
            )}
        </tr>
    );
}

CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.string,
};

CourseListRow.defaultProps = {
    isHeader: false,
    textSecondCell: null,
};

export default CourseListRow;
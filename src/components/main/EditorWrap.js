import React from "react";
import Toolbar from "./Toolbar";

class EditorWrap extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Toolbar />
                <textarea id="editor" rows={12} cols={100}></textarea>
            </div>
        )
    }
}
export default EditorWrap;
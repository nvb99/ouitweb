import React, { Component } from 'react'
import { Editor } from 'react-draft-wysiwyg'
import { EditorState, convertToRaw } from 'draft-js'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import draftToHtml from 'draftjs-to-html'

class TextEditor extends Component {
    state = {
        editorState: EditorState.createEmpty(),
    }

    onEditorStateChange = (editorState) => {
        this.setState({
          editorState,
        })
    }

    render () {
        const {editorState} = this.state
        return (
            <div>
                <Editor
                wrapperClassName="wrapper-class"
                editorClassName="editor-class"
                toolbarClassName="toolbar-class"
                onEditorStateChange={this.onEditorStateChange}
                editorState={editorState}
                editorStyle={{'paddingLeft' : '10px'}}
                />
                <div className="form-group">
                    <label className="m-0 pl-1 pr-1 bg-primary text-light">Preview HTML</label>
                    <textarea rows="5"
                        disabled className="form-control"
                        value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
                    ></textarea>
                </div>
            </div>
        )
    }
}

export default TextEditor
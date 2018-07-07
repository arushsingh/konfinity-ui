import React, { Component } from 'react'
import './slidesForm.css';

export default class SlidesForm extends Component {
    render() {
        return (
            <div className="slidesform-container">
                <form className="story-board">
                    <h3>story board</h3>
                    <label className="label">add title</label>
                    <input type="text" name="title" />
                    <label for="file-upload" class=" label custom-file-upload">
                        <i class="fa fa-cloud-upload"></i> Custom Upload
                    </label>
                    <input id="file-upload" type="file" />
                    <label className="label"> video link</label>
                    <input type="text" name="videeo-title" />
                    <label className="label">add story</label>
                    <textarea className="story-data"></textarea>
                    <div className="form-submit"><button>submit</button></div>
                </form>

            </div >
        )
    }
}

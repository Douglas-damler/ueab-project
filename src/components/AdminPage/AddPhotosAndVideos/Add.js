import React, { useState } from 'react';
import './Add.css';
import { Redirect } from 'react-router';
import { Breadcrumb } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

export const AddPhotosAndVideos = (props) => {
    const [link, setLink ] = useState(true);
    const [ video, setVideo ] = useState(true);

    if (!localStorage.getItem('auth_token')) {
        return <Redirect to="/sign-in" />
    }

    return (
        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div class="container-fluid mt-0">
            <div className="mb-4 mb-lg-0">
                    <Breadcrumb className="d-none d-md-inline-block mt-3" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
                        <Breadcrumb.Item><FontAwesomeIcon icon={faHome} /></Breadcrumb.Item>
                        <Breadcrumb.Item active>Dashboard</Breadcrumb.Item>
                        <Breadcrumb.Item >Add photos and videos</Breadcrumb.Item>
                    </Breadcrumb>
            </div>
        <h4 class="page-title mb-3">Upload Videos and Images</h4>
        <div class="row">
            <div class="col-md-6">
                <div class="card" id="upload-images">
                    <div class="card-header">
                        <div class="card-title">Upload Images</div>
                        </div>
                        <div class="form-group">
                            <div class="form-group">
                                <label for="exampleFormControlFile1">You can upload multiple images</label> <br/>
                                <input type="file" name="photos[]" class="form-control-file mt-4" id="exampleFormControlFile1" multiple/>
                            </div>
                            
                        </div>
                        <div class="card-action mt-5">
                            <button class="btn btn-success mr-4">Submit</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card" id="upload-videos">
                        <div class="card-header">
                            <div class="card-title text-bold">Upload Videos</div>
                        </div>
                        <div class="card-body">
                            <div class="form-group">
                                <label for="squareInput">Enter the Video Title</label>
                                <input type="text" class="form-control input-square" id="squareInput" placeholder="Enter the title here..."/>
                            </div>

                            <div class="form-check mt-3">
                            <label>Type</label><br/>
                            <label class="form-radio-label mt-1">
                                <input 
                                    class="form-radio-input" 
                                    type="radio" 
                                    name="optionsRadios" 
                                    value=""
                                    onChange = {() => {
                                        setLink(false);
                                        setVideo(true)
                                    }}
                                />
                                <span class="form-radio-sign"> Youtube Link</span>
                            </label>
                            <br />
                            <label class="form-radio-label ml-3 mt-2">
                                <input 
                                    class="form-radio-input" 
                                    type="radio" 
                                    name="optionsRadios" 
                                    value=""
                                    onChange={() => {
                                        setLink(true)
                                        setVideo(false)
                                    }}
                                />
                                <span class="form-radio-sign"> Upload Video</span>
                            </label>
                        </div>
        
                            <div class="form-group" hidden = {link}>
                                <label for="pillInput">Enter Youtube Link</label>
                                <input type="text" class="form-control input-pill" id="pillInput" placeholder="Youtube link here"/>
                            </div>

                            <div class="form-group" hidden={video}>
                                <label for="exampleFormControlFile1">Upload a Video</label> <br/>
                                <input 
                                    type="file" 
                                    class="form-control-file mt-4" 
                                    id="exampleFormControlFile1"
                                    multiple
                                />
                            </div>

                            <div class="form-group">
								<label for="comment">Video Description</label>
								<textarea class="form-control" id="comment" rows="5">

								</textarea>
							</div>									
                        </div>
                        <div class="card-action">
                            <button class="btn btn-success">Submit</button>
                            
                        </div>
                    </div>

                </div>
            </div>
        </div>
        </main>

    )
}
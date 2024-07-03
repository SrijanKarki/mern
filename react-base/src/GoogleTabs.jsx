import React, { useState } from "react"

export default function GoogleTabs() {
    console.log("render");
    // let currentTab = "all"

    //setStatus is a mutator function
    const [state, setState] = useState("all");

    function changeToAll() {
        setState("all")
        // console.log(currentTab)
    }

    function changeToImages() {
        setState("images")
        // console.log(currentTab)
    }

    function changeToVideos() {
        setState("vidoes")
        // console.log(currentTab)
    }

    return (
        <div>
            currentTab:{state}
            <hr />
            <ul>
                <li onClick={changeToAll}>all</li>
                <li onClick={changeToImages}>images</li>
                <li onClick={changeToVideos}> videos</li>
            </ul>
            <div>
                <h2>All section</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Placeat eveniet assumenda iusto autem mollitia odit et,
                    reiciendis quia voluptates cum, tenetur dignissimos, tempore
                    est natus odio facilis reprehenderit quis quibusdam.
                </p>
            </div>
            <div>
                <h2>Images contents</h2>
                <p>image-1</p>
                <p>image-2</p>
                <p>image-3</p>
            </div>
            <div>
                <h2>vidoes contents</h2>
                <p>video-1</p>
                <p>video-2</p>
                <p>video-3</p>
            </div>
        </div>
    )
}

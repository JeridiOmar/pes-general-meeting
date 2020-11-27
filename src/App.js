import './App.css';
import Gm from "./components/Gm";
import NavbarPES from "./components/NavbarPES";
import {useEffect} from "react";

function App() {
    useEffect(
        ()=>{
            let underlineMenuItems = document.querySelectorAll(".nav-link");
            underlineMenuItems[0].classList.add("active");
            underlineMenuItems.forEach((item)=>{
                item.classList.remove("active");
            });
            underlineMenuItems.forEach(function (item) {
                item.addEventListener("click", function () {
                    underlineMenuItems.forEach(function (item) {
                        return item.classList.remove("active");
                    });
                    item.classList.add("active");
                });
            });
            let options = {
                root: null,
                rootMargin: '0px',
                threshold: 0.4
            };
            let options1 = {
                root: null,
                rootMargin: '0px',
                threshold: 0.2
            };
            let options2 = {
                root: null,
                rootMargin: '0px',
                threshold: 0.6
            };
            let optionsTitle = {
                root: null,
                rootMargin: '0px',
                threshold: 1
            };
            let about = document.querySelector('#about');
            let program = document.querySelector('#program');
            let speaker = document.querySelector('#speaker');
            let award = document.querySelector('#award');
            let bannerTitle=document.querySelector("#banner-title");
            let callbackTitle = (entries, observer) => {
                let underlineMenuItems = document.querySelectorAll(".nav-link");

                underlineMenuItems.forEach(function (item) {
                    return item.classList.remove("active");
                });



            };
            let callbackAbout = (entries, observer) => {
                let underlineMenuItems = document.querySelectorAll(".nav-link");

                underlineMenuItems.forEach(function (item) {
                    return item.classList.remove("active");
                });
                underlineMenuItems[0].classList.add("active");


            };
            let callbackProgram = (entries, observer) => {
                let underlineMenuItems = document.querySelectorAll(".nav-link");

                underlineMenuItems.forEach(function (item) {
                    return item.classList.remove("active");
                });
                underlineMenuItems[1].classList.add("active");


            };
            let callbackSpeaker = (entries, observer) => {
                let underlineMenuItems = document.querySelectorAll(".nav-link");

                underlineMenuItems.forEach(function (item) {
                    return item.classList.remove("active");
                });
                underlineMenuItems[2].classList.add("active");


            };
            let callbackAward = (entries, observer) => {
                let underlineMenuItems = document.querySelectorAll(".nav-link");

                underlineMenuItems.forEach(function (item) {
                    return item.classList.remove("active");
                });

                underlineMenuItems[3].classList.add("active");


            };
            let observerTitle = new IntersectionObserver(callbackTitle, optionsTitle);
            let observerAbout = new IntersectionObserver(callbackAbout, options);
            let observerProgram = new IntersectionObserver(callbackProgram, options1);
            let observerSpeaker = new IntersectionObserver(callbackSpeaker, options);
            let observerAward = new IntersectionObserver(callbackAward, options2);
            observerAbout.observe(about);
            observerProgram.observe(program);
            observerSpeaker.observe(speaker);
            observerAward.observe(award);
            observerTitle.observe(bannerTitle);
            setTimeout(()=>{


                underlineMenuItems.forEach((item)=>{
                    item.classList.remove("active");
                });
            },500);


        },[]
    );

    return (
        <div>
            <NavbarPES/>
            <Gm/>

        </div>

    );
}

export default App;

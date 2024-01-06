
import React from "react";
import { FaYoutube, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import { Helmet } from "react-helmet";

function Footer() {
    return (
        <div className="bg_footer">
            <Helmet>
                <title>
                    Categories
                </title>
            </Helmet>
            <header className="header_footer">
                <main className="first_footer">
                    <h2>Career-Bridge</h2>
                    <p>Career-Bridge.com</p>
                    <p>No.1 and most visited website for placement in india.</p>
                    <p>We help students to prepare for placement, with the best study material with easy to understand language for Preparation on Career-Bridge.</p>
                </main>
                <center>
                    <main className="second_footer">
                        <h4>Support</h4>
                        {/* <p>Home</p>
                        <p>About</p>
                        <p>Categories</p>
                        <p>Questions</p> */}
                        <li><a href="Home.js">Home</a></li>
                        <li><a href="About.js">About</a></li>
                        <li><a href="Categories.js">Categories</a></li>
                        <li><a href="Questions.js">Questions</a></li>

                    </main>
                </center>
                <main className="third_footer">
                    <h4>Get In Tough</h4>
                    <div class="icons">
                        <FaYoutube className="Youtube icon" />
                        <FaInstagram className="Instagram icon" />
                        <FaTwitter className="Twitter icon" />
                        <FaFacebook className="Cart icon" />
                    </div>
                </main>
            </header>
            <section className="section">
                <p>
                    copyright @ copy 2023 Career-Bridge
                </p>
            </section>
        </div>
    )
} export default Footer;
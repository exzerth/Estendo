import React from 'react'
import darkFb from '../images/dark-facebook.png'
import darkTw from '../images/dark-twitter.png'
import darkIg from '../images/dark-instagram.png'
import authorImg from '../images/author.png'

const BlogPost = () => {
  return (
    <section class="container author-post">
        <div class="author-post_socials">
            <a href="#fb"><img src={darkFb} alt="facebook-icon"/></a>
            <a href="#tw"><img src={darkTw} alt="twitter-icon"/></a>
            <a href="#ig"><img src={darkIg} alt="instagram-icon"/></a>
        </div>
        <div class="author-post_container author-post_text">
            <p>Many customers will continue doing business with you after they’ve been dissatisfied and complained. In fact, according to the service recovery paradox, a complaint is an opportunity that can actually result in the customer having a more positive view of your business after a complaint is resolved than before they ever had a problem.</p>
            <p>Being able to assess and address customer complaints efficiently is key to making this happen.</p>
            <h2>What are customer complaints, really?</h2>
            <p>Customer complaints are often a sign that there’s a disconnect between what customers expected and what you delivered. Sometimes that disconnect is caused by a customer’s unreasonable expectations or incorrect assumptions. Other times, it’s caused by something your company is doing wrong.</p>
            <p>A customer complaint might be the result of your marketing copy leading them to believe something incorrect about your product/service — or of your user experience setting customers up for failure. Or it could reflect a problem that’s happening outside of your direct control (e.g., third-party shipping issues).</p>
            <p>The only way to find out is to give credence to customer complaints to determine if they contain genuinely useful feedback.</p>
            <h2>What are customer complaints, really?</h2>
            <p>To uncover the reason you received a complaint from a customer and solve the problem in order to retain that customer, use this five-step process for handling customer complaints.</p>
        </div>

        <div class="author-post_container subscribe">
          <p>Join <strong>2,500</strong> customer-obsessed readers on our mailing list.</p>
          <form action="">
            <input type="email" name="email" id="subscribe-email" placeholder="Email Address"/>
            <button>Subscribe</button>
          </form>
          <p style={{color: "#ADB5BD"}}>Expertly curated emails that’ll help you deliver an exceptional customer experience.</p>
        </div>

        <hr class="author-post_container"/>

        <div class="author-post_container author-details">
          <div class="author-details_img">
              <img src={authorImg} alt=""/>
          </div>
          <div class="author-details_about">
              <p class="author-bio1">Gregory Ciotti</p>
              <p class="author-bio2">Greg is a writer, marketing strategist and alum of Help Scout. Connect with him on Twitter and LinkedIn.</p>
          </div>
        </div>
    </section>
  )
}

export default BlogPost
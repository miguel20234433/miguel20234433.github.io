const footerTemplate = document.createElement('template');

footerTemplate.innerHTML = `
    <style>
    .new_footer_area {
        background: #fbfbfd;
        
    }
    
    
    .new_footer_top {
        padding: 120px 0px 270px;
        position: relative;
        overflow-x: hidden;
        width: 100%;
        display:flex;
        flex-direction: column;
    }
    
    .footer-section{
        width: 40vw;
        background-color: #dc143c;
    }
    
    .footer-content{
        display: flex;
    }
    
    .contact-section{
        padding-top: 120px;
        text-align: center;
        color: whitesmoke;
    }
    .footer_bottom {
        font-size: 14px;
        font-weight: 300;
        line-height: 20px;
        color: #7f88a6;
        padding: 27px 0px;
        position:absolute;
        bottom: 0;
        width: 100%;
    }
    .new_footer_top .company_widget p {
        font-size: 16px;
        font-weight: 300;
        line-height: 28px;
        color: #6a7695;
        margin-bottom: 20px;
    }
    .new_footer_top .company_widget .f_subscribe_two .btn_get {
        border-width: 1px;
        margin-top: 20px;
    }
    .btn_get_two:hover {
        background: transparent;
        color: #5e2ced;
    }
    .btn_get:hover {
        color: #fff;
        background: #6754e2;
        border-color: #6754e2;
        -webkit-box-shadow: none;
        box-shadow: none;
    }
    a:hover, a:focus, .btn:hover, .btn:focus, button:hover, button:focus {
        text-decoration: none;
        outline: none;
    }
    
    
    
    .new_footer_top .f_widget.about-widget .f_list li a:hover {
        color: #5e2ced;
    }
    .new_footer_top .f_widget.about-widget .f_list li {
        list-style: none;
        margin-bottom: 11px;
        text-decoration: none;
    }
    .f_widget.about-widget .f_list li:last-child {
        margin-bottom: 0px;
    }
    .f_widget.about-widget .f_list li {
        margin-bottom: 15px;
    }
    .f_widget.about-widget .f_list {
        margin-bottom: 0px;
        padding-left: unset;
    }

    .button-container {
        margin-top: 50px;
        text-align: center;
        float: left;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }
    
    
    .btn {
        position: relative;
        color: rgb(0, 0, 0);
        width: clamp(5em, 12em + 5vw, 20em);
        height: 64px;
        line-height: 64px;
        transition: all 0.3s;
        color: rgb(51, 62, 72);
        span {
            transition: all 0.3s;
            transform: scale(1, 1);
        } 
    }
    
    .btn::before,
    .btn::after {
        content: '';
        position: absolute;
        transition: all 0.3s;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
    }
    
    .btn-one::before {
        left: 4px;
        z-index: 1;
    
        opacity: 0;
        background: #dc143c27;
        transform: scale(0.1, 1);
    }
    
    .btn-one:hover::before {
        opacity: 1;
        transform: scale(1, 1);
    }
    
    .btn-one::after {
        transition: all 0.3s;
        border: 1px solid #dc143cc0;
    }
    
    .btn-one:hover::after {
        transform: scale(1, .1);
        opacity: 0;
    }
    .new_footer_top .f_social_icon a {
        width: 44px;
        height: 44px;
        line-height: 43px;
        background: transparent;
      
        font-size: 24px;
        background-size: 100%;
    } 
    
    .new_footer_top .f_social_icon a:nth-child(1) {
        background-image: url(../js-project-2/public/icons/insta.png);
    } 
    
    .new_footer_top .f_social_icon a:nth-child(2) {
        background-image: url(../js-project-2/public/icons/fb.png);
    } 
    .new_footer_top .f_social_icon a:nth-child(3) {
        background-image: url(../js-project-2/public/icons/wa.png);
    } 
    
    .f_social_icon{
        display: flex;
    }
    
    .f_social_icon a {
        width: 46px;
        height: 46px;
        font-size: 14px;
        line-height: 45px;
        display: inline-block;
        background: #ebeef5;
        text-align: center;
        -webkit-transition: all 0.2s linear;
        -o-transition: all 0.2s linear;
        transition: all 0.2s linear;
    }
    .ti-facebook:before {
        content: "\e741";
    }
    .ti-twitter-alt:before {
        content: "\e74b";
    }
    .ti-vimeo-alt:before {
        content: "\e74a";
    }
    .ti-pinterest:before {
        content: "\e731";
    }
    
    .btn_get_two {
        -webkit-box-shadow: none;
        box-shadow: none;
        background: #5e2ced;
        border-color: #5e2ced;
        color: #fff;
    }
    
    .btn_get_two:hover {
        background: transparent;
        color: #5e2ced;
    }
    
    .new_footer_top .f_social_icon a + a {
        margin-left: 4px;
    }
    .new_footer_top .f-title {
        margin-bottom: 30px;
        color: #263b5e;
    }
    .f_600 {
        font-weight: 600;
    }
    .f_size_18 {
        font-size: 18px;
    }
    
    .new_footer_top .f_widget.about-widget .f_list li a {
        color: #6a7695;
    }
    
    .footer-main-container{
        width: 90%;
        margin: auto;
    }
    
    .footer-container{
        display: grid;
        grid-template-columns: repeat(4, 16vw);
        justify-content: center;
    }
    
    div .footer-facebook{
        background-size: 25px;
        width: 35px;
        height: 35px;
        color: #263b5e;
        display: inline-block;
        background-image: url(../js-project-2/public/icons/illness-icon.png);
    }
    
    form{
        display: flex;
        flex-direction: column;
    }
    .form__group {
        position: relative;
        padding: 15px 0 0;
        margin-top: 10px;
        width: 100%;
      }
    
    .form__field {
        font-family: inherit;
        border: 0;
        border-bottom: 2px solid whitesmoke;
        outline: 0;
        font-size: 1.3rem;
        color: whitesmoke;
        padding: 7px 0;
        background: transparent;
        transition: border-color 0.2s;
        width: 80%;
      }
      .form__field::placeholder {
        color: transparent;
      }
      .form__field:placeholder-shown ~ .form__label {
        font-size: 1.3rem;
        cursor: text;
        top: 20px;
        width: 100%;
      }
      
      .form__label {
        position: absolute;
        top: 0;
        display: block;
        transition: 0.2s;
        font-size: 1rem;
      }
      
      .form__field:focus {
        padding-bottom: 6px;
        font-weight: 700;
        border-width: 3px;
        border-image: linear-gradient(to right, #dc143c, #ebebeb);
        border-image-slice: 1;
      }
      .form__field:focus ~ .form__label {
        position: absolute;
        top: 0;
        display: block;
        transition: 0.2s;
        font-size: 1rem;
        color: #dc143c;
        font-weight: 700;
      }
      
      /* reset input */
      .form__field:required, .form__field:invalid {
        box-shadow: none;
      }
    
      #marketingButton{
        justify-content: left;
        justify-content: center;
      }
    
      #funnel.btn{
        width: 80% !important;
        color:whitesmoke;
      }
    
      #funnel.btn::before{
        background: #ffffff2a;
      }
    
      #funnel.btn::after{
        background: #ffffff27;
        border: 1px solid #ffffff70;
    
      }
    @media (max-width: 1105px){
        .footer-container{
            grid-template-columns: repeat(4, 1fr);
        }
    }
    
    @media (max-width: 1023px){
        .footer-content{
            flex-direction: column;
        }
        .footer-section{
            width: unset;
        }
        .contact-section{
            padding-bottom: 120px;
        }
        .footer-container{
            grid-template-columns: repeat(2, 1fr);
        }
        .footer-container > * {
            margin-bottom: 50px;
        }
    }
    
    @media (max-width: 400px){
    
        .footer-container{
            grid-template-columns: repeat(1, 1fr);
        }
    }
    </style>
    <footer class="new_footer_area bg_color">
        <div class="footer-content">
            <div class="footer-section">
                <div class="contact-section" data-wow-delay="0.2s"
                    style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInLeft;">
                    <h3>Get in Touch</h3><br />
                    <p>Don’t miss any updates of our new services and plans!</p>
                    <form action="#" class="f_subscribe_two mailchimp" method="post" novalidate="true" _lpchecked="1">
                        <div class="form__group field">
                            <input type="input" class="form__field" placeholder="Name" name="name" id='name' required />
                            <label for="name" class="form__label">Email</label>
                        </div>
                        <div class="button-container" id="marketingButton">
                            <div class="btn btn-one" id="funnel">
                                <span>Subscribe</span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="new_footer_top">
                <div class="footer-main-container">
                    <div class="footer-container">
                        <div class="col-lg-3 col-md-6">
                            <div class="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.6s"
                                style="visibility: visible; animation-delay: 0.6s; animation-name: fadeInLeft;">
                                <h3 class="f-title f_600 t_color f_size_18">About</h3>
                                <ul class="list-unstyled f_list">
                                    <li><a href="#">About Tan Jou Sern</a></li>
                                    <li><a href="#">...</a></li>
                                    <li><a href="#">...</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.4s"
                                style="visibility: visible; animation-delay: 0.4s; animation-name: fadeInLeft;">
                                <h3 class="f-title f_600 t_color f_size_18">Products</h3>
                                <ul class="list-unstyled f_list">
                                    <li><a href="#">Medical Card</a></li>
                                    <li><a href="#">Life Insurance</a></li>
                                    <li><a href="#">Critical Illness Coverage</a></li>
                                    <li><a href="#">Savings and Wealth Management</a></li>
                                    <li><a href="#">Retirement and Pension Plans</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.6s"
                                style="visibility: visible; animation-delay: 0.6s; animation-name: fadeInLeft;">
                                <h3 class="f-title f_600 t_color f_size_18">Help</h3>
                                <ul class="list-unstyled f_list">
                                    <li><a href="#">FAQ</a></li>
                                    <li><a href="#">Term &amp; conditions</a></li>
                                    <li><a href="#">Reporting</a></li>
                                    <li><a href="#">Documentation</a></li>
                                    <li><a href="#">Support Policy</a></li>
                                    <li><a href="#">Privacy</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="f_widget social-widget pl_70 wow fadeInLeft" data-wow-delay="0.8s"
                                style="visibility: visible; animation-delay: 0.8s; animation-name: fadeInLeft;">
                                <h3 class="f-title f_600 t_color f_size_18">Socials</h3>
                                <div class="f_social_icon">
                                    <a href="#"><span></span></a>
                                    <a href="#"></a>
                                    <a href="#"></a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="footer_bottom">
                    <div class="footer-main-container">
                        <div class="row align-items-center">
                            <div class="col-lg-6 col-sm-7">
                                <p class="mb-0 f_400">© JS Inc.. 2023 All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
`;

class Footer extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'closed' });  
        shadowRoot.appendChild(footerTemplate.content);
      }
}

customElements.define('footer-component', Footer);
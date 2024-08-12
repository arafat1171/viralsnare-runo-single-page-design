import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import link from './images/link.png'
import mixito from './images/mixito.png'
import watch from './images/watch.png'
import Arrow from './images/BendArrow.png'
import pcircle from './images/pcircle.png'
import count from './images/count.png'
import rate from './images/rate.png'
import grd from './images/grd.png'
import wrate from './images/wrate.png'
import mobile from './images/mobile.png'
import andro from './images/andro (1).png'
import apple from './images/apple.png'
import flutter from './images/flutter.png'
import react from './images/react.png'
import kotlin from './images/kotlin.png'
import left from './images/left.png'
import gold from './images/gold.png'
import support from './images/support.png'
import brain from './images/brain.png'
import ms from './images/ms.png'
import handshake from './images/handshake.png'
import property from './images/property.png'
import chart from './images/chart.png'
import enterprise from './images/enterprize.png'
import section from './images/Section.png'
import stick from './images/stick.png'
import star from './images/star.png'
import pf1 from './images/pf1.png'
import com from './images/Comlist.png'
import React, { useState, useEffect } from 'react';
import gman from './images/gman.png'
import scb from './images/scb.png'
import wscb from './images/wscb.png'
import phone from './images/phone.png'
import email from './images/email.png'
import location from './images/location.png'
import tekone from './images/tekone.png'
import pseudo from './images/pseudo.png'
import { faFacebook, faTwitter, faYoutube, faPinterest, faBehance } from '@fortawesome/free-brands-svg-icons';




function Dashboard() {

    const people = [
        { name: 'John Bradshaw', role: 'Senior Advisor', image: require('./images/john.png') },
        { name: 'Nick Powel', role: 'Leader', image: require('./images/Nick.png') },
        { name: 'Elizabeth Layla', role: 'Designer', image: require('./images/Layla.png') },
        { name: 'Paul Walker', role: 'Director', image: require('./images/paul.png') }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextPerson = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % people.length);
    };

    const prevPerson = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + people.length) % people.length);
    };
    useEffect(() => {
        const interval = setInterval(() => {
            nextPerson();
        }, 2000);


        return () => {
            clearInterval(interval);
        };
    }, []);
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
      setDarkMode(!darkMode);
    };

    return (
        <div className='Body'>

            <div className="Cont1">
                <div className="Nav1">
                    <div className='NavInner1'>
                        <img src={link} />
                    </div>
                    <div className='Nav1Inner2'>
                        <div className='mb1'><a href="#">Home<span className='mt1'>11</span></a></div>
                        <div><a href="#">About</a></div>
                        <div  className='mb1'><a href="#">Services<span className='mt1'>15</span></a></div>
                        <div><a href="#">Pages</a></div>                       
                        <div><a href="#">Blog</a></div>  
                        <div><a href="#">Contact</a></div>                  
                        </div>
                    <div className='Nav1Inner3'>
                        <div>(+855) 2669 1234</div>
                       
                        <div><button className='Nav1Button1'>Get a Quote</button></div>

                    </div>

                </div>
                <div className='Nav2'>
                    <div>
                        <img src={mixito} />
                    </div>
                    <div className='Nav2Inner2'>
                    <div><a href="#">Home</a></div>
                    <div><a href="#">Features</a></div>
                    <div><a href="#">Product</a></div>
                    <div><a href="#">Faq</a></div>
                    <div><a href="#">Review</a></div>
                    <div><a href="#">Contact</a></div>
                    </div>

                </div>
                <div className='WatchandText'>
                    <div>
                        <img src={watch} className='WatchandTextinner1' />
                    </div>
                    <div className='WatchandTextinner2'>
                        <div className='WTTitle'>Best Landing Page
                            For Product Showcase</div>
                        <div className='WTText'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit.
                            Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi.
                            Sed pretium ligula.
                        </div>
                        <div>
                            <button className='WTButton1'>Buy for $199</button>
                            <button className='WTButton2'>More Info</button>
                        </div>
                    </div>
                </div>
               
            </div>
            <div className='Text-Container1'>
                <div className='TC1-TextBox'>
                    <div className='TC1-TextTitle'>IT Consultation</div>
                    <div className='TC1-Text'>
                        Podcasting Optonal Change
                        Management Inside Of Workflows
                        To Establish A Framework.
                    </div>
                </div>
                <div className='TC1-TextBox'>
                    <div className='TC1-TextTitle'>Data Security</div>
                    <div className='TC1-Text'>
                        Leverage Agile Frameworks To
                        Provide A Robust Synopsis For
                        High Level Overviews.
                    </div>
                </div>
                <div className='TC1-TextBox'>
                    <div className='TC1-TextTitle'>Digital Marketing</div>
                    <div className='TC1-Text'>Capitalize On Low Hanging Fruit
                        Identify A Ballpark Added Value
                        Activity To Beta Test.</div>
                </div>
                <div className='TC1-TextBox'>
                    <div className='TC1-TextTitle'>Cloud Services</div>
                    <div className='TC1-Text'>Bring To The Table Win-win
                        Survival Strategies To Ensure
                        Proactive Domination.</div>
                </div>
            </div>
            <div>
                <img src={Arrow} className='Arrow' />
            </div>
            <div className='ITCont2'>
                <div className='ITC2Box1'>

                    <div>
                        <img src={pcircle} className="Pcircle" />

                    </div>
                    <div className='GradiantCont'>
                        <div><img src={count} /></div>
                        <div className='Wline'></div>
                        <div className='ICTBox2Txtcont'>
                            <div className='Y25'>25+</div>
                            <div className='txtexp'>Years Experience</div>
                        </div>
                    </div>
                </div>
                <div className='ITCBox2'>
                    <div className='ICB2C1'>
                        <div><img src={rate} /></div>
                        <div>Who We Are</div>
                        <div><img src={rate} /></div>
                    </div>
                    <div className='ICBTC2'>We provide perfect it <span className='cp'>solutions & technology</span> for any startups.</div>
                    <div className='ICBTC3'>Bring to the table win-win survival strategies to ensure proactive domination.
                        At the end of the day going forward, a new normal that has evolved from
                        operational X is on the runway.
                    </div>
                    <div className='ICBTC4'>
                        <div className='GRDC4'>
                            <div>
                                <img src={grd} />
                            </div>
                            <div>
                                Internal Networking
                            </div>

                        </div>

                        <div className='GRDC4'>
                            <div>
                                <img src={grd} />
                            </div>
                            <div>
                                Tech Services
                            </div>

                        </div>

                    </div>
                    <div className='ICBTC3'>Rring to the table win-win survival strategies to ensure proactive domination.
                        At the end of the day going forward.
                    </div>
                    <div>
                        <button className='DisButton'> Discover More →</button>
                    </div>
                </div>
            </div>
            <div className='Cont4'>
                <div className='TxtBtCont4'>
                    <div className='Txtcont4'>
                        <div className='ICB2C4'>

                            <div><img src={wrate} /></div>
                            <div>Who We Are</div>
                            <div><img src={wrate} /></div>
                        </div>
                        <div className='ICBTC4'>We provide advance solutions to growing your online business</div>

                    </div>
                    <div>
                        <button className='ServiceButton'>View All Services</button>
                    </div>
                </div>
                <div className='Appcnt'>
                    <div className='AppC4'>
                        <div className='Ad4'>
                            <div><img src={mobile} /></div>
                            <div className='Adtxt4'>App Development</div>

                        </div>
                        <div className='ApIcon4'>
                            <div className='IcandName'>
                                <div><img src={andro} /></div>
                                <div className='txt4'>Android App</div>

                            </div>
                            <div className='IcandName'>
                                <div><img src={apple} /></div>
                                <div className='txt4'>iOS App</div>

                            </div>
                            <div className='IcandName'>
                                <div><img src={flutter} /></div>
                                <div className='txt4'>Flutter</div>

                            </div>
                            <div className='IcandName'>
                                <div><img src={react} /></div>
                                <div className='txt4'>React Native</div>

                            </div>
                            <div className='IcandName'>
                                <div><img src={kotlin} /></div>
                                <div className='txt4'>Kotlin</div>

                            </div>


                        </div>

                    </div>
                    <div className='AppC4'>
                        <div className='Ad4'>
                            <div><img src={mobile} /></div>
                            <div className='Adtxt4'>App Development</div>

                        </div>
                        <div className='ApIcon4'>
                            <div className='IcandName'>
                                <div><img src={andro} /></div>
                                <div className='txt4'>Android App</div>

                            </div>
                            <div className='IcandName'>
                                <div><img src={apple} /></div>
                                <div className='txt4'>iOS App</div>

                            </div>
                            <div className='IcandName'>
                                <div><img src={flutter} /></div>
                                <div className='txt4'>Flutter</div>

                            </div>
                            <div className='IcandName'>
                                <div><img src={react} /></div>
                                <div className='txt4'>React Native</div>

                            </div>
                            <div className='IcandName'>
                                <div><img src={kotlin} /></div>
                                <div className='txt4'>Kotlin</div>

                            </div>


                        </div>

                    </div>
                    <div className='AppC4'>
                        <div className='Ad4'>
                            <div><img src={mobile} /></div>
                            <div className='Adtxt4'>App Development</div>

                        </div>
                        <div className='ApIcon4'>
                            <div className='IcandName'>
                                <div><img src={andro} /></div>
                                <div className='txt4'>Android App</div>

                            </div>
                            <div className='IcandName'>
                                <div><img src={apple} /></div>
                                <div className='txt4'>iOS App</div>

                            </div>
                            <div className='IcandName'>
                                <div><img src={flutter} /></div>
                                <div className='txt4'>Flutter</div>

                            </div>
                            <div className='IcandName'>
                                <div><img src={react} /></div>
                                <div className='txt4'>React Native</div>

                            </div>
                            <div className='IcandName'>
                                <div><img src={kotlin} /></div>
                                <div className='txt4'>Kotlin</div>

                            </div>


                        </div>

                    </div>

                </div>
            </div>
            <div className='Cont5'>
                <div className='ITC5'>
                    <div>
                        <img src={left} />
                    </div>
                    <div className='txtCont5'>
                        <div className='ICB2C1'>
                            <div><img src={rate} /></div>
                            <div>Why Choose Us</div>
                            <div><img src={rate} /></div>
                        </div>
                        <div className='ICBTC2'>Reasons To Count On Us</div>
                        <div className='ICBTC3'>Bring to the table win-win survival strategies to ensure proactive domination.
                            At the end of the day.
                        </div>
                        <div className='IT2C5'>
                            <div><img src={gold} /></div>
                            <div className='txtcont5'>
                                <div className='Btext5'>
                                    First Growing Process
                                </div>
                                <div>
                                    Bring to the table win-win survival strategies to ensur.
                                </div>
                            </div>

                        </div>
                        <div className='IT2C5'>
                            <div><img src={support} /></div>
                            <div className='txtcont5'>
                                <div className='Btext5'>
                                    Dedicated Support 24/7
                                </div>
                                <div>
                                    Leverage agile frameworks to provide a robust.                                </div>
                            </div>
                        </div>
                        <div className='IT2C5'>
                            <div><img src={brain} /></div>
                            <div className='txtcont5'>
                                <div className='Btext5'>
                                    AI Machine & Deep Learning                                 </div>
                                <div>
                                    Podcasting operational change management inside.                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='IconCont5'>
                    <div className='IcF5'>
                        <div>
                            <img src={ms} />
                        </div>
                        <div className='cp2'>
                            3020+

                        </div>
                        <div className='Btext5'><span className='mapp'>Apps</span> Developed </div>
                    </div>
                    <div className='IcF5'>
                        <div>
                            <img src={ms} />
                        </div>
                        <div className='cp2'>
                            3020+

                        </div>
                        <div className='Btext5'><span className='mapp'>Apps</span> Developed </div>
                    </div>
                    <div className='IcF5'>
                        <div>
                            <img src={ms} />
                        </div>
                        <div className='cp2'>
                            3020+

                        </div>
                        <div className='Btext5'><span className='mapp'>Apps</span> Developed </div>
                    </div>
                    <div className='IcF5'>
                        <div>
                            <img src={ms} />
                        </div>
                        <div className='cp2'>
                            3020+

                        </div>
                        <div className='Btext5'><span className='mapp'>Apps</span> Developed </div>
                    </div>
                    <div className='IcF5'>
                        <div>
                            <img src={ms} />
                        </div>
                        <div className='cp2'>
                            3020+

                        </div>
                        <div className='Btext5'><span className='mapp'>Apps</span> Developed </div>
                    </div>
                    <div className='IcF5'>
                        <div>
                            <img src={ms} />
                        </div>
                        <div className='cp2'>
                            3020+

                        </div>
                        <div className='Btext5'><span className='mapp'>Apps</span> Developed </div>
                    </div>

                </div>

            </div>
            <div className='Cont6'>
                <div className='Cont6Inner1'>
                    <div className='Cont6Inner11'>
                        <div className='ICB2C4'>

                            <div><img src={wrate} /></div>
                            <div>Work</div>
                            <div><img src={wrate} /></div>
                        </div>
                        <div className='ICBTC4'>Who we work with</div>
                        <div className='wtext6'>
                            Phosfluorescently engage worldwide methodologies with in
                            web-enabled technology. Interactively coordinate proactive
                            e-commerce via process-centric "outside the box" thinking
                            Completely pursue technology scalable.
                        </div>
                        <div>
                            <button className='ServiceButton'>Lets Work Together</button>
                        </div>
                    </div>
                    <div className='Cont6Inner12'>
                        <div className='BoxCn'>
                            <div className='Cont6Inner123'>
                                <div className='Cont6Inner1234'>
                                    <div><img src={handshake} /></div>
                                    <div className='Btext5'>Start Up business</div>

                                </div>
                            </div>
                            <div className='Cont6Inner123'>
                                <div className='Cont6Inner1234'>
                                    <div><img src={property} /></div>
                                    <div className='Btext5'>Agencies</div>

                                </div>
                            </div>
                        </div>
                        <div className='BoxCn2'>
                            <div className='Cont6Inner123'>
                                <div className='Cont6Inner1234'>
                                    <div><img src={chart} /></div>
                                    <div className='Btext5'>Small & Medium Up Business</div>

                                </div>
                            </div>
                            <div className='Cont6Inner123'>
                                <div className='Cont6Inner1234'>
                                    <div><img src={enterprise} /></div>
                                    <div className='Btext5'>Enterprise</div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='ICB2C1'>
                <div><img src={rate} /></div>
                <div>Working process</div>
                <div><img src={rate} /></div>
            </div>
            <div className='ICBTC2'>Process We Follow</div>
            <div className='secm'>
                <img src={section} />
            </div>
            <div className='Cont7'>
                <div className='Cont7I1'>
                    <div className='ICB2C4'>

                        <div><img src={wrate} /></div>
                        <div> Case Study </div>
                        <div><img src={wrate} /></div>
                    </div>
                    <div className='ICBTC4'>Our recent launched
                        projects available into
                        market</div>

                    <div>
                        <button className='ServiceButton'>View All projects</button>
                    </div>

                </div>
                <div className='Cont7I2'>
                    <div><img src={stick} /></div>
                </div>
            </div>
            <div className='ICB2C1'>
                <div><img src={rate} /></div>
                <div>Testimonials</div>
                <div><img src={rate} /></div>
            </div>
            <div className='ICBTC2'>What customers said about
                our ‘Tekone’</div>
            <div className='Cont8'>
                <div className='Cont8I1'>
                    <div className='Cont8I11'>
                        <img src={star} className='star' />
                    </div>
                    <div className='Cont8I12'>
                        <img src={pf1} />
                        <div className='Ny'>New York,USA</div>
                    </div>
                </div>
                <div className='Cont8I1'>
                    <div className='Cont8I11'>
                        <img src={star} className='star' />
                    </div>
                    <div className='Cont8I12'>
                        <img src={pf1} />
                        <div className='Ny'>New York,USA</div>
                    </div>
                </div>
                <div className='Cont8I1'>
                    <div className='Cont8I11'>
                        <img src={star} className='star' />
                    </div>
                    <div className='Cont8I12'>
                        <img src={pf1} />
                        <div className='Ny'>New York,USA</div>
                    </div>
                </div>
            </div>
            <div className='PN1'>
                <div><img src={rate} /></div>
                <div>More Than 5K+ Brands Work Tekone</div>
                <div><img src={rate} /></div>
            </div>
            <div> <img src={com} /></div>
            <div className='Cont9'>
                <div className='ICB2C4'>

                    <div><img src={wrate} /></div>
                    <div>  Team Member  </div>
                    <div><img src={wrate} /></div>
                </div>
                <div className='ICBTC4'>Our experienced experts
                    for your support</div>
                <div className='imgMargin10'>
                    <img src={people[currentIndex].image} alt={people[currentIndex].name} />
                </div>
                <div className="Wtxt9">
                    <button onClick={prevPerson} className='Slbutton1'>← Prev</button>
                    <button onClick={nextPerson} className='Slbutton2'>Next →</button>
                </div>
                <div className='gman9'>
                    <img src={gman} />
                </div>
            </div>
            <div className='Cont10'>
                <div>
                    <div className='ICB2C4'>

                        <div><img src={wrate} /></div>
                        <div> We carry more than just good coding skills </div>
                        <div><img src={wrate} /></div>
                    </div>
                    <div className='ICBTC4'>Let's build your website</div>
                </div>
                <div>
                    <button className='ServiceButton'>Contact Us</button>
                </div>

            </div>
            <div className='Cont11'>
                <div className='ICB2C1'>
                    <div><img src={rate} /></div>
                    <div>Recent News</div>
                    <div><img src={rate} /></div>
                </div>
                <div className='ICBTC2'>Our insight on trends,</div>
                <div className='ICBTC2'>Tecnologies and Transformationds</div>
                <div className='BlogCont11'>
                    <div className='Blog1Cont11'>
                        <div className='ImgTxtCont11'>
                            <img src={scb} className='scb' />
                            <div className='Wcont11'>
                                <div><img src={wscb} /></div>
                                <div>Application</div>
                            </div>

                        </div>
                        <div className='ImgTxt2Cont11'>
                            <div className='TB1Cont11'>Tips to help you build your
                                social media</div>
                            <div className='read11'>
                                <div>Mar 16, 2023</div>
                                <div><img src={wscb} className='wscb' /></div>
                                <div>8 min Read</div>
                            </div>
                            <div>
                                Podcasting operational change management

                            </div>
                            <div>
                                inside of workflows to establish a...
                            </div>
                            <div className='review11'>
                                <div>
                                    <img src={pf1} className="img11" />
                                    by Tekone
                                </div>
                                <button className='ReadButton'>Read Post</button>
                            </div>


                        </div>
                    </div>
                    <div className='Blog1Cont11'>
                        <div className='ImgTxtCont11'>
                            <img src={scb} className='scb' />
                            <div className='Wcont11'>
                                <div><img src={wscb} /></div>
                                <div>Application</div>
                            </div>

                        </div>
                        <div className='ImgTxt2Cont11'>
                            <div className='TB1Cont11'>Tips to help you build your
                                social media</div>
                            <div className='read11'>
                                <div>Mar 16, 2023</div>
                                <div><img src={wscb} className='wscb' /></div>
                                <div>8 min Read</div>
                            </div>
                            <div>
                                Podcasting operational change management

                            </div>
                            <div>
                                inside of workflows to establish a...
                            </div>
                            <div className='review11'>
                                <div>
                                    <img src={pf1} className="img11" />
                                    by Tekone
                                </div>
                                <button className='ReadButton'>Read Post</button>
                            </div>


                        </div>
                    </div>
                    <div className='Blog1Cont11'>
                        <div className='ImgTxtCont11'>
                            <img src={scb} className='scb' />
                            <div className='Wcont11'>
                                <div><img src={wscb} /></div>
                                <div>Application</div>
                            </div>

                        </div>
                        <div className='ImgTxt2Cont11'>
                            <div className='TB1Cont11'>Tips to help you build your
                                social media</div>
                            <div className='read11'>
                                <div>Mar 16, 2023</div>
                                <div><img src={wscb} className='wscb' /></div>
                                <div>8 min Read</div>
                            </div>
                            <div>
                                Podcasting operational change management

                            </div>
                            <div>
                                inside of workflows to establish a...
                            </div>
                            <div className='review11'>
                                <div>
                                    <img src={pf1} className="img11" />
                                    by Tekone
                                </div>
                                <button className='ReadButton'>Read Post</button>
                            </div>


                        </div>
                    </div>

                </div>
                <div>
                    <div ><button className='ReadButton2'>View All Blogs</button></div>
                </div>

            </div>
            <div className='Cont12'>
                <div className='message12'>
                    <div className='Form12'>
                        <div className='ICB2C4'>

                            <div><img src={wrate} /></div>
                            <div>  Contact Us  </div>
                            <div><img src={wrate} /></div>
                        </div>
                        <div className='ICBTC2'>Send Message</div>
                        <div className='Forms12R1'>
                            <input type="text" placeholder='Your Name' className='Form-Control' />
                            <input type="text" placeholder='Your Email' className='Form-Control' />
                        </div>
                        <div className='Forms12R1'>
                            <input type="text" placeholder='Your Name' className='Form-Control' />
                            <input type="text" placeholder='Your Email' className='Form-Control' />
                        </div>
                        <div>
                            <input type="text" className='textbox12' />
                            <div>
                                <button className='DisButton'> Send Message →</button>
                            </div>
                        </div>
                    </div>
                    <div className='Img12'>

                    </div>


                </div>

            </div>
            <div className='Cont13'>
                <div className='icotct13'>
                    <div><img src={phone} /></div>
                    <div className='cnctNo13'>
                        <div className='txt1-13'>Contact Us</div>
                        <div className='txt2-13'>(+004) 555 - 012 - 065</div>

                    </div>

                </div>
                <div className='icotct13'>
                    <div><img src={email} /></div>
                    <div className='cnctNo13'>
                        <div className='txt1-13'>Email Us</div>
                        <div className='txt2-13'>info@yourname.com</div>

                    </div>

                </div>
                <div className='icotct13'>
                    <div><img src={location} /></div>
                    <div className='cnctNo13'>
                        <div className='txt1-13'>Address</div>
                        <div className='txt2-13'>2972 Westheimer 96 Rd.</div>

                    </div>

                </div>
            </div>
            <div className='Cont14'>
                <div className='Cont14Box1'>
                    <div className='tekone14'>
                        <img src={tekone} />
                        <div className='txt14w'>Proactively envisioned multimedia
                            based expertise and cross-media
                            growth strategies seamlessly.
                        </div>
                        <div>
                            <button className='DisButton'> Discover More →</button>
                        </div>


                    </div>
                    <div className='Services14'>
                        <div className='service13'>Our Services</div>
                        <div className='dttxt14'>
                            <img src={pseudo} />
                            <div className='txtw14r'>Cyber Security</div>
                        </div>
                        <div className='dttxt14'>
                            <img src={pseudo} />
                            <div className='txtw14r'>Cloud Services</div>
                        </div>
                        <div className='dttxt14'>
                            <img src={pseudo} />
                            <div className='txtw14r'>Digital Strategy</div>
                        </div>
                        <div className='dttxt14'>
                            <img src={pseudo} />
                            <div className='txtw14r'>SEO Optimization</div>
                        </div>
                        <div className='dttxt14'>
                            <img src={pseudo} />
                            <div className='txtw14r'>Brand Identity</div>
                        </div>


                    </div>
                    <div className='Services14'>
                        <div className='service13'>Information</div>
                        <div className='dttxt14'>
                            <img src={pseudo} />
                            <div className='txtw14r'>About</div>
                        </div>
                        <div className='dttxt14'>
                            <img src={pseudo} />
                            <div className='txtw14r'>Faq</div>
                        </div>
                        <div className='dttxt14'>
                            <img src={pseudo} />
                            <div className='txtw14r'>Our Projects</div>
                        </div>
                        <div className='dttxt14'>
                            <img src={pseudo} />
                            <div className='txtw14r'>Pricing</div>
                        </div>
                        <div className='dttxt14'>
                            <img src={pseudo} />
                            <div className='txtw14r'>Services</div>
                        </div>


                    </div>

                </div>
                <div className='Cont15'>
                    <div className='pp15'>
                        <div>Privacy Policy</div>
                        <div>Terms Of Use</div>
                        <div>Stie Map</div>
                        <div> Career</div>
                    </div>
                    <div className='icogap15'>
                        <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>

                        <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>

                        <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>

                        <a href="#"><FontAwesomeIcon icon={faPinterest} /></a>

                        <a href="#"><FontAwesomeIcon icon={faBehance} /></a>

                    </div>
                </div>
                <div className='Cont16'>
                © 2023 Tekone. Designed By RSTheme.
                </div>

            </div>

        </div>
    )
}
export default Dashboard

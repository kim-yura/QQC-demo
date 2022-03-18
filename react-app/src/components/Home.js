import React, { useEffect } from "react";
import { Link } from 'react-router-dom';

function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <div className='site-body'>
            <div className='home-section'>
                <h1>
                    Welcome to the DEMO SITE for the Quiet Queers Craftalong!
                </h1>
                <h3>
                    June 1, 2022 ~ August 1, 2022
                </h3>
                <p>
                    Welcome to the home of the Quiet Queers Craftalong, an annual Pride-themed make-along hosted by <a className='body-link' href='https://www.instagram.com/knitboop/' rel='noreferrer' target='_blank'>knitboop</a>!
                </p>
                <div className='divider' />
                <p>
                    QQC was originally conceived of in 2019 as a response to two main concerns about Pride:
                    <br />
                    1. The corporate-washing of Pride and queer culture; and
                    <br />
                    2. The inaccessibility of some Pride events, which (in the US) mostly hinge around being outdoors, loud, and unfriendly to the needs of disabled and neurodiverse queers/allies.
                </p>
                <p>
                    This craft-along aims to address these concerns by giving queer crafters and allies a (virtual) place to come together, support other queer designers and indie dyers, and win some fabulous prizes while they’re at it!
                </p>
                <div className='divider' />
                <h3>Got Questions?</h3>
                <p>
                    Check out our <Link to='/faq' exact={true} className='body-link'>FAQ</Link>. If your question isn't answered there, reach out to us by email at QuietQueersCraftalong@gmail.com, or on Instagram at <a className='body-link' href='https://www.instagram.com/quietqueerscal/' rel='noreferrer' target='_blank'>@QuietQueersCAL</a>!
                </p>
                <div className='divider' />
                <h3>Applications for Partners and Makers Now Open!</h3>
                <p>
                    QQC couldn't happen without generous partners and makers! If you'd like to help make the event a success, please consider applying as a partner or maker. To keep the event as streamlined as possible, <b>application forms will close May 20th!</b>
                </p>
                <p>
                    <a className='body-link'
                        href='https://forms.gle/mJvUT68hnVLLuWsUA'
                        rel='noreferrer'
                        target='_blank'>
                        Application for Queer Makers (to be displayed in the database)<br />
                    </a>
                    <a className='body-link'
                        href='https://forms.gle/cUvqm6wD3awot8hf7'
                        rel='noreferrer'
                        target='_blank'>
                        Application for Maker Highlight (to be featured on a weekly basis)<br />
                    </a>
                    <a className='body-link'
                        href='https://forms.gle/dHcUmDTzmYWjunJV9'
                        rel='noreferrer'
                        target='_blank'>
                        Application to Donate Prizes (queer makers and straight allies welcome!)<br />
                    </a>
                    <a className='body-link'
                        href='https://forms.gle/X7UB35VFAUGHjn1x5'
                        rel='noreferrer'
                        target='_blank'>
                        For Makers Offering Discount Codes<br />
                    </a>
                    <a className='body-link'
                        href='https://ko-fi.com/knitboop'
                        rel='noreferrer'
                        target='_blank'>
                        Donate to knitboop's Ko-fi
                    </a>
                    <br />
                </p>
            </div>
        </div>
    )

};

export default Home;

import React, { useEffect } from "react";

function FAQ() {
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <div className='site-body'>
            <div className='home-section'>
                <h1>
                    QQC Frequently Asked Questions
                </h1>

                <h3>
                    When does the craft-along run?
                </h3>
                <p>
                    The 2022 event will run from June 1 to August 1. Follow along at <a className='body-link' href='https://www.instagram.com/quietqueerscal/' rel='noreferrer' target='_blank'>@QuietQueersCAL</a>!
                </p>
                <div className='divider' />

                <h3>
                    How do I participate?
                </h3>
                <p>
                    During the craft-along, you will need to complete projects that use yarn or fiber from a queer dyer, or a pattern by a queer designer. WIPs are welcome! The more projects you complete, the more entries you will win for the final prizes drawing. Your FOs can also be projects for other craft-alongs. You also don't need to identify as queer to participate; straight allies welcome!
                </p>
                <div className='divider' />

                <h3>
                    Where do I post my entries?
                </h3>
                <p>
                    Please post your FO entries on Instagram using the hashtag <a href='https://www.instagram.com/explore/tags/qqc2022fo/' className='body-link'>#QQC2022FO</a>. Make sure to include information about the yarn and pattern used. Please post your FO <b>ONCE ONLY</b>. Cross-posting results in a lot of clutter for us, and the team has to work extra hard to make sure you aren't double-dipping!
                </p>
                <p>
                    If you would like to post about your WIPs, please use the hashtag <a href='https://www.instagram.com/explore/tags/qqc2022/' className='body-link'>#QQC2022</a>.
                </p>
                <div className='divider' />

                <h3>
                    Can I participate on Ravelry?
                </h3>
                <p>
                    Unfortunately, due to concerns of the new Ravelry site redesign causing migraines and seizures, the event will not be held on Ravelry, but will instead be held exclusively on Instagram. Given that the craft-along is meant to be a welcoming space for disabled and neurodiverse queer fam and straight friends, we cannot in good conscience redirect anybody to a website that pose such risks. We apologize for the inconvenience, and we do hope you will join us on Instagram, where the event will be happening in full force!
                </p>
                <div className='divider' />

                <h3>
                    What if I'm not a fast knitter/crocheter/spinner/weaver?
                </h3>
                <p>
                    No worries! There will be regular giveaways that are separate from the FOs prizes. You will just need to be active and participating on those Instagram posts in order to be entered for those.
                </p>
                <div className='divider' />

                <h3>
                    I don't know any queer dyers or designers!
                </h3>
                <p>
                    Not to worry, we have compiled a directory for you! <a href='/makers' className='body-link'>Link Here!</a>
                </p>
                <p><b>Important Note:</b> We have received permission from these makers to be included in our lists. If you have suggestions for queer makers, please make sure to check that they are ok with being included in a list before you forward us that information! As much as we love celebrating Pride, there are some folks who may be uncomfortable with being outed and it is extremely important for us to honor those requests.
                </p>
                <div className='divider' />

                <h3>
                    Who's hosting this event?
                </h3>
                <img id='faq-pic' src='https://scrapswap.s3.amazonaws.com/pic.jpg' />
                <p>
                    Hi! It's me, <a href='https://www.instagram.com/knitboop/' className='body-link' rel='noreferrer' target='_blank'>knitboop</a> (she/her), a Queer Korean transplant to the Midwest who runs this event, knits, crochets, spins, designs knitwear patterns, and makes notions. QQC started on a whim in the summer of 2019 when, after having recently come out to my close friends, I was lamenting the lack of accessible Pride events. Since then it's grown to an amazing annual event and I'm so thrilled to be able to use my platform to highlight some of the amazing Queer makers in our community! I'm most active on Instagram, so catch me there if you want.
                </p>
                <p>
                    I'm also the designer/dev for this site as a junior full-stack software engineer! 👩🏻‍💻
                </p>
                <div className='divider' />

                <h3>
                    How can I contribute?
                </h3>
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
                <div className='divider' />

                <h3>
                    Have another question? See an error on the website?
                </h3>
                <p>
                    Please send us an email at QuietQueersCraftalong@gmail.com, or a DM on Instagram at <a className='body-link' href='https://www.instagram.com/quietqueerscal/' rel='noreferrer' target='_blank'>@QuietQueersCAL</a>!
                </p>
            </div>
        </div>
    )

};

export default FAQ;

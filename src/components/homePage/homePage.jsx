import React from "react";

const HomePage = () => {

    return <div className="homePage">
        <section className="top">
            <div className="top__content">
                <p><strong>OpenAlex</strong> is a fully open catalog of the global research system.
                    It's named after the ancient Library of Alexandria and made by the nonprofit OurResearch.</p>
                <picture>
                    <img alt=""
                         src="https://2520693015-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FpHVuV3Ib5KXeBKft4Kcl%2Fuploads%2FONuFhZlD0hDP5CJeA3rV%2FOpenAlex-logo-5.png?alt=media&token=fdac5902-db43-471d-9e47-50d2f0e76938"
                    />
                </picture>
            </div>
        </section>
        <section className="whyOpenAlex">
            <div className="whyOpenAlex__content allSection">
                <div className="whyOpenAlex__title title">
                    <strong>Why OpenAlex?</strong>
                </div>
                <div className="whyOpenAlex__text">
                    <strong>OpenAlex</strong> offers an open replacement for industry-standard scientific knowledge bases like
                    Elsevier's Scopus and Clarivate's Web of Science. Compared to these paywalled services, <strong>OpenAlex</strong> offers significant advantages in terms of inclusivity, affordability, and avaliability.
                </div>
                <div className="whyOpenAlex__list">
                    <ul  className="whyOpenAlex__ul">
                        <li className="whyOpenAlex__item"><strong>Big</strong><div>We have about twice the coverage of the other services, and have
                            significantly better coverage of non-English works and works from the Global South.</div></li>
                        <li className="whyOpenAlex__item"><strong>Easy</strong><div>Our service is fast, modern, and well-documented.</div></li>
                        <li className="whyOpenAlex__item"><strong>Open</strong><div>Our complete dataset is free under the CC0 license, which allows for transparency and reuse.</div></li>
                    </ul>
                </div>
            </div>
        </section>
        <section className="contacts">
            <div className="contacts__content allSection">
                <div className="contacts__title title">
                    <strong>Contacts</strong>
                </div>
                <div className="contacts__text">
                    For tech support and bug reports, please visit our help page.
                    You can also join the <strong>OpenAlex</strong> user group, and follow us on Twitter (@OpenAlex_org) and Mastodon.
                </div>
            </div>
        </section>
        <section className="citation">
            <div className="citation__content allSection">
                <div className="citation__title title">
                    <strong>Citation</strong>
                </div>
                <div className="citation__text">
                    If you use <strong>OpenAlex</strong> in research, please cite this paper:
                </div>
                <div className="citation__paper">
                    Priem, J., Piwowar, H., & Orr, R. (2022). OpenAlex: A fully-open index of scholarly works, authors,
                    venues, institutions, and concepts. ArXiv. https://arxiv.org/abs/2205.01833
                </div>
            </div>
        </section>
    </div>
}

export default HomePage;